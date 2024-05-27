import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiurl = process.env.APIURL || "http://localhost:3000/graphql";

export const apolloClient = new ApolloClient({
    uri : apiurl,
    cache : new InMemoryCache()
})