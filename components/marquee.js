import React from 'react'


export default function Marquee({text}){
   return <section id={"marquee-"+text} className="marquee min-h-screen snap-start z-0 flex flex-col space-y-0 bg-primary font-raleway align-middle py-52">
            <MarqueeLine text={text}/>
            <MarqueeLine text={text} stroke={true} strokeColor={"indigo"}/>
            <MarqueeLine text={text}/>
         </section>
}

const MarqueeLine = ({text, stroke, strokeColor="white"}) => {
    
    const marqueeStyle = stroke 
                        ? "w-full h-20 relative flex overflow-hidden text-5xl sm:text-6xl text-transparent text-stroke"
                                                                  + " stroke-color-" + strokeColor
                        : "w-full h-20 relative flex overflow-hidden text-5xl sm:text-6xl " + "text-white"
    return (
        <div className={marqueeStyle}>
            <div className="py-2 whitespace-nowrap animate-marqueeLeft">
                <span className="mx-2">
                    {`${text} - `.toUpperCase().repeat(7)}
                </span>
            </div>
            <div className="absolute top 0 py-2 whitespace-nowrap animate-marqueeRight">
                <span className="mx-2">
                    {`${text} - `.toUpperCase().repeat(7)}
                </span>
            </div>
        </div>

    )
}