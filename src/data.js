export const images = {
    githubIcon: require('./assets/github-logo.png'),
    vercelIcon: require('./assets/vercel-logo.png'),
    linkedin: require('./assets/linkedin.jpg'),
    marketplace: require('./assets/marketplace.jpg'),
    dashboard: require('./assets/dashboard.jpg'),
    jwplayer: require('./assets/jwplayer.jpg'),
    zakiIcon: require('./assets/zaki-logo.svg').default,
    zakiImage: require('./assets/zaki.png')
}

export const menus = ['Home', 'About', 'Works', 'Contact'];

export const mainSection = {
    title: "Hi, I'm Zaki Samson",
    desc: "I build website's front-end",
    button1: "Contact Me",
    button2: "Download CV"
}

export const selfIntroduction = {
    title: "Frontend Web Developer",
    desc: "My name is Yusuf Zaki Samson. I'm a computer engineering graduate, with front-end development skills and have a year of experience in developing."
}

export const projects = [
    {
        id: "project-linkedin",
        title: "LinkedIn Clone",
        desc: "A LinkedIn website clone project. In this project user can register using email, login, and post on it's feed.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Redux", "Firebase"],
        vercel: "https://linkedin-clone-flaminggggo.vercel.app/",
        github: "https://github.com/zakisamson/linkedin-clone",
        image: images.linkedin
    },
    {
        id: "project-admin-dashboard",
        title: "Admin Dashboard",
        desc: "Admin Dashboard project for marketplace that can do CRUD.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Laravel"],
        vercel: "https://admin-nextjs-git-main-zakisamson.vercel.app/",
        github: "https://github.com/zakisamson/admin_nextjs",
        image: images.dashboard
    },
    {
        id: "project-jwplayer",
        title: "JWplayer Chrome",
        desc: "A duplicate of JW Player Website without any functionality applied.",
        techs: ["HTML", "CSS"],
        vercel: "https://duplicatingjwplayer.vercel.app/",
        github: "https://github.com/zakisamson/duplicatingjwplayer",
        image: images.jwplayer
    },
    {
        id: "project-marketplace",
        title: "Mini Marketplace",
        desc: "Fullstack Project with a few functionality such as register, login, and fetch items according to database.",
        techs: ["HTML", "CSS", "JavaScript", "React", "Redux", "FIrebase"],
        vercel: "https://marketplace-zakisamson.vercel.app/",
        github: "https://github.com/zakisamson/yusufzaki",
        image: images.marketplace
    }
]

export const contacts = [
    {
        contact: "E-mail",
        address: "zakisamson@gmail.com"
    },
    {
        contact: "GitHub",
        address: "https://github.com/zakisamson"
    },
    {
        contact: "LinkedIn",
        address: "https://www.linkedin.com/in/yusuf-zaki-samson/"
    }
]