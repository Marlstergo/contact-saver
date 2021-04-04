import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { signOutUserStart } from '../../redux/user/user.action'
import { selectCurrentUser } from '../../redux/user/user.selector'

import './header.styles.scss'

const Header = ({user, logout}) =>{


    return(
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>CONTACT kEEPER</h1>
                </div>
                <div className="user-area">
                    <span>Hellooo {user ? `${user.displayName}` : ''}</span>
                    <span className='log-out' onClick={()=>logout()}>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                        Logout now
                    </span>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(signOutUserStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);