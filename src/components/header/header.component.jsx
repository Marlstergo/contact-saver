import React from 'react'



import './header.styles.scss'

const Header = () =>{


    return(
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>CONTACT kEEPER</h1>
                </div>
                <div className="user-area">
                    <span>Hello Name</span>
                    <span>
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        Logout
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header;