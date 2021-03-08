import React, {useState} from 'react';
import { signUpWithEmailStart } from '../../redux/user/user.action';
import {connect} from 'react-redux'



import './sign-up.styles.scss'

const SignUp = ({signUp}) =>{
    const [userDetails, setDetails] = useState({
        name:'',
        email: '',
        password: '',
        confirmPassword:''
    })

    const handleSubmit= async (e)=>{
        e.preventDefault();

        if (password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try {
            // const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            // await createUserProfileDocument(user, {displayName})
            
            // this.setState({displayName:'', email: '', password: '', confirmPassword: ''});
            signUp(email, password, name)
            
        } catch(error){
            console.error(error);
        }

        
    }

    const {name, email, password, confirmPassword} = userDetails
    // console.log(name.length)
    const handleChange=(e)=>{
        const {value, name}= e.target;
        setDetails({...userDetails, [name] : value})
    }
    return(
        <div className='sign-in-container'>
            <form className='sign-form' onSubmit={handleSubmit}>

                <div className="div">
                    <input onChange={handleChange}  className='input' type="text" name="name" id="name"/>
                    <label className={`${ name.length ? 'shrink' : ''} label`} htmlFor="name">Name</label>
                </div>
                
                <div className="div">
                    <input onChange={handleChange} className='input' type="email" name="email" id="email"/>
                    
                        <label className={`${ email.length ? 'shrink' : ''} label`} htmlFor="email">Email</label>
                        
                </div>
                
                <div className="div">
                    <input onChange={handleChange}  className='input' type="password" name="password" id="password"/>
                    <label className={`${ password.length ? 'shrink' : ''} label`} htmlFor="password">password</label>
                </div>
                <div className="div">
                    <input onChange={handleChange}  className='input' type="password" name="confirmPassword" id="confirm-password"/>
                    <label className={`${ password.length ? 'shrink' : ''} label`} htmlFor="confirm-password">password</label>
                </div>
                
                <br/>
                <button>Sign up</button>
                <div>

                </div>


            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    signUp: (email, password, displayName) => dispatch(signUpWithEmailStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp)