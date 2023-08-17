import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';

const AboutPage = lazy(() => import(/* webpackChunkName: "AboutPage" */ 'pages/AboutPage'));
const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ 'pages/HomePage'));

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', [theme], {})}>
            <button onClick={toggleTheme}>Change theme</button>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Suspense fallback={<span>Loading...</span>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
