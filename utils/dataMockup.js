export const featuredData =[
    {
    id:"001",
    tag:"featured",
    name:"Brút Beer Store" ,
    desc:"This project is a beer e-commerce made with NextJS and ChakraUI. It also uses Supabase as Database service, NextJS API Routes for handling requests and SWR for client-side fetching and caching. Both Home page and Shop page use ISG so they can be revalidated and have fresh data, but also still serve cached static data during a prudential amount of time.",
    img:"/assets/img/brut.png",
    tech:["NextJS", "React", "ChakraUI", "Supabase", "FramerMotion", "SWR"],
    links:{github:"https://github.com/sabarusi/brut-beerstore",
           deploy: "https://brut-beerstore.vercel.app"}
    },
    {
        id:"002",
        tag:"featured",
        name:"LetraCeluloide" ,
        desc:"Letraceluloide is a Film&Literature magazine from Mar del Plata. This web was created using Next.JS as SSG. Plain CSS was used for styling. Data is obtained from .json files in the build and Sender is used as Newsletter provider. It was my first big project so refactoring is scheduled soon.",
        img:"/assets/img/letraceluloide.png",
        tech:["NextJS", "CSS", "SSG"],
        links:{github:"https://github.com/sabarusi/letraceluloide-magazine-web",
               deploy: "https://www.letraceluloide.com.ar"}
        },
    {
        id:"meta",
        tag:"self",
        name:"Personal Portfolio",
        desc:"This personal portfolio was created with NextJS and Tailwind CSS for styling. Effects are provided by Framer Motion. It's generated statically and the data comes from .json files at build. You should check it some time.",
        img:"/assets/img/portfolio.png",
        tech:["NextJS", "Tailwind CSS", "FramerMotion", "SSG"],
        links:{github:"github.com/sabarusi/",
               deploy:"/"}//provisory github link
    }
]
export const miscData=[
    {
        id:"Poke",
        tag:"other",
        name:"Quién es ese Pokémon",
        desc:"Who's that Pokémon game made with React and CSS. There's five rounds with two guesses each, in the end you get points. It features only first three generation Pokémon, using PokeAPI with fetch function. Educational purposes only, copyright goes to it's rightful holders.",
        img:"/assets/img/poke.png",
        tech:["React", "CSS", "Fetch"],
        links:{github:"https://github.com/sabarusi/quienpoke",
               deploy:"https://quienpokemon.netlify.app/"}
    },
    {
        id:"Todo list",
        tag:"other",
        name:"To-do list",
        desc:"Simple CRUD to-do list app. Uses React, Chakra UI for styling and Framer Motion for list effects. List is preserved in LocalStorage.",
        img:"/assets/img/todo.png",
        tech:["React", "ChakraUI", "FramerMotion", "LocalStorage"],
        links:{github:"https://github.com/sabarusi/react-chakra-todo-list",
               deploy:"https://todo-sabarusi.netlify.app/"}
    },
    
]