import { useTranslation } from 'react-i18next'

const AboutPage: React.FC = () => {
    const { t } = useTranslation('about')

    return (
        <div>
            <h1>{t('About Us')}</h1>
        </div>
    )
}

export default AboutPage
