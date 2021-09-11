import React from 'react'
import { Navbar } from './navbar'

export const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
             {children}
        </>
    )
}
