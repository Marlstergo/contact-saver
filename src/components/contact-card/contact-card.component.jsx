import React, { } from 'react'
import {connect} from 'react-redux'
// import { fetchContacts } from '../../redux/user/user.action'

import './contact-card.styles.scss'


const ContactCard = ({contactInfo}) =>{
    // const { number, name, email} = contactInfo
    // if (contactInfo) {
    //     const {number, name, email}= contactInfo
    // }
    

    // console.log(name)
    // useEffect(() =>{
    //     fetchContacts()
    // }, [])
    // console.log(contactInfo.name)
    return(
        
        <div>
                
                {contactInfo.email}
                this is it
            {/* {
                contactInfo.forEach(element => {
                    return (
                    <h1>{element.name}</h1>
            )
                }
                )
            } */}
            {/* <h3>{name? name: null}</h3> */}
            {/* <h2><i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                {contactInfo}</h2> 
            <h4> <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                </h4>
            <button>edit</button>
            <button>delete</button> */}
        </div>
    )
}


export default connect(null)(ContactCard);