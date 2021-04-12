import React, { useState } from 'react'
import {connect} from 'react-redux'
import { deleteContact, editContact } from '../../redux/user/user.action'
// import { editContact } from '../../redux/user/user.utils'
// import { fetchContacts } from '../../redux/user/user.action'

import './contact-card.styles.scss'


const ContactCard = ({deleteContact, editContact, contacts}) =>{
    const {name, email, number, createdAt} = contacts
    const [editedDetails, setEditedDetails] = useState({
        newName: '',
        newNumber: '',
        newEmail: '',
        editing: false
    })
    const handleChange=(e)=>{
        const {value, name}= e.target;
        setEditedDetails({...editedDetails, editing: true, [name] : value})
    }
    const { newName, newNumber, newEmail, editing } = editedDetails
    return(
        
        <div>
            <h3>Name: {name}</h3>
            <h2><i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                {email}</h2> 
            <h4> <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            {number}    </h4>
            <button onClick={() => {setEditedDetails({...editedDetails, editing: true})}} >edit</button>
            <button onClick={() => deleteContact(name)}>delete</button>
            <div >
                <form key={createdAt} className={`${editing? 'show' : 'hidden'}`}>
                    <input key={name} onChange={handleChange} required type="text" placeholder='edit name..' name="newName" id="new-name"/>
                    <br/>
                    
                    <input key={number} onChange={handleChange} required type="number" name="newNumber" placeholder='edit number..' id="new-number"/>
                    <br/>
                    <input key={email} onChange={handleChange} required type="email" name="newEmail" placeholder='edit email..' id="new-email"/>
                    <br/>
                    <button onClick={ (e) =>{ 
                        setEditedDetails({...editedDetails, editing: !editing}) 
                        editContact(name, {newName, newNumber, newEmail})
                        e.preventDefault()
                    }}>done</button>
                </form>
                
            </div>
            {console.log(newName)}
                {console.log(newNumber)}
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteContact : (name) => dispatch(deleteContact(name)),
    editContact: (name, editedcontactDetails) => dispatch(editContact(name, editedcontactDetails))
})

export default connect(null, mapDispatchToProps)(ContactCard);