import React from 'react'

import Form from './regform'

export default props => {

    return(
        <div className="reg">

            <div className="reg__head">
                <h1>Registration</h1>
                <div className="users__head-line"></div>
            </div>

            <div className="reg__boxes">
                <div className="reg__boxes-box">
                    <h2 className="reg__boxes-box-h2">Need help?</h2>
                    <i className="far fa-life-ring reg__boxes-box-icon"></i>
                    <p className="reg__boxes-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis sodales aliquet. Pellentesque in ante sit amet.
                    </p>  
                </div>

                <div className="reg__boxes-box">
                    <h2 className="reg__boxes-box-h2">Why register?</h2>
                    <i className="fas fa-heartbeat reg__boxes-box-icon"></i>
                    <p className="reg__boxes-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis sodales aliquet. Pellentesque in ante sit amet.
                    </p>  
                </div>

                <div className="reg__boxes-box">
                    <h2 className="reg__boxes-box-h2">What people are saying...</h2>
                    <i className="far fa-smile reg__boxes-box-icon"></i>
                    <p className="reg__boxes-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis sodales aliquet. Pellentesque in ante sit amet.
                    </p>  
                </div>
            </div>
    
            <Form />

        </div>
    )
}
