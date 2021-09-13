export const Tag = ({text, small}) =>{
    const styling = !small ? "flex text-lg sm:text-xl w-full justify-center space-x-0.5"
                           : "flex text-sm w-full justify-center space-x-0.5"
   return  <div className={styling}>
               <p className="text-indigo-600 ">{"./ "}</p>
               <p className="text-white">{text}</p>
           </div>
}