import { useMemo } from 'react'
import useSWRInfinite from 'swr/infinite'

import { urls } from '../constants/urls'
import { ICard } from '../ui/Card/CardInterface'
import { fetcher } from './api.config'

interface ISWRProps {
  data: ICard[]
  meta: { totalPages: number }
}

const getCards = (index: number, previousPageData: ISWRProps) => {
  if (previousPageData && previousPageData.data.length < 9) return null

  return urls.products(index + 1)
}

export const useCards = () => {
  const { data, size, setSize } = useSWRInfinite<ISWRProps>(getCards, fetcher)

  const cards = data?.reduce<ICard[]>(
    (previousValue, currentValue) => previousValue.concat(currentValue.data),
    [],
  )

  const totalPage = data?.[0].meta.totalPages

  const value = useMemo(
    () => ({ cards, size, setSize, totalPage }),
    [cards, totalPage, data],
  )

  return value
}
