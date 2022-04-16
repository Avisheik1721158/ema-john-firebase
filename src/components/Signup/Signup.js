import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();




    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirm(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirm) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);


    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>  Sign Up </h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password"> Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />

                </form>
                <p className='paragraph'>
                    Already have an account <Link className='form-link' to='/login'> Log in  </Link>
                </p>
                <div className="wrapper">
                    <div className="or-selector">
                        <div className="vertical-line"></div>
                        <div>Or</div>
                        <div className="vertical-line"> </div>


                    </div>
                </div>


            </div>

        </div>
    );
};

export default Signup;