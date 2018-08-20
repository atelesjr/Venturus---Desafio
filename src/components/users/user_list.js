import React from 'react'

export default props => {
    
    const renderRows = () => {
        const dataUsers = props.usersList 

        return dataUsers.map(users => ( 
            
            <tr key={ users.id } >
                <td>{ users.username }</td>
                <td>{ users.name }</td>
                <td>
                    <a href={`mailto:${users.email}`}>
                        { users.email }
                    </a>
                </td>
                <td>
                    <a href={`https://www.google.com/maps/search/${ users.address.geo.lat },${ users.address.geo.lng }`}
                    target="_blank">
                        { users.address.city }
                    </a>
                </td>
                <td>Always</td>
                <td>Every day</td>
                <td><a href="/">3</a></td>
                <td><a href="/">2</a></td>
                <td>38</td>
                <td><a href="/" className="users-list trash"><i className="fas fa-trash-alt trash"></i></a></td>
            </tr>
        ))  
    }

    return( 

        <div className="users__list">

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>City</th>
                        <th>Ride in group</th>
                        <th>Day of the week</th>
                        <th>Posts</th>
                        <th>Albums</th>
                        <th>Photos</th>
                    </tr>
                </thead>
                <tbody>
                   { renderRows() }
                </tbody>
             </table>
             
        </div>   
    )
}