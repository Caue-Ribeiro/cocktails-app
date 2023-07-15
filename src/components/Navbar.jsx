import { NavLink } from 'react-router-dom'
import Wrapper from '../../public/wrappers/Navbar'
import beer from '../../public/assets/beer.svg'

const Navbar = () => {
    return (
        <Wrapper>
            <div className="logo">
                <h3>cocktails </h3>
                <span>
                    <img src={beer} alt="beer" />
                </span>
            </div>
            <div className="links-container">
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'about'}>about</NavLink>
                <NavLink to={'newsletter'}>newsletter</NavLink>
            </div>
        </Wrapper>
    )
}
export default Navbar
