import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    split, 
    HttpLink
  } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

export const GraphQLProvider:React.FC<{apiUrl:string, wsApiUrl:string}> = ({apiUrl, wsApiUrl, children}) => {

    const httpLink = new HttpLink({
      uri: apiUrl
    });

    /*
    const wsLink = new WebSocketLink({
      uri: wsApiUrl,
      options: {
        reconnect: true
      }
    });

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
    );
    */

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