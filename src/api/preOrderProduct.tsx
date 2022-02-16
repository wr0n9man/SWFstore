import { urls } from '../constants/urls'

export const preOrder = async (productId: number, email: string) => {
  const response = await fetch(urls.preOrder, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId,
      email,
    }),
  })
  const result = await response.json()

  return result
}
