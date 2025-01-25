import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState({ color: '#FFFFFF', backgroundColor: '#000000' })

    const toggleTheme = () => {
        theme.color === '#FFFFFF' ?
            setTheme({ color: '#000000', backgroundColor: '#FFFFFF' }) :
            setTheme({ color: '#FFFFFF', backgroundColor: '#000000' })
    }
    return (
        <div>
            <ThemeContext.Provider value={[theme, toggleTheme]}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeProvider