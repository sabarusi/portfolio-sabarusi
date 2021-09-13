import React from 'react'
import AnimateWhenVisible from '../animateWhenVisible'
import Image from 'next/image'
import heroImg from "../../public/assets/img/coding-img.png"

export const Hero = () => {
    return (<section id="home" className="hero snap-start flex flex-col text-center sm:text-left bg-primary min-h-screen h-screen py-2">
                <div className="h-full flex flex-col-reverse md:flex-row justify-center items-center">
                    <AnimatedText/>
                    <AnimatedImg />
                </div>
                <p className="text-white text-2xl text-center pt-5 animate-bounce">
                    &darr;
                </p>
                <p className="text-white text-sm text-center pb-16 sm:pb-2">
                    down the rabbit hole
                </p>
            </section>
    )
}

const AnimatedText = () =>{
    return <AnimateWhenVisible style="flex md:flex-1 flex-col justify-center align-middle space-y-4 px-10"
                                variants={{visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -100 }
                                        }}
                                transition= {{ type: "spring", stiffness: 200 }}>
                    <h1 className="text-hero sm:text-6xl md:text-7xl lg:text-8xl font-sans text-white" >
                        {"{ name: 'Ignacio' }"}
                    </h1>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl  font-sans text-stroke text-transparent stroke-color-indigo  ">
                        Frontend Developer
                    </h1>
            </AnimateWhenVisible>
}
const AnimatedImg =()=>{
return <AnimateWhenVisible style="flex sm:w-80 sm:h-max items-center justify-center drop-shadow-white" 
                           variants={{visible: { opacity: 1, scale:1 },
                                      hidden: { opacity: 0,  scale:0.5 }
                                     }}
                            transition= {{duration:0.5}}>
                <Image
                    src={heroImg}
                    alt="Coding screen"
                    priority={true}
                    height={256}
                    width={256}
                />
        </AnimateWhenVisible>
}