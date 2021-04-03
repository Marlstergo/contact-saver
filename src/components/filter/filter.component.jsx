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
const opo = [
    1,2,3,3,4,56
]

const Filter = ({contacts, users, fetchContacts}) =>{
    

    const [m, setM] = useState([])


    useEffect(() =>{
        const Unction = async () =>{
        const userAuth = await getCurrentUser()
        const userRefrence = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRefrence.get();
        const user = snapShot.data()
        const userContacts = user.contacts
        console.log(userContacts)
        setM(userContacts)
        console.log('function done running')
        }
        Unction();

        
    },[])

    const g = [{name: 'abd', b: 'shola'},{name: 'doy', b: 'tay'}]
    return(contacts ?
        <div>
            <p>emails: </p>               
            {
            m.map(contactInfo =>{ 
                console.log('am logging')
                console.log(contactInfo)

                return(<ContactCard contacts={contactInfo} />)

            }
        
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