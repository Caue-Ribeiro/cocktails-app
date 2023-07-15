import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Home
