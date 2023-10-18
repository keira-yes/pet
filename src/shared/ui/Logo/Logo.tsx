import { Link } from 'react-router-dom'
import { ReactComponent as LogoImg } from 'shared/assets/img/logo.svg'
import styles from './Logo.module.scss'

export const Logo: React.FC = () => {
    return (
        <Link to='/' className={styles.logo}>
            <LogoImg />
        </Link>
    )
}
