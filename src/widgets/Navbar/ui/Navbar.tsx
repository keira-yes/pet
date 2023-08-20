import { AppLink } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <AppLink to="/">Home</AppLink>
            <AppLink to="/about">About</AppLink>
        </nav>
    );
};
