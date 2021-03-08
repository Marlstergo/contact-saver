import React, {useState} from 'react';


import './sign-in.styles.scss'

const SignIn = () =>{
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
    return(
        <div className='sign-in-container'>
            <form className='sign-form'>
                <div className="div">
                    <input onChange={handleChange} className='input' type="email" name="email" id="email"/>
                    
                        <label className={`${ email.length ? 'shrink' : ''} label`} htmlFor="email">Email</label>
                        
                </div>
                
                <div className="div">
                    <input onChange={handleChange}  className='input' type="password" name="password" id="password"/>
                    <label className={`${ password.length ? 'shrink' : ''} label`} htmlFor="password">Password</label>
                </div>
                
                
                <br/>
                <button>Sign in</button>
                <div>
                {/* {(document.querySelector('input[name="contact-type"]:checked').value)} */}

                </div>
            {/* {console.log(document.querySelector('input[name="contact-type"]').value)} */}


            </form>
        </div>
    )
}

export default SignIn;