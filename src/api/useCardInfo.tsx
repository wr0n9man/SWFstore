import useSWR from 'swr'

import { urls } from '../constants/urls'
import { ICard } from '../ui/Card/CardInterface'
import { fetcher } from './api.config'

interface ISWRProps {
  data: { product: ICard; relatedProducts: ICard[] }
}

export const useCard = (id: number) => {
  const { data, error } = useSWR<ISWRProps>(urls.product(id), fetcher)

  return data
}
