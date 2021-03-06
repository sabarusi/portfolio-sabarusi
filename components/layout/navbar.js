import React from 'react'
import Link from 'next/link'
import { Flag } from './flag'

export default function Navbar({locale}){
    return (
        <nav className="bg-transparent z-50 w-screen h-max flex justify-end sm:px-5 fixed">
            <div className="flex h-full space-x-1.5 p-2">
                <NavItem to="/#home">Home</NavItem>
                <NavItem to="/#projects">{locale === "es"?"Proyectos": "Projects"}</NavItem>
                <NavItem to="/#about">About</NavItem>
                <Flag country={locale}/>
            </div>
        </nav>
    )
}

const NavItem = ({to, children})=>{
    return <Link href={to} replace>
            <a>
            <div className="flex hover:scale-105 cursor-pointer text-lg md:text-xl">
                <p className="text-indigo-600">{">"}</p>
                <p className="text-white">{children}</p>
            </div>
            </a>
          </Link>
}
