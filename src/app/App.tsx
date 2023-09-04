import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/AppRouter';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div className={classNames('app', [theme])}>
                <Header />
                <div className="container">
                    <div className="page">
                        <Sidebar />
                        <main>
                            <AppRouter />
                        </main>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};
