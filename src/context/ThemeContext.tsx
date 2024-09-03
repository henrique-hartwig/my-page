import { createContext, useState } from 'react'

type ThemeContextProps = {
    theme: string,
    toggleTheme: Function
}
const initialValue: ThemeContextProps = {
    theme: 'light',
    toggleTheme: Function
}

export const ThemeContext = createContext<ThemeContextProps>(initialValue)

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    console.log('trocou de: ', theme)
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}