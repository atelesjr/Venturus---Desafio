import React from 'react'

import UserList from './user_list'

export default props => {
   
    return(
        <div className="users">
        
            <div className="users__head">
                <h1>Users</h1>
                <div className="users__head-line"></div>
                <div role="form" className="users__head-filter" >
                    <button className="users__head-filter-btn" >
                        <i className="fas fa-search users__head-filter-btn-icon"></i>
                    </button>
                    <input tyep="text"
                        name="filter"
                        placeholder="Filter table content"
                        className="users__head-filter-input"
                    />
                </div>
            </div> 
            <UserList usersList={ props.usersList } postsList={ props.postsList }
                albumsList={ props.albumsList } photosList={ props.photosList } 
            />
         
        </div>
    )
}

/*
   { console.log (props.usersList) }
            { console.log (props.postsList) }
            { console.log (props.photosList) }
            { console.log (props.albumsList) }
*/

