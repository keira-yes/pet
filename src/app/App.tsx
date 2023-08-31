import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/AppRouter';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

function MyComponent() {
    const { t, i18n } = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'no' : 'en');
    };

    return (
        <>
            <button onClick={translate}>{t('Translate')}</button>
            <h1>{t('Welcome to React')}</h1>
        </>
    );
}

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <Header />
                <MyComponent />
                <div className="container">
                    <div className="page">
                        <Sidebar />
                        <main>
                            <AppRouter />
                        </main>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
