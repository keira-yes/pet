import { NavLink, NavLinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

export const AppLink: React.FC<NavLinkProps> = ({ to, children, ...otherProps }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? classes.active + ' ' : '') + classes.link}
            {...otherProps}>
            {children}
        </NavLink>
    );
};
