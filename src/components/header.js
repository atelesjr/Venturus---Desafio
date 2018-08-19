import React from 'react'

export default props => {

    return(
        <header className="header">
            <div className="header__logo" >
            <div className="header__logo-frame">
                <i className="fas fa-question header__logo-icon"></i>
            </div>
            <spam className="header__logo-name">Venturus Sports</spam>
            </div>
            <div className="header__user">
            <spam className="header__user-icon">AT</spam>
            <div className="header__user-select">
                <select>
                    <option>{props.name}</option>
                    <option>Friends List</option>
                    <option>Saved Items</option>
                    <option>Notification</option>
                    <option>User Preferences</option>
                    <option>Log Out</option>
                </select>
                <div className="select_arrow"></div>
            </div>
          </div>
        </header>
    )
}

