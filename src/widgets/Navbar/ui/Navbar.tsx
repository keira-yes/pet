import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};
