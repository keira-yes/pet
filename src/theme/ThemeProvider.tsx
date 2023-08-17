import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
