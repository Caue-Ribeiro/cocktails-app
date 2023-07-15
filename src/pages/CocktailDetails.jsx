import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CocktailInfo from '../components/CocktailInfo'

const cocktailIdFetch =
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailID = id => {
    return {
        queryKey: ['cocktail', id],
        queryFn: async () => {
            const { data } = await axios.get(`${cocktailIdFetch}${id}`)
            return data
        },
    }
}

export const loader =
    queryClient =>
    async ({ params }) => {
        await queryClient.ensureQueryData(singleCocktailID(params.id))

        return params.id
    }

const CocktailDetails = () => {
    const id = useLoaderData()
    const response = useQuery(singleCocktailID(id))
    const data = response?.data?.drinks

    return <CocktailInfo data={data} />
}
export default CocktailDetails
