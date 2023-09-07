import { NavLink, type NavLinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'

interface AppLinkProps extends NavLinkProps {
    to: string
}

export const AppLink: React.FC<AppLinkProps> = ({ to, children, ...otherProps }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? styles.active + ' ' : '') + styles.link}
            {...otherProps}>
            {children}
        </NavLink>
    )
}
