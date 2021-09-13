import React from 'react'
import { Card } from './card/card'
import { Header } from './header'

export default function Projects({featured, misc, locale}){
    return <section id="projects" className="projects">
                <section id="featured" className="flex flex-col min-h-screen bg-primary relative">
                    {featured.map((e) => <Featured locale={locale} key={e.id}{...e}/>)}
                </section>
                <section id="misc" className="flex flex-col snap-start min-h-screen w-screen bg-primary justify-center items-center pt-10">
                    <Header id={"misc"}/>
                    <div className="flex flex-col w-11/12 space-y-6 py-4 md:py-2 md:space-y-0 flex-1 md:justify-center items-center md:flex-row">
                        {misc.map( e=> <Misc locale={locale} key={e.id} {...e}/>)}
                    </div>
                </section>
            </section>
}

const Featured = ({...props}) =>{
    return <article className="project snap-start flex flex-col text-center max-w-screen min-h-screen py-2 sm:py-10">
                <Header id={props.id}/>
                <div className="flex flex-col py-2 flex-1 sm:items-center justify-between sm:justify-center">
                    <Card {...props} />
                </div>
            </article>
}

const Misc = ({...props}) =>{
    return <article className="misc-project max-h-80 sm:h-80 max-w-md flex">
                <Card {...props} isSmall={true}/>
            </article>   
}