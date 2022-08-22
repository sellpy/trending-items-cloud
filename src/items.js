const ALGOLIA_API_KEY = '3f5fce6ab498cad98a47abf2ac74c783'

export const getTrendingItems = async () => {
  try {
    const response = await fetch(
      'https://m6wnfr0lvi-dsn.algolia.net/1/indexes/prod_marketItem_se_relevance/query',
      {
        method: 'POST',
        body: JSON.stringify({
          params: new URLSearchParams({
            hitsPerPage: 100,
          }).toString(),
        }),
        headers: {
          'x-algolia-api-key': ALGOLIA_API_KEY,
          'x-algolia-application-id': 'M6WNFR0LVI',
        },
      }
    )
    const { hits } = await response.json()
    return hits
  } catch (error) {
    console.error(error)
  }
}
