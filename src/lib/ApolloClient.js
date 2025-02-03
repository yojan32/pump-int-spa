import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_WOO_URL_API
})

const getQuerys = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default getQuerys;