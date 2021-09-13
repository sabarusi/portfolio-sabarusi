import Link from 'next/link'
import Image from 'next/image'

export const Flag = ({country})=>{
    const flagIcon = country === "es" ? "en" : "es"
    return <Link href="/" locale={flagIcon}>
                <a>
                    <Image alt={`${flagIcon} lang`} 
                           src={"/assets/img/"+flagIcon+".png"}
                           width={32}
                           height={32} />
                </a>
            </Link>
}