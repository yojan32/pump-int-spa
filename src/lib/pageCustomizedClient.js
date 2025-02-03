import getQuerys from '@/lib/ApolloClient'
import { gql } from '@apollo/client'

// Función para obtener el contenido de las paginas
export async function customeContentPage() {
	const GET_PAGE_CONTENT_QUERY = gql`
		query getPageElementor {
			pageContent(id: "test-page", idType: SLUG) {
				code {
					editCode
				}
			}
		}
	`;
	try {
		const { data } = await getQuerys.query({
			query: GET_PAGE_CONTENT_QUERY,
			fetchPolicy: 'no-cache',
		});
		return data?.pageContent?.code;
	} catch (error) {
		throw new Error(error.message);
	}
}