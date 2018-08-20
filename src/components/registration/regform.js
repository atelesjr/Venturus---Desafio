import React from 'react'

export default props => {

    return(
        <div role="form" className="reg__form">
            <div className="reg__form-line"></div>

            <div className="reg__form-group">
                <label htmlFor="username" className="reg__form-label">Username</label>
                <input type="text" className="reg__form-input" placeholder="" id="username" required />
            </div>

            <div className="reg__form-group">
                <label htmlFor="city" className="reg__form-label">City</label>
                <input type="text" className="reg__form-input" placeholder="" id="city" />   
            </div>

            <div className="reg__form-group">
                <label htmlFor="name" className="reg__form-label">Name</label>
                <input type="text" className="reg__form-input" placeholder="" id="Name" required />
            </div>

            <div className="reg__form-group-radio">
                <p className="reg__form-radio-text">Ride in group?</p>
                <div className="reg__form-radio">
                    <input type="radio" className="reg__form-radio-input" id="always" name="ridegroup" />
                    <label htmlFor="always" className="reg__form-radio-label">
                        <span className="reg__form-radio-btn"></span>
                        Always
                    </label>
                </div>
                <div className="reg__form-radio">
                    <input type="radio" className="reg__form-radio-input" id="sometimes" name="ridegroup" />
                    <label htmlFor="sometimes" className="reg__form-radio-label">
                        <span className="reg__form-radio-btn"></span>
                        Sometimes
                    </label>
                </div>
                <div className="reg__form-radio">
                    <input type="radio" className="reg__form-radio-input" id="never" name="ridegroup" />
                    <label htmlFor="never" className="reg__form-radio-label">
                        <span className="reg__form-radio-btn"></span>
                        Never
                    </label>
                </div>
            </div>

            <div className="reg__form-group">
            <label htmlFor="E-mail" className="reg__form-label">E-mail</label>
                <input type="email" className="reg__form-input" placeholder="" id="email" required />
            </div>

            <div className="reg__form-group-checkbox">
                <p className="reg__form-checkbox-text">Days of the week</p>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="sun" name="ridegroup" value="sun" />
                    <label htmlFor="sun" className="reg__form-checkbox-label">
                        <span className="reg__form-checkbox-btn"></span>
                        Sun
                    </label>´
                </div>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="Mon" name="ridegroup" value="mon" />
                    <label htmlFor="Mon" className="reg__form-checkbox-label">   
                        <span className="reg__form-checkbox-btn"></span>
                        Mon
                    </label>
                </div>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="Tue"  name="ridegroup" value="tue" />
                    <label htmlFor="Tue" className="reg__form-checkbox-label">
                        <span className="reg__form-checkbox-btn"></span>
                        Tue
                    </label>
                </div>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="Wed"  name="ridegroup" value="wed" />
                    <label htmlFor="Wed" className="reg__form-checkbox-label">
                    <span className="reg__form-checkbox-btn"></span>
                        Wed
                    </label>
                </div>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="thu"  name="ridegroup" value="thu" />
                    <label htmlFor="thu" className="reg__form-checkbox-label">
                        <span className="reg__form-checkbox-btn"></span>
                        Thu
                    </label>
                </div>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="fri"  name="ridegroup" value="fri" />
                    <label htmlFor="fri" className="reg__form-checkbox-label">
                        <span className="reg__form-checkbox-btn"></span>
                        Fri
                    </label>
                </div>
                <div className="reg__form-checkbox">
                    <input type="checkbox" className="reg__form-checkbox-input" 
                        id="sat"  name="ridegroup" value="sat" />
                    <label htmlFor="sat" className="reg__form-checkbox-label">
                        <span className="reg__form-checkbox-btn"></span>
                        Sat
                    </label>
                </div>
            </div>

            <div className="reg__form-btn">
                <button type="submit" name="submit" value="submit" className="btn btn-submit">
                    Save
                </button>
                <button type="reset" name="discard" value="reset" className="btn btn-discard">
                    Discard
                </button>
            </div>
            
        </div>
    )
}