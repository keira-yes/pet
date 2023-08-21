import { NavLink, NavLinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

interface AppLinkProps extends NavLinkProps {
    to: string;
}

export const AppLink: React.FC<AppLinkProps> = ({ to, children, ...otherProps }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? classes.active + ' ' : '') + classes.link}
            {...otherProps}>
            {children}
        </NavLink>
    );
};
