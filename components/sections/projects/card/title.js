export const Title = ({title, small}) =>{
    const styling = !small ? "text-stroke text-transparent stroke-color-indigo text-4xl sm:text-7xl font-raleway"
                           : "text-stroke text-center text-transparent stroke-color-indigo text-2xl sm:text-3xl font-raleway"
    return <h1 className={styling}>
                {title}
            </h1>
}