import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="" className='w-4 h-4 pbject-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue dark:text-white dark:bg-purple-950 py-4 px-8 text-white mx-5'> Hi, I am <span className='font-semibold'>Sahan</span>👋
        <br /> A Front-End Developer from Sri Lanka</h1>
    ),
    2: (
        <InfoBox text="A dedicated front-end developer with a strong desire to build new skills in HTML, CSS, and JavaScript to create and style innovative websites."
        link='/about'
        btnText='Learn more'
        />
        
    ),
    3: (
        <InfoBox text="Take a journey through my projects and explore the extraordinary ideas that I bring to life."
        link='/projects'
        btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox text="Let's Connect and Create Something Amazing Together!"
        link='/contact'
        btnText="Let's talk"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo
