import React from 'react'

export default props => {

    return(
        
        <div className="sport">
            <div className="sport__box">
                <i className="fas fa-puzzle-piece sport__box-icon"></i>
                <p className="sport__box-category">Sport type</p>
                <p className="sport__box-value">Cycling</p>
            </div>

            <div className="sport__box">
                <i className="fas fa-trophy sport__box-icon"></i>
                <p className="sport__box-category">Mode</p>
                <p className="sport__box-value">Advanced</p>
            </div>

            <div className="sport__box">
                <i className="fas fa-map-signs sport__box-icon"></i>
                <p className="sport__box-category">Route</p>
                <p className="sport__box-value">30 miles</p>
            </div>

        </div>
    )
}

