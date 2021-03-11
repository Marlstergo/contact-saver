import React, {useState} from 'react';

import {connect} from 'react-redux'

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action";


import './sign-in.styles.scss'

const SignIn = ({emailSignInStart, googleSignInStart}) =>{
    const [userDetails, setDetails] = useState({
        
        email: '',
        password: ''
    })

    const {email, password} = userDetails
    // console.log(name.length)
    const handleChange=(e)=>{
        const {value, name}= e.target;
        setDetails({...userDetails, [name] : value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault(); 
        emailSignInStart(email, password)
    }
    return(
        <div className='sign-in-container'>
            <form onSubmit={handleSubmit} className='sign-form'>
                <div className="div">
                    <input onChange={handleChange} className='input' type="email" name="email" id="email"/>
                    
                        <label className={`${ email.length ? 'shrink' : ''} label`} htmlFor="email">Email</label>
                        
                </div>
                
                <div className="div">
                    <input onChange={handleChange}  className='input' type="password" name="password" id="password"/>
                    <label className={`${ password.length ? 'shrink' : ''} label`} htmlFor="password">Password</label>
                </div>
                
                
                <br/>
                <button >Sign in</button>
                <button type='button' onClick={googleSignInStart}>sign in with google</button>
                <div>
                {/* {(document.querySelector('input[name="contact-type"]:checked').value)} */}

                </div>
            {/* {console.log(document.querySelector('input[name="contact-type"]').value)} */}


            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password}))
})



export default connect(null, mapDispatchToProps)(SignIn);