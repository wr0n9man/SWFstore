export const urls = {
  base: 'https://react-test-starwars.vercel.app',
  products: (page: number) =>
    `https://react-test-starwars.vercel.app/api/products?page=${page}`,
  product: (productId: number) =>
    `https://react-test-starwars.vercel.app/api/products/${productId}`,
  preOrder: 'https://react-test-starwars.vercel.app/api/pre-order',
}
