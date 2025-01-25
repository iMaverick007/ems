import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider.jsx'

const Toggle = () => {

    const [theme, toggleTheme] = useContext(ThemeContext)

    return (
        <button id='toggle-button' style={{
            backgroundColor: theme.color, color: theme.backgroundColor
        }} onClick={() => toggleTheme()}>Theme</button>
    )
}

export default Toggle