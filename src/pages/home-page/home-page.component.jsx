import React, {useEffect} from "react";

import Filter from '../../components/filter/filter.component'
import Header from '../../components/header/header.component'
import ContactForm from '../../components/add-contact-form/add-contact-form.component'
import { fetchContacts } from "../../redux/user/user.action";
import { connect } from "react-redux";


const HomePage = ({fetchContactz}) =>{

    useEffect(()=>{
        fetchContactz()
    },[])
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
const mapDispatchToProps = dispatch => ({
    fetchContactz: () => dispatch(fetchContacts())
})
export default connect(null, mapDispatchToProps)( HomePage);