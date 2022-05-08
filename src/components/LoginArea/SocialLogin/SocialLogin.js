import React from 'react';
import './SocialLogin.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user1, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [user] = useAuthState(auth)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/' ;


    if(user1 || user2) {
        navigate(from, {replace: true})
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