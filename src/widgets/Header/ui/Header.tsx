import { Logo } from 'shared/ui/Logo/Logo'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import styles from './Header.module.scss'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Logo />
                <div className={styles.navigation}>
                    <Navbar />
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </header>
    )
}
