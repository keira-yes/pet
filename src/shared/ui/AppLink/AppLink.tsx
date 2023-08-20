import { LinkProps, NavLink } from 'react-router-dom';
import classes from './AppLink.module.scss';

export const AppLink: React.FC<LinkProps> = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? classes.active + ' ' : '') + classes.link}>
            {children}
        </NavLink>
    );
};
