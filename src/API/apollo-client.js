import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws/index.js";

const httpLink = new HttpLink({
    uri: "https://helping-anteater-79.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "gKRonPqsZwBl3phGcOVbQh0cWeT0UnVfVsmiEDaDMv23Y7txNO4fWHy6Btzr3e5g"
    }
})

const wsLink = new WebSocketLink({
    uri: "wss://helping-anteater-79.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": "gKRonPqsZwBl3phGcOVbQh0cWeT0UnVfVsmiEDaDMv23Y7txNO4fWHy6Btzr3e5g"
            }
        
        }
    }
})

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return(
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
)

const apolloClient = new ApolloClient({
    link : splitLink,
    cache: new InMemoryCache()
})

// const apolloClient = new ApolloClient({
//     uri: "https://real-pelican-23.hasura.app/v1/graphql",
//     cache: new InMemoryCache(),
//     headers: {
//         "x-hasura-admin-secret": "JI0l42dqyuzi11tYlaVPB62RPM683BKymU2IlezZYB6QqM04pfjFZULoaTMhIQ0Q"
//     }

// })

export default apolloClient;