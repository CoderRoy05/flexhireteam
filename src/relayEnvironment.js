// relayEnvironment.js
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

function fetchQuery(operation, variables) {
  return fetch('https://flexhire.com/api/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'FLEXHIRE-API-KEY': 'v4zf7guf9eucr3c5', //API Key Insertion
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
