import { FaAt, FaGithub } from 'react-icons/fa'

export const Links =({links, small}) =>{
    const styling = !small ? "flex w-full justify-end space-x-3 py-2 text-white text-sm"
                           : "links flex w-full justify-end space-x-3 py-2 text-white text-xs"

    return <div className={styling}>
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
}