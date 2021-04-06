import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchContacts } from '../../redux/user/user.action'
// import { fetchContacts } from '../../redux/user/user.action'
import { selectCurrentUserContacts } from '../../redux/user/user.selector'


import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = ({contacts, loadContacts}) =>{

    const [m, setM] = useState([])


    useEffect(() =>{
        // const Unction = async () =>{
        // const userAuth = await getCurrentUser()
        // const userRefrence = firestore.doc(`users/${userAuth.uid}`)
        // const snapShot = await userRefrence.get();
        // const user = snapShot.data()
        // const userContacts = user.contacts
        // console.log(userContacts)
        // setM(userContacts)
        // console.log('function done running')
        // }
        // Unction();
        const shola = 'state'
        setM(shola)
        // console.log(contacts);
        console.log(m)
        // loadContacts()
        // const loader = async () =>{
        //     await console.log(contacts)
        //     console.log('here are the contacts')
        //     await setM(contacts)

        //     await console.log(m)
        // }
        // loader()
        
    },[m])
    return(
        <div>
            <button onClick={()=>loadContacts()}>Refresh Contacts</button>
            <p>emails: </p>               
            {
            contacts.map(contactInfo =>{ 
                console.log(contactInfo)

                return(<ContactCard key={contactInfo.createdAt} contacts={contactInfo} />)

            }
        
        )
        }

            

            <input type="text" placeholder='Filter Contacts...'/>
            <div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    loadContacts : () => dispatch(fetchContacts())
})
const mapStateToProps = createStructuredSelector({
    contacts: selectCurrentUserContacts
    // users: selectCurrentUser
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)