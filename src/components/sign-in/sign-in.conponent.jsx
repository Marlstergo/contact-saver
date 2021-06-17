import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux'

import { googleSignInStart, emailSignInStart, checkUserSession, fetchContacts } from "../../redux/user/user.action";


import './sign-in.styles.scss'

const SignIn = ({emailSignInStart, googleSignInStart, checkUserSession, loadContacts}) =>{

    useEffect(() =>{
        async function run (){

            await checkUserSession()
            await loadContacts()
        
    }   
    run()

    })

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
            <h3>
                SIGN INTO YOUR ACCOUNT
            </h3>
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
            <p>i have no account? <a href="./signup"> sign up </a></p>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
    checkUserSession: () => dispatch(checkUserSession()),
    loadContacts: () => dispatch(fetchContacts())
})



export default connect(null, mapDispatchToProps)(SignIn);