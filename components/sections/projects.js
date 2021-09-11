import React from 'react'
import Image from 'next/image'
import { FaAt, FaGithub } from 'react-icons/fa'
import AnimateWhenVisible from '../animateWhenVisible'

export const Projects = ({featured, misc}) => {
    return <section id="projects" className="projects">
                <div className="flex flex-col min-h-screen bg-primary relative">
                {featured.map((e) => 
                        <MainItem key={e.id}
                                     {...e}
                                    />
                        )}
                </div>
                <div className="flex flex-col snap-start min-h-screen w-screen bg-primary justify-center items-center">
                    <h1 className="text-left pt-10 w-screen text-stroke text-transparent stroke-color-white text-3xl sm:text-5xl">
                        ./misc
                    </h1>
                    <div className="flex flex-col w-11/12 space-y-6 py-4 md:py-2 md:space-y-0 flex-1 md:justify-center items-center sm:flex-row">
                    {
                     misc.map( e=> <MiscItem key={e.id} {...e}/>)
                    }
                    </div>
                </div>
            </section>
}


const MainItem = ({name, desc, tech, links,img, id ,tag}) => {
    return <article className="project snap-start flex flex-col text-center max-w-screen min-h-screen py-2 sm:py-10">
               <div className="sm:mb-7 pt-10 sm:py-0 px-4 text-left">
                <h1 className="text-stroke text-transparent stroke-color-white text-3xl sm:text-5xl">
                  ./{id}
                </h1>
               </div>
               <div className="flex flex-col py-2 flex-1 sm:items-center justify-between sm:justify-center">
                <AnimateWhenVisible variants= {{visible: { opacity: 1, scale: 1 },
                                                hidden: { opacity: 0, scale: 0.7 }
                                                }}
                                    transition= {{ duration: 0.3 }}>
                <div className="card shadow-purple w-19/20 sm:w-full max-w-4xl p-3 py-5 sm:py-0 rounded-lg">
                        <div className="links flex w-full justify-end space-x-3 py-2 text-white text-xs">
                            <a href={links.github}>
                                <div className="flex flex-col items-center hover:text-indigo-600 hover:scale-110">
                                    <FaGithub/>#Code
                                </div>
                            </a>
                            <a href={links.deploy}>
                                <div className="flex flex-col items-center hover:text-indigo-600 hover:scale-110">
                                    <FaAt/> # Site
                                </div>
                            </a>
                        </div>
                        <h1 className="text-stroke text-transparent stroke-color-indigo text-4xl sm:text-7xl font-raleway">
                            {name}
                        </h1>
                        <div className="flex text-lg sm:text-xl w-full justify-center space-x-0.5">
                                    <p className="text-indigo-600 ">{"./ "}</p>
                                    <p className="text-white">{tag}</p>
                                </div>
                        <div className="flex flex-col md:flex-row sm:pb-2">
                        <AnimateWhenVisible variants={{visible: { opacity: 1, scale:1 },
                                                hidden: { opacity: 0,  scale:0.5 }
                                                }}
                                    transition= {{duration:0.3}}>
                            <div className="descripcion items-center sm:py-2">
                                            <p className="text-white text-sm sm:text-xl text-justify p-5 sm:p-6 sm:pb-0">{desc}</p>
                            </div>
                        </AnimateWhenVisible>
                            <div className="flex max-w-screen h-48 sm:h-64 justify-center align-top">
                                <div className="flex max-w-xs w-full h-48  sm:w-80 sm:h-64 relative">
                                    <Image className="rounded-xl" src={img} alt={name} layout="fill" objectFit="contain"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-indigo-600 sm:text-lg pt-2 sm:py-0">Stack</p>
                        <div className="flex space-x-1 items-center pb-2 sm:space-x-2 justify-center text-white">
                            {tech.map(e=> <p className="text-xs sm:text-sm sm:font-normal font-bold font-raleway py-1" key={e}>#{e}</p>)}
                        </div>
                    </div>
                    </AnimateWhenVisible>
                </div>
            </article>
}

const MiscItem = ({name, desc, tech, links,tag})=>{
    return <article className="misc-project max-h-80 sm:h-80 max-w-md flex">
                <div className="card shadow-purple h-full w-full p-2 rounded-lg">
                        <div className="links flex w-full justify-end space-x-3 py-2 text-white text-xs">
                            <a href={links.github}>
                                <div className="flex flex-col items-center hover:text-indigo-600 hover:scale-110">
                                    <FaGithub/>#Code
                                </div>
                            </a>
                            <a href={links.deploy}>
                                <div className="flex flex-col items-center hover:text-indigo-600 hover:scale-110">
                                    <FaAt/> # Site
                                </div>
                            </a>
                        </div>
                        <h1 className="text-stroke text-center text-transparent stroke-color-indigo text-xl sm:text-2xl font-raleway">
                            {name}
                        </h1>
                        <div className="flex text-sm w-full justify-center space-x-0.5">
                                    <p className="text-indigo-600 ">{"./ "}</p>
                                    <p className="text-white">{tag}</p>
                        </div>
                        <div className="flex flex-col md:flex-row sm:pb-2">
                            <AnimateWhenVisible variants={{visible: { opacity: 1, scale:1 },
                                                    hidden: { opacity: 0,  scale:0.5 }
                                                    }}
                                        transition= {{duration:0.3}}>
                                <div className="descripcion h-26 sm:h-32 sm:py-2">
                                                <p className="text-white text-xs sm:text-sm text-justify p-5 sm:p-6 sm:pb-0">{desc}</p>
                                </div>
                            </AnimateWhenVisible>
                        </div>
                        <p className="text-indigo-600 text-center text-sm sm:pt-2">Stack</p>
                        <div className="flex space-x-1 items-center sm:space-x-2 justify-center text-white">
                            {tech.map(e=> <p className="text-xs sm:font-normal font-bold font-raleway py-1" key={e}>#{e}</p>)}
                        </div>
                    </div>
            </article>
}