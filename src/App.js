import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import { connect } from 'react-redux';

import SignUp from './components/sign-up/sign-up.component'
import SignIn from './components/sign-in/sign-in.conponent'
import HomePage from './pages/home-page/home-page.component'
// import Filter from './components/filter/filter.component'
import './App.scss';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'


function App({currentUser}) {
  return (
    <div className="App">
      
    <Switch >
      <Route exact path='/' render={() => 
            currentUser ?
              (<Redirect to= '/home' />)
              :
              (<div><SignIn/>
                
                </div>
                )
          } />
      <Route exact path='/signup' render={() => 
            currentUser ?
              (<Redirect to= '/home' />)
              :
              (<SignUp/>)
          } />
      <Route exact path='/home' render={() => 
            !currentUser ?
              (<Redirect to= '/' />)
              :
              (<HomePage/>)
          } />
      

    </Switch>

        
    </div>
  );
  
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App);
