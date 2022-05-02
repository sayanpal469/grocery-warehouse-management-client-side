import React from 'react';
import './SocialLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if(user) {
        navigate('/')
    }
    return (
        <div className='social'>
        
        <Link onClick={() => signInWithGoogle()} className='size me-2' to='#'>
        <FcGoogle/>
        </Link>

        <Link  className='size text-dark ms-2' to='#'>
        <AiFillGithub/>
        </Link>
    </div>
    );
};

export default SocialLogin;