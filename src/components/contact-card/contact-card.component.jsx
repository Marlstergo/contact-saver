import React, { useState } from 'react'
import {connect} from 'react-redux'
import { deleteContact } from '../../redux/user/user.action'
// import { fetchContacts } from '../../redux/user/user.action'

import './contact-card.styles.scss'


const ContactCard = ({deleteContact, contacts}) =>{
    const {name, email, number} = contacts
    const [editedDetails, setEditedDetails] = useState({
        newName: '',
        newNumber: '',
    })
    const handleChange=(e)=>{
        const {value, name}= e.target;
        setEditedDetails({...setEditedDetails, [name] : value})
    }
    const { newName, newNumber } = editedDetails
    return(
        
        <div>
            <h3>Name: {name}</h3>
            <h2><i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                {email}</h2> 
            <h4> <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            {number}    </h4>
            <button >edit</button>
            <button onClick={() => deleteContact(name)}>delete</button>
            <div>
                <input onChange={handleChange} type="text" placeholder='edit name..' name="newNname" id="new-name"/>
                <input onChange={handleChange} type="number" name="newNumber" id="new-number"/>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteContact : (name) => dispatch(deleteContact(name))
})

export default connect(null, mapDispatchToProps)(ContactCard);