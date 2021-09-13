import Head from 'next/head'
import dynamic from "next/dynamic"
const Projects = dynamic(() => import("../components/sections/projects/projects"))
const Marquee  = dynamic(() => import("../components/marquee"))
const About = dynamic(()=> import("../components/sections/about"))
import { Hero } from '../components/sections/hero'
import { featuredData, miscData } from '../data/projectsData'
import Navbar from '../components/layout/navbar'
import { descriptionAbout } from '../data/aboutData'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Portfolio / Ignacio Casaburi</title>
        <meta name="description" content="Personal portfolio as a Frontend Developer of Ignacio Casaburi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar locale={props.locale}/>

      <main className="bg-primary max-h-screen max-w-screen overflow-x-hidden snap overflow-y-scroll">  
        <Hero/>
        <Marquee text={props.locale === "es" ? "PROYECTOS" : "PROJECTS"}/>
        <Projects featured={props.featured} locale={props.locale} misc={props.misc} />

        <Marquee text={"ABOUT"}/>
        <About desc={props.desc} />

      </main>
  </>
  )
}

export async function getStaticProps({locale}) {
  const itemLocale = (e) => {return {...e, desc:e.desc[locale]}}
  const featured = featuredData.map(e=>itemLocale(e))
  const misc = miscData.map(e=>itemLocale(e))
  const desc = descriptionAbout[locale]
  return {
    props: {featured, misc, desc, locale},  
  }
}
