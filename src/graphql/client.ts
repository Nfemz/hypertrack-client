import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const httpUrl = "https://hypertrack-server.herokuapp.com/graphql";
const wsUrl = "ws://hypertrack-server.herokuapp.com/graphql";

const wsLink = new WebSocketLink({
  uri: wsUrl,
  options: {
    lazy: true,
    reconnect: true,
  },
});

function isSubscription(operation) {
  const definition = getMainDefinition(operation.query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}

const httpLink = ApolloLink.from([
  new ApolloLink((operation, forward) => {
    return forward(operation);
  }),
  new HttpLink({ uri: httpUrl }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: split(isSubscription, wsLink, httpLink),
  defaultOptions: { query: { fetchPolicy: "no-cache" } },
});

export default client;
