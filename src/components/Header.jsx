import { Link, NavLink } from 'react-router-dom';
import Logo from './assets/logo.png';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={Logo} alt="ShopMate Logo" />
                <span>ShopMate</span>
            </Link>
            <nav className="navigation">
                <NavLink to='/' className='link' end>Home</NavLink>
                <NavLink to='/cart' className="link">Cart</NavLink>
            </nav>
            <Link to="/cart" className='items'>
                <span>Count: 2</span>
            </Link>

        </header>
    )
}
