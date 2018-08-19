import React from 'react'

export default props => {

    return(
        <div className="breadcrumb">
            <a href="/">
                <i class="fas fa-home breadcrumb__home"></i>
            </a> 
            <i class="fas fa-chevron-right breadcrumb__track"></i>
            <a href="/">Page Name</a> 
            <i class="fas fa-chevron-right breadcrumb__track"></i>
            <a href="/" >...</a>
            <i class="fas fa-chevron-right breadcrumb__track"></i>
            <spam className="breadcrumb_link--active">Currentpage</spam>
        </div>
    )
}

