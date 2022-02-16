export const baseUrl = 'https://react-test-starwars.vercel.app'

export const urls = {
  products: (page: number) => `${baseUrl}/api/products?page=${page}`,
  product: (productId: number) => `${baseUrl}/api/products/${productId}`,
  preOrder: `${baseUrl}/api/pre-order`,
}
