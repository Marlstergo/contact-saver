import React from 'react'

import ContactCard from '../contact-card/contact-card.component'

import './filter.styles.scss'


const Filter = () =>{

    return(
        <div>
            <input type="text" placeholder='Filter Contacts...'/>
            <ContactCard/>

        </div>
    )
}

export default Filter