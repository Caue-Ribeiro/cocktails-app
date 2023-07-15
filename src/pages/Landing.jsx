import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LandingCards from '../components/LandingCards'
import { useLoaderData } from 'react-router-dom'
import Loading from '../components/Loading'

import SearchDrink from '../components/SearchDrink'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const getCocktailsList = searchItem => {
    return {
        queryKey: ['search', searchItem || 'all'],
        queryFn: async () => {
            const response = await axios.get(`${url}${searchItem}`)
            return response.data.drinks
        },
    }
}

export const loader =
    queryClient =>
    async ({ request }) => {
        const url = new URL(request.url)

        const searchParam = url.searchParams.get('search') || ''

        queryClient.ensureQueryData(getCocktailsList(searchParam))
        return searchParam
    }

const Landing = () => {
    const searchParam = useLoaderData()
    const { data, isLoading } = useQuery(getCocktailsList(searchParam))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <SearchDrink searchParam={searchParam} />
            <LandingCards data={data} />
        </div>
    )
}
export default Landing
