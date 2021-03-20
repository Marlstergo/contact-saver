import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchContacts } from '../../redux/user/user.action'
import { selectCurrentUser, selectCurrentUserContacts } from '../../redux/user/user.selector'

import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = ({contacts, users, fetchContacts}) =>{
    console.log(contacts)
    console.log(users)
    console.log(contacts)
    const [email, setEmail] =useState({
        eml: null,
        me: 'mel'
    })
    useEffect(()=>{
        setEmail({ eml: contacts})
    },[contacts])
    return(
        <div>

            <p>emails: {contacts[11].email} </p>
            {
                email.me
            }
            <dir>{email.me}</dir>
                
            


            

            <input type="text" placeholder='Filter Contacts...'/>
            <ContactCard/>
            <div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    contacts: selectCurrentUserContacts,
    users: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
    fetchContacts: () => dispatch(fetchContacts())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Filter)