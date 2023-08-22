import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <AppLink to="/">Home</AppLink>
            <AppLink to="/about">About</AppLink>
        </nav>
    );
};
