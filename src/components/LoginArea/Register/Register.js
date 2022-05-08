import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Fade from 'react-reveal/Fade';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import Loading from '../../Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [user1] = useAuthState(auth)
      const location = useLocation()

      const [confirmPassword, setConfirmPassword] = useState('')
      const from = location.state?.from?.pathname || '/' ;

      const navigate = useNavigate()
      const [error1, setError1] = useState()
     

      if(loading || updating) {
          return <Loading/>
      }

      if(user1) {
        navigate('/')
      }

      const handelConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }


      const handelSubmit = async (e) => {
          e.preventDefault()

          const name = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(name, email, password);
          
          if(password < 6) {
            setError1('minimum 6 charecter')
          }

          if(password !== confirmPassword){
              setError1("Password did't match")
          }

        const url = `http://localhost:5000/login`

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: user1?.email
            }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("accessToken", data.token)
                
            })
          await createUserWithEmailAndPassword(email, password)
          await updateProfile({ displayName: name })

      }

    return (
        <div className='mt-5 container'>
            <div className='row d-flex align-items-center'>

            <Fade left>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className='w-100' src="https://i.ibb.co/mvDPYjH/2007-i039-019-cyber-security-spyware-data-protection-isometric-set-06.jpg" alt="" />
            </div>
            </Fade>

            <Fade right>
            <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
            <form onSubmit={handelSubmit} className='w-75 h-auto mx-auto shadow p-5'>
                <h1 className='text-center mb-5'>Register</h1>
            <div className="mb-3">
                <input name='name' type="text" className="input form-control mb-4" placeholder='Name' required/>
            </div>
            <div className="mb-3">
                <input name='email' type="email" className="input form-control mb-4" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input name='password' type="password" className="input form-control mb-4" placeholder='Password' id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <input onBlur={handelConfirmPasswordBlur} name='confirmPassword' type="password" className="input form-control mb-4" placeholder='Confirm Password' id="exampleInputPassword1"/>
            </div>
            

            <p className='text-danger text-center'>{error1}</p>

            <button type="submit" className="w-100 btn btn-success py-2">Register</button>
            <p className='text-center mt-2'>Already have an account? <Link to='/login' className='text-primary text-decoration-none'>Login</Link> </p>
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

export default Register;