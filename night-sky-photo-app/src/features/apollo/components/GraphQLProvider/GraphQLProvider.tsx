import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink
  } from "@apollo/client";

export const GraphQLProvider:React.FC<{apiUrl:string}> = ({apiUrl, children}) => {

    const httpLink = new HttpLink({
      uri: apiUrl
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
      });

    return(
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}