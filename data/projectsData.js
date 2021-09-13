export const featuredData =[
    {
    id:"001",
    tag:"featured",
    name:"Brút Beer Store" ,
    desc:{en:"This project is a beer e-commerce made with NextJS and ChakraUI. It also uses Supabase as Database service, NextJS API Routes for handling requests and SWR for client-side fetching and caching. Both Home page and Shop page use ISG so they can be revalidated and have fresh data, but also still serve cached static data during a prudential amount of time.",
          es:"Este proyecto es un e-commerce de cervezas hecho con NextJS y ChakraUI para los estilos. Utiliza Supabase como servicio de base de datos, API routes de NextJS para manejar las request y SWR para hacer los fetch y el cacheo desde el cliente. Las paginas utilizan ISG para poder revalidar cada cierto tiempo la información y tener siempre una versión estática cacheada"},
    img:"/assets/img/brut.png",
    tech:["NextJS", "React", "ChakraUI", "Supabase", "FramerMotion", "SWR"],
    links:{github:"https://github.com/sabarusi/brut-beerstore",
           deploy: "https://brut-beerstore.vercel.app"}
    },
    {
        id:"002",
        tag:"featured",
        name:"LetraCeluloide" ,
        desc:{en:"Letraceluloide is a Film&Literature magazine from Mar del Plata. This web was created using Next.JS as SSG. Plain CSS was used for styling. Data is obtained from .json files in the build and Sender is used as Newsletter provider. It was my first big project so refactoring is scheduled soon.",
             es:"Letraceluloide es una revista de cine y literatura de Mar del Plata. Se utilizo NextJS como SSG y CSS para los estilos. La información de los números es obtenida desde archivos .json en el build y también utiliza Sender como proveedor de Newsletter. Fue el primer sitio grande que realice por lo cual está en agenda una refactorización del codigo y los estilos."},
        img:"/assets/img/letraceluloide.png",
        tech:["NextJS", "CSS", "SSG"],
        links:{github:"https://github.com/sabarusi/letraceluloide-magazine-web",
               deploy: "https://www.letraceluloide.com.ar"}
        },
    {
        id:"meta",
        tag:"self",
        name:"Personal Portfolio",
        desc:{en:"This personal portfolio was created with NextJS and Tailwind CSS for styling. Effects are provided by Framer Motion. It's generated statically and the data comes from a .js module at build. It also features i18n international routing. You should check it some time.",
              es:"Este portfolio personal fue creado con NextJS y Tailwind CSS para los estilos. Los efectos son realizados con la libreria Framer Motion. Se genera estaticamente el contenido desde un modulo .js en el build. También utiliza la libreria de routing internacional i18n para gestionar el idioma."},
        img:"/assets/img/portfolio.png",
        tech:["NextJS", "Tailwind CSS", "FramerMotion", "SSG", "i18n"],
        links:{github:"github.com/sabarusi/",
               deploy:"/"}//provisory github link
    }
]
export const miscData=[
    {
        id:"Poke",
        tag:"other",
        name:"Who's that Pokémon",
        desc:{en:"Who's that Pokémon game made with React and CSS. There's five rounds with two guesses each, in the end you get points. It features only first three generation Pokémon, using PokeAPI with fetch function. Educational purposes only, copyright goes to it's rightful holders.",
              es:"Juego de adivinar Pokémon hecho con React y CSS. Tenes cinco turnos con dos oportunidades cada uno para acertar, al final te da un puntaje. Se trae la data de PokeAPI y solamente incluye las primeras tres gen. Hecho por motivos educativos, el copyright va a sus respectivos dueños "},
        img:"/assets/img/poke.png",
        tech:["React", "CSS", "Fetch"],
        links:{github:"https://github.com/sabarusi/quienpoke",
               deploy:"https://quienpokemon.netlify.app/"}
    },
    {
        id:"Todo list",
        tag:"other",
        name:"To-do list",
        desc:{en:"Simple CRUD to-do list app. Uses React, Chakra UI for styling and Framer Motion for list effects. List is preserved in LocalStorage.",
             es:"Aplicación de lista To-do. Un CRUD sencillo que utiliza React, Chakra UI para los estilos y Framer Motion para los efectos de la lista. El contenido de la lista se preserva en LocalStorage"},
        img:"/assets/img/todo.png",
        tech:["React", "ChakraUI", "FramerMotion", "LocalStorage"],
        links:{github:"https://github.com/sabarusi/react-chakra-todo-list",
               deploy:"https://todo-sabarusi.netlify.app/"}
    },
    
]