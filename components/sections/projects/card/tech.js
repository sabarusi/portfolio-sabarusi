export const TechStack = ({tech, small}) =>{
    const textStyle = !small ? "text-indigo-600 sm:text-lg pt-2 sm:py-0"
                             : "text-indigo-600 text-center text-xs sm:text-sm sm:pt-2"
    return  <>
                <p className={textStyle}>Stack</p>
                <div className="flex text-white items-center justify-center sm:pb-2 space-x-1 sm:space-x-2 flex-wrap">
                    {tech.map(e=> <p className="text-xs lg:text-sm font-normal lg:font-bold font-raleway py-1" key={e}>#{e}</p>)}
                </div>
             </>
}