import React from 'react'

export default props => {

    return(
        <div className="breadcrumb">
            <a href="/">
                <i className="fas fa-home breadcrumb__home"></i>
            </a> 
            <i className="fas fa-chevron-right breadcrumb__track"></i>
            <a href="/">Page Name</a> 
            <i className="fas fa-chevron-right breadcrumb__track"></i>
            <a href="/" >...</a>
            <i className="fas fa-chevron-right breadcrumb__track"></i>
            <span className="breadcrumb_link--active">Currentpage</span>
        </div>
    )
}

