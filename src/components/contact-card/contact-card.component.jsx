import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchContacts } from '../../redux/user/user.action'

import './contact-card.styles.scss'


const ContactCard = ({fetchContacts}) =>{

    useEffect(() =>{
        fetchContacts()
    }, [])
    return(
        <div>
            <h3>Name</h3>
            <h4><i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                Email</h4>
            <h4> <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                Phone number</h4>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    fetchContacts: () => dispatch(fetchContacts())
}) 

export default connect(null, mapDispatchToProps)(ContactCard);