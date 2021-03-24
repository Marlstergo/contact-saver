import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchContacts } from '../../redux/user/user.action'
import { selectCurrentUser, selectCurrentUserContacts } from '../../redux/user/user.selector'

import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = ({contacts, users, fetchContacts}) =>{
    console.log(contacts[9].email)
    const a = contacts
    // const [email, setEmail] =useState({
    //     eml: 'null',
    //     me: contacts[7]
    // })
const g = [{a: 'abd', b: 'shola'},{a: 'doy', b: 'tay'}]
    // useEffect(()=>{
    //     setEmail({ eml: contacts})
    // },[contacts])
    console.log(g)
    return(
        <div>
            {/* {contacts[9].email}
            {
                contacts.forEach( () => {
                    console.log('email')
                })
            }
            {g.map((contact) => (
                <div> nunber {`shola  ${contact.a}`} </div>
            ))} */}

            {a.map(listitem => (
                <li  className="list-group-item">
                        <span>
                                {listitem.name}
                                {listitem.email}
                        </span>
                        
                </li>
        ))}



            <p>emails: </p>
            
                
            


            

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