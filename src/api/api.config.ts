export const fetcher = (url: string) =>
  fetch(url)
    .then((r) => r.json())
    // eslint-disable-next-line no-console
    .catch((e) => console.error(e))
