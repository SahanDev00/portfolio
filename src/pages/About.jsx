import React from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import { skills, socialLinks } from '../constants'

const About = () => {
    return (
        <section className='max-container dark:bg-[#03001C]'>
            <h1 className='head-text dark:text-white'>
                Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Sahan</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500 '>
                <p>I'm a front-end developer and a software engineering student from Sri Lanka, passionate about creating engaging web experiences. I'm dedicated to mastering the latest technologies and design trends to bring innovative ideas to life. </p>
            </div>
            <div className='py-10 flex flex-col dark:text-white'>
                <h3 className='subhead-text'>My Skills</h3>
                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20'>
                            <div className='btn-back rounded-xl'/>
                            <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
                                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                                <h1 className='text-xs text-purple-900 dark:text-white pt-2'>{skill.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16 '>
                <h3 className='subhead-text dark:text-white'> Education </h3>
                <div className='mt-5 flex flex-col gap-3 '>
                    <ul className='list-disc dark:text-slate-500'>
                        <li> Undergraduate in Software Engineering from Pearson UK.</li>
                        <li> Diploma in Information Technology from Pearson UK. (2023) </li>
                        <li> Diploma in English from Esoft Metro Campus. (2023) </li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-[40px] mb-5'>
                <div className='w-[150px] justify-center h-full flex items-center gap-3 dark:bg-gray-500'>
                        {socialLinks.map((social) => (
                            <div>
                                <Link to={social.link} >
                                    <img src={social.iconUrl} alt={social.name} className='w-8 h-8 ' />
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
            <hr className='border-slate-200' />
            <CTA />
        </section>
    )
}

export default About
