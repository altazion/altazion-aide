
const searchClient = algoliasearch(
  'V6QF747NR2',
  'd67dc13094800d44882aa06ceac16381'
);

autocomplete({
  container: '#autocomplete',
  placeholder: 'Recherchez dans la documentation',
  getSources({ query }) {
    return [
      {
        sourceId: 'aide',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'aide',
                query,
                params: {
                  hitsPerPage: 5,
                },
              },
            ],
          });
        },
        // ...
      },
    ];
  },
});