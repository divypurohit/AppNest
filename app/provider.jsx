"ues client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from '@/components/custom/Header';
function Provider({children}) {
  return (
    <div>
        <NextThemesProvider
         attribute="class"
         defaultTheme="dark"
         enableSystem
         disableTransitionOnChange
         >
            <Header/>
      {children}
        </NextThemesProvider>
    </div>
  )
}

export default Provider
