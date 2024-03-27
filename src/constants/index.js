
import {
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    holiday,
    grave,
    react,
    Travel,
    food,
    tailwindcss,
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SahanDev00',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sahandev',
    }
];

export const projects = [
    
    {
        iconUrl: grave,
        theme: 'btn-back-red',
        name: 'Grave',
        description: 'Fully Responsive Static Website for E-Commerce.',
        link: 'https://gravestore.netlify.app/',
    },
    {
        iconUrl: food,
        theme: 'btn-back-yellow',
        name: "PoP's",
        description: 'A website for a restaurant made with React.js + Tailwind.css',
        link: 'https://popsfoods.netlify.app',
    },
    {
        iconUrl: Travel,
        theme: 'btn-back-blue',
        name: 'Travel Guide App',
        description: 'Designed and built a fully responsive Travel Guide front-end application.',
        link: 'https://travellerwebapp.netlify.app',
    },
    {
        iconUrl: holiday,
        theme: 'btn-back-black',
        name: 'Holiday',
        description: 'Developed a front-end web application for Trip Booking. ',
        link: 'https://holidaybooking1.netlify.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Data Finance',
        description: 'A Front End prototype for a data analysis website.',
        link: 'https://data-finance-frontend.netlify.app',
    }
];