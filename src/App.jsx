import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Landing, NewsLetter, AboutUs } from './pages'
import { loader as LandingLoader } from './pages/Landing'
import { loader as singleCocktailInfo } from './pages/CocktailDetails'
import Error404 from './components/Error404'
import CocktailDetails from './pages/CocktailDetails'
import { action as newsLetterAction } from './pages/NewsLetter'

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
})

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: LandingLoader(queryClient),
            },
            { path: 'about', element: <AboutUs /> },
            {
                path: 'newsletter',
                element: <NewsLetter />,
                action: newsLetterAction,
            },
            {
                path: 'cocktail/:id',
                element: <CocktailDetails />,
                loader: singleCocktailInfo(queryClient),
            },
        ],
    },
])

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
export default App
