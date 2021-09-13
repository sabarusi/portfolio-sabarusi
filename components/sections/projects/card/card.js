import AnimateWhenVisible from '../../../animateWhenVisible'
import {Links} from "./links"
import {Title} from "./title"
import {Tag} from "./tag"
import {Description} from "./description"
import {ProjectImg} from "./projectImg"
import {TechStack} from "./tech"

export const Card =({name, desc, tech, links,img, tag, isSmall}) => {
    const cardStyle = !isSmall ? "card shadow-purple w-19/20 lg:w-full max-w-4xl p-3 py-5 sm:py-0 rounded-lg"
                               : "card shadow-purple h-full max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-lg"
    return <AnimateWhenVisible style={cardStyle}
                                variants= {{visible: { opacity: 1, scale: 1 },
                                                    hidden: { opacity: 0, scale: 0.7 }
                                                    }}
                                transition= {{ duration: 0.3 }}>
                            <Links links={links} small={isSmall}/>    
                            <Title title={name} small={isSmall}/>
                            <Tag text={tag} small={isSmall}/>
                            <div className="flex flex-col md:flex-row sm:pb-2">
                                    <Description desc={desc} small={isSmall}/>
                                    {!isSmall? <ProjectImg img={img} alt={name}/> :null}
                            </div>
                            <TechStack tech={tech} small={isSmall}/>
            </AnimateWhenVisible>
}