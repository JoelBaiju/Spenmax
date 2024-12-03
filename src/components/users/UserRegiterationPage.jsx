import React from 'react'
import CreateUser from './CreateUser'
import AnimatedText from '../ResuableComponents/AnimatedText'
import backgroundImage from '/kriyado_profile_bg[1].png';

const UserRegiterationPage = () => { 
    return (
        <div 
            className="bg-cover bg-center w-full h-screen overflow-y-scroll custom-nonescroll md:flex justify-center items-center  px-5 py-10 md:p-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='w-full md:h-full md:w-4/12 lg:w-6/12'>

                <div className='w-full h-full flex justify-center md:justify-end items-start md:items-center'>
                        <img src="/Kriyado Black Logo.png" alt="logo" className='w-[250px] block' />
                </div>
            </div>
            <div className='w-full md:w-8/12 md:px-8 md:py-8 mb-[50px] lg:w-6/12 flex justify-center items-center'>
                <CreateUser />
            </div>
        </div>
    )
}

export default UserRegiterationPage
