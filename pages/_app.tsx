import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://smart-meeting.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: { token: "a123gjhgjsdf6576" },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
