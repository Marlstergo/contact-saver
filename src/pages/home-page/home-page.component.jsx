import React from "react";

import Filter from '../../components/filter/filter.component'
import ContactCard from '../../components/contact-card/contact-card.component'
import Header from '../../components/header/header.component'
import ContactForm from '../../components/add-contact-form/add-contact-form.component'


const HomePage = () =>{


    return(
        <div>
            <div className='header'>
                <Header/>
            </div>
            <div className='form-container'>
                <ContactForm/>
            </div>
            <div className='cards-container'>
                <Filter/>
            </div>
            
        </div>
    )
}

export default HomePage;