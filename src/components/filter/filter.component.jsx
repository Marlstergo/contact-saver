import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchContacts } from '../../redux/user/user.action'
// import { fetchContacts } from '../../redux/user/user.action'
import { selectCurrentUserContacts } from '../../redux/user/user.selector'


import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = ({contacts, loadContacts}) =>{

    const [filter, setFilter] = useState({
      string: ''
    })


    // useEffect(() =>{
  const handleChange=(e)=>{
    const {value}= e.target;
    setFilter({string: value})
  }
  const filteredContact = contacts.filter( contact => contact.name.toLowerCase().includes(filter.string.toLowerCase()) || contact.number.includes(filter.string))

  console.log(filter)
        
    // },[])
    return(
        <div>
            <button onClick={()=>loadContacts()}>Refresh Contacts</button>
          <p>search contacts by name or number</p>
          <input type="text" onChange={handleChange} placeholder='Search Contacts...'/>
            {
              filteredContact.map(contactInfo =>{
                console.log(contactInfo)

                return(<ContactCard key={contactInfo.number} contacts={contactInfo} />)

            }
        
        )
        }

            

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