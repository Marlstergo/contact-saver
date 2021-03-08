import React from 'react'

import './contact-card.styles.scss'


const ContactCard = () =>{


    return(
        <div>
            <h3>Name</h3>
            <h4><i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                Email</h4>
            <h4> <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                Phone number</h4>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default ContactCard;