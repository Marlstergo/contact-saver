import React from 'react'

import Filter from './components/filter/filter.component'
import ContactForm from './components/add-contact-form/add-contact-form.component'
import Header from './components/header/header.component'

import './App.scss';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='body-part'>
        <div className='form-container'>
          <ContactForm/>
        </div>
        <div className='cards-container'>
          <Filter/>
        </div>
      
      </div>
        
    </div>
  );
  
}

export default App;
