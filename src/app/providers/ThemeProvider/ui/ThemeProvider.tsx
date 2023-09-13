import { type FC, useMemo, useState } from 'react'
import { Theme, ThemeContext, defaultTheme } from '../lib/ThemeContext'

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const contextValue = useMemo(() => ({ theme, setTheme }), [theme])

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
