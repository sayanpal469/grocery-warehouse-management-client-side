import React from 'react';
import './SocialLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    if(user || user2) {
        navigate('/')
    }
    return (
        <div>
            <div className='social'>
        
        <Link onClick={() => signInWithGoogle()} className='size me-2' to='#'>
        <FcGoogle/>
        </Link>

        <Link onClick={() => signInWithGithub()}  className='size text-dark ms-2' to='#'>
        <AiFillGithub/>
        </Link>
    </div>
        {
            error2? <p>{error2.message}</p> : ''
        }
        </div>
    );
};

export default SocialLogin;