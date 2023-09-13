import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {
    const { t } = useTranslation()
    return (
        <nav className={styles.navbar}>
            <AppLink to='/'>{t('Home')}</AppLink>
            <AppLink to='/about'>{t('About')}</AppLink>
        </nav>
    )
}
