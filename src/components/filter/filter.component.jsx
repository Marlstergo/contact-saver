import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchContacts } from '../../redux/user/user.action'
// import { fetchContacts } from '../../redux/user/user.action'
import { selectCurrentUserContacts } from '../../redux/user/user.selector'


import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = ({contacts, loadContacts}) =>{

    // const [m, setM] = useState([])


    useEffect(() =>{
    
        
    },[])
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