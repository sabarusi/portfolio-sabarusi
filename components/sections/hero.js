import React from 'react'
import AnimateWhenVisible from '../animateWhenVisible'
import Image from 'next/image'
//className="h-48 w-48 shadow-white rounded-full"
export const Hero = () => {
    return (<section className="hero snap-start flex flex-col text-center sm:text-left bg-primary min-h-screen h-screen py-2">
                <div className="h-full flex flex-col-reverse sm:flex-row justify-center">
                        <AnimateWhenVisible variants={{visible: { opacity: 1, x: 0 },
                                                        hidden: { opacity: 0, x: -100 }
                                                        }}
                                            transition= {{ type: "spring", stiffness: 200 }}>
                        <div className="flex sm:flex-1 flex-col justify-center align-middle space-y-4 px-10">
                                <h1 className="text-hero sm:text-6xl md:text-7xl lg:text-8xl font-sans text-white" >
                                    {"{ name: 'Ignacio' }"}
                                </h1>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl  font-sans text-stroke text-transparent stroke-color-indigo  ">
                                Frontend Developer
                            </h1>
                        </div>
                        </AnimateWhenVisible>
                        <div className="flex sm:w-80 sm:h-max items-center justify-center">
                        <div className="drop-shadow-white">
                            <AnimateWhenVisible variants={{visible: { opacity: 1, scale:1 },
                                                hidden: { opacity: 0,  scale:0.5 }
                                                }}
                                    transition= {{duration:0.6}}>
                                <Image
                                    src="/assets/img/coding-svg.png"
                                    alt="Picture of Ignacio Casaburi"
                                    width={"200"}
                                    height={"200"}
                                    priority={true}
                                />
                            </AnimateWhenVisible>
                        </div>
                        </div>
                </div>
                <p className="text-white text-2xl text-center pt-5 animate-bounce">
                    &darr;
                </p>
                <p className="text-white text-sm text-center pb-16 sm:pb-2">down the rabbit hole</p>
            </section>
    )
}
