import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchContacts } from '../../redux/user/user.action'
import { selectCurrentUser, selectCurrentUserContacts } from '../../redux/user/user.selector'

import { createUserProfileDocument,
    googleProvider, 
    auth, 
    getCurrentUser, 
    addContact, 
    firestore
} from '../../fire-base/fire-base'

import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = ({contacts, users, fetchContacts}) =>{
    const maliq = [1]

    useEffect(() =>{
        console.log('i logged')
        const Unction = async () =>{
        const userAuth = await getCurrentUser()
        const userRefrence = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRefrence.get();
        const user = snapShot.data()
        const userContacts = user.contacts
        console.log('function done running')
        }
        Unction();

        
    },[])

    const g = [{name: 'abd', b: 'shola'},{name: 'doy', b: 'tay'}]
    return(contacts ?
        <div>


            {/* {contacts[11].name}s */}


            <p>emails: </p>
            {
                
            }
            {/* <ContactCard contactInfo={contacts} /> */}
            {/* {
            contacts.map(item => (
                    <ContactCard  item={item}/>
                )
            )
        } */}
                {maliq}
            {
            maliq.map(contactInfo => (
                    <ContactCard  contactInfo={contactInfo}/>
                )
            )
        }


            

            <input type="text" placeholder='Filter Contacts...'/>
            {/* <ContactCard contactInfo = {contacts}/> */}
            <div>
            </div>
        </div>
    : null)
}

const mapStateToProps = createStructuredSelector({
    contacts: selectCurrentUserContacts,
    users: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
    fetchContacts: () => dispatch(fetchContacts())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Filter)