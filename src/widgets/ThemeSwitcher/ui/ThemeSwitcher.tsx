import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Sun from 'shared/assets/icons/sun.svg';
import Moon from 'shared/assets/icons/moon.svg';

export const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button type="button" theme={ButtonTheme.TRANSPARENT} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <Moon /> : <Sun />}
        </Button>
    );
};
