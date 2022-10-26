import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-us-west-2.hygraph.com/v2/cl9ctz6e30dqw01ug6cyv26s8/master",
    cache: new InMemoryCache(),

});

export default client;
