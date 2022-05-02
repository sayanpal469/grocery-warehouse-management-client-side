import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='mt-5 container'>
            <div className='row d-flex align-items-center'>

            <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className='w-100' src="https://i.ibb.co/mvDPYjH/2007-i039-019-cyber-security-spyware-data-protection-isometric-set-06.jpg" alt="" />
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
            <form className='w-75 h-auto mx-auto shadow p-5'>
                <h1 className='text-center mb-5'>Register</h1>
            <div class="mb-3">
                <input type="text" class="input form-control mb-4" placeholder='Name' required/>
            </div>
            <div class="mb-3">
                <input type="email" class="input form-control mb-4" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <input type="password" class="input form-control mb-4" placeholder='Password' id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <input type="password" class="input form-control mb-4" placeholder='Confirm Password' id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 text-left">
                <Link className='forgot' to=''>Forgot Password?</Link>
            </div>
            
            <button type="submit" class="w-100 btn btn-success">Submit</button>
            <p className='text-center mt-2'>Already have an account? <Link to='/login' className='text-primary text-decoration-none'>Login</Link> </p>
            <div className='or-area mt-3'>
                <div className='dag'></div>
                <p className='mt-2'>Or</p>
                <div className='dag'></div>
                </div>
                <SocialLogin/>
            </form>
            </div>
            
        </div>
        </div>
    );
};

export default Register;