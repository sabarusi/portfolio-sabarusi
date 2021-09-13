import AnimateWhenVisible from "../../../animateWhenVisible"

export const Description = ({desc, small}) =>{
    const textStyle = !small ? "text-white text-sm sm:text-xl text-justify p-5 sm:p-6 sm:pb-0"
                           : "text-white text-xs lg:text-sm text-justify p-5 sm:p-6 sm:py-0"
    const containerStyle = !small ? "items-center sm:py-2"
                                  : "h-26 sm:h-32 sm:py-2"

    return <AnimateWhenVisible variants={{visible: { opacity: 1, scale:1 },
                                                    hidden: { opacity: 0,  scale:0.5 }
                                                    }}
                                        transition= {{duration:0.3}}>
                                <div className={containerStyle}>
                                                <p className={textStyle}>{desc}</p>
                                </div>
            </AnimateWhenVisible>
}