import React from 'react'

export default props => {

    return(
        <header className="header">

            <div className="header__logo" >
                <div className="header__logo-frame">
                    <i className="fas fa-question header__logo-icon"></i>
                </div>
                <span className="header__logo-name">Venturus Sports</span>
            </div>

            <div className="header__user">
                <span className="header__user-icon">AT</span>
                <div className="header__user-menu">
                    <button  className="header__user-btn">
                        {props.name}
                    </button>
                    <div className="select-arrow"></div>
                    <div className="header__user-options">
                        <a href="/">Friends List</a>
                        <a href="/">Saved Items</a>
                        <a href="/">Notification</a>
                        <a href="/">User Preferences</a>
                        <div className="reg__form-line margin-line"></div>
                        <a href="/">Log Out</a>
                    </div>
                </div>
            </div>

        </header>
    )
}