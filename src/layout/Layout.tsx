import React, { FC } from 'react'
import { Header, Footer } from '../components/molecules'

interface LayoutProps {
   children: React.ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <Header />
         {children}

         <Footer />
      </>
   )
}
