import React from 'react';
import './SocialLogin.css'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const SocialLogin = () => {
    return (
        <div className='social'>
        
        <Link  className='size me-2' to='/'>
        <FcGoogle/>
        </Link>

        <Link  className='size text-dark ms-2' to='/'>
        <AiFillGithub/>
        </Link>
    </div>
    );
};

export default SocialLogin;