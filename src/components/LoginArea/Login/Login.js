import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import Fade from 'react-reveal/Fade';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      const handelSubmit = (e) => {
          e.preventDefault()

          const email = e.target.email.value
          const password = e.target.password.value

          signInWithEmailAndPassword(email, password)
      }
    return (
        <div className='mt-5 container'>
            <div className='row d-flex align-items-center'>

            <Fade left>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className='w-100' src="https://i.ibb.co/CQZVDhN/3293465.jpg" alt="" />
            </div>
            </Fade>

           <Fade right>
           <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
            <form onSubmit={handelSubmit} className='w-75 h-auto mx-auto shadow p-5'>
                <h1 className='text-center mb-5'>Login</h1>
            <div className="mb-3">
                <input name='email' type="email" className="input form-control mb-4" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input name='password' type="password" className="input form-control mb-4" placeholder='Password' id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 text-left">
                <Link className='forgot' to=''>Forgot Password?</Link>
            </div>
            
            <p className='text-danger text-center'>{error?.message}</p>

            <button type="submit" className="w-100 btn btn-success">Submit</button>
            <p className='text-center mt-2'>Don't have any account? <Link to='/register' className='text-primary text-decoration-none'>Create New Account</Link> </p>
            <div className='or-area mt-3'>
                <div className='dag'></div>
                <p className='mt-2'>Or</p>
                <div className='dag'></div>
                </div>
                <SocialLogin/>
            </form>
            </div>
           </Fade>
            
        </div>
        </div>
    );
};

export default Login;