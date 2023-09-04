import { useTranslation } from 'react-i18next';

export const LangSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'no' : 'en');
    };

    return <button onClick={translate}>{t('Language')}</button>;
};
