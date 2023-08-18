import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/AppRouter';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Change theme</button>
            <AppRouter />
        </div>
    );
};
