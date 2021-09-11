import Head from 'next/head'
import { Marquee } from '../components/marquee'
import About from '../components/sections/about'
import { Hero } from '../components/sections/hero'
import { Projects } from '../components/sections/projects'
import { featuredData, miscData } from '../utils/dataMockup'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Portfolio / Ignacio Casaburi</title>
        <meta name="description" content="Personal portfolio, Ignacio Casaburi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary max-h-screen max-w-screen overflow-x-hidden snap overflow-y-scroll">  
        <Hero/>

        <Marquee text={"PROYECTOS"}/>
        <Projects featured={props.featured} misc={props.misc} />

        <Marquee text={"ABOUT"}/>
        <About />

      </main>
  </>
  )
}

export async function getStaticProps(context) {
  const featured = featuredData
  const misc = miscData
  return {
    props: {featured, misc},  
  }
}
