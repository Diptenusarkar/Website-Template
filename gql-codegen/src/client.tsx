import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  // uri: 'http://localhost:8000/api',
  uri: "http://16.170.235.242:8000/api",
  cache: new InMemoryCache(),
});

export default Client;
