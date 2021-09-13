import Image from 'next/image'

export const ProjectImg = ({img, alt})=>{
    return <div className="flex max-w-screen h-48 sm:h-64 justify-center align-top">
                <div className="flex max-w-xs w-full h-48  sm:w-80 sm:h-64 relative">
                    <Image className="rounded-xl" src={img} alt={alt} layout="fill" objectFit="contain"/>
                </div>
            </div>
}