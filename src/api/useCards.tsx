import React, { useCallback, useMemo } from 'react'
import useSWRInfinite from 'swr/infinite'

import { urls } from '../constants/urls'
import { ICard } from '../ui/Card/CardInterface'

interface ISWRProps {
  data: ICard[]
  meta: { totalPages: number }
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const getCards = (index: number, previousPageData: ISWRProps) => {
  if (previousPageData && previousPageData.data.length < 9) return null

  return urls.products(index)
}

export const useCards = () => {
  const { data, size, setSize } = useSWRInfinite<ISWRProps>(getCards, fetcher)

  const totalPage = data?.[0].meta.totalPages ?? 1

  const cards = data?.reduce<ICard[]>(
    (previousValue, currentValue) => previousValue.concat(currentValue.data),
    [],
  )

  const incSize = useCallback(() => {
    if (size < totalPage) setSize(size + 1)
  }, [size, totalPage])

  const value = useMemo(
    () => ({ size, setSize, cards, incSize }),
    [size, setSize, cards],
  )

  return value
}
