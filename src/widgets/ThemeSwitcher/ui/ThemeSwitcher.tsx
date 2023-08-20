import { useTheme } from 'app/providers/ThemeProvider';

export const ThemeSwitcher: React.FC = () => {
    const { toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>Change theme</button>;
};
