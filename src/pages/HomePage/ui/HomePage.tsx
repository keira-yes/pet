import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <>
            <h1>{t('Home Page')}</h1>
            <p>{t('Welcome')}</p>
        </>
    );
};

export default HomePage;
