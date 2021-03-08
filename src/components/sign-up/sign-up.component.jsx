import React, {useState} from 'react';


import './sign-in.styles.scss'

const SignUp = () =>{
    const [userDetails, setDetails] = useState({
        name:'',
        email: '',
        password: ''
    })

    const {name, email, password} = userDetails
    // console.log(name.length)
    const handleChange=(e)=>{
        const {value, name}= e.target;
        setDetails({...userDetails, [name] : value})
    }
    return(
        <div className='sign-in-container'>
            <form className='sign-form'>

                <div className="div">
                    <input onChange={handleChange}  className='input' type="text" name="name" id="name"/>
                    <label className={`${ name.length ? 'shrink' : ''} label`} htmlFor="name">name</label>
                </div>
                
                <div className="div">
                    <input onChange={handleChange} className='input' type="email" name="email" id="email"/>
                    
                        <label className={`${ email.length ? 'shrink' : ''} label`} htmlFor="email">Name</label>
                        
                </div>
                
                <div className="div">
                    <input onChange={handleChange}  className='input' type="password" name="password" id="password"/>
                    <label className={`${ password.length ? 'shrink' : ''} label`} htmlFor="password">password</label>
                </div>
                
                
                <br/>
                <button>Sign up</button>
                <div>
                {/* {(document.querySelector('input[name="contact-type"]:checked').value)} */}

                </div>
            {/* {console.log(document.querySelector('input[name="contact-type"]').value)} */}


            </form>
        </div>
    )
}

export default SignUp;