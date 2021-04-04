import React ,{useState} from 'react'
import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect'
import { addContact, fetchContacts } from '../../redux/user/user.action';


import './add-contact-form.styles.scss'

const ContactForm = ({addContactz, loadContactz}) =>{
    const [contactDetails, setDetails] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        contactType: 'professional'
    })

    const {name, email, phoneNumber, contactType} = contactDetails
    // console.log(name.length)
    const handleChange=(e)=>{
        const {value, name}= e.target;
        setDetails({...contactDetails, [name] : value})
    }
    // const onSubmit=(e)=>{
    //     e.preventDefault()
    //     addContactz(name, phoneNumber, email, contactType)
    // }
    // document.querySelector('input[name="genderS"]:checked').value;
    
    return(
        <div>
            <h1>Add Contact</h1>
            <form  className='form'>
                <div className="div">
                    <input onChange={handleChange} className='input' type="text" name="name" id="name"/>
                    
                        <label className={`${ name.length ? 'shrink' : ''} label`} htmlFor="name">Name</label>
                        
                </div>
                
                <div className="div">
                    <input onChange={handleChange}  className='input' type="email" name="email" id="email"/>
                    <label className={`${ email.length ? 'shrink' : ''} label`} htmlFor="email">Email</label>
                </div>
                <div className='div'>
                    <input onChange={handleChange} className='input' type="number" name="phoneNumber" id="phone-number"/>
                    <label className={`${ phoneNumber.length ? 'shrink' : ''} label`} htmlFor="phone-number">Phone number</label>
                </div>
                

                <p><strong>Contact type</strong></p>
                <input type="radio" name="contact-type" id="personal" value='personal' defaultChecked />
                <label htmlFor="personal">Personal</label>
                <input type="radio" name="contact-type" id="professional" defaultChecked value='professional'/>
                <label htmlFor="professional">Professional</label>
                <br/>
                <button onClick={ async() =>
                {
                    await addContactz(name, email, phoneNumber, contactType)
                    await loadContactz()
                }
                    } type='button'>Add Contact</button>
                <div>

                </div>


            </form>
        </div>
    )
}

    
    const mapDispatchToProps = dispatch => ({
        addContactz: (name, number, email, contactType) => dispatch(addContact({name, number, email, contactType})),
        loadContactz: () => dispatch(fetchContacts())
    })

export default connect(null, mapDispatchToProps)(ContactForm)