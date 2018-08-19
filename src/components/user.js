import React from 'react'

export default props => {

    return( 
        <div className="users">
        
            <div className="users__head">
                <h1>Users</h1>
                <div className="users__head-line"></div>
                <div role="form" className="users__head-filter" >
                    <button className="users__head-filter-btn" >
                        <i class="fas fa-search users__head-filter-btn-icon"></i>
                    </button>
                    <input tyep="text"
                        name="filter"
                        placeholder="Filter table content"
                        className="users__head-filter-input"
                    />
                </div>
            </div> 

            <div className="users__list">
                <table>
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
                    <tr>
                        <td>Bret</td>
                        <td>Lanne</td>
                        <td><a href="/" className="users__list-link">Sincere@april.biz</a></td>
                        <td><a href="/" className="users__list-link">Gwenborough</a></td>
                        <td>Always</td>
                        <td>Every day</td>
                        <td><a href="/" className="users__list-link">3</a></td>
                        <td><a href="/" className="users__list-link">2</a></td>
                        <td>38</td>
                        <td><a href="/" className="users-list trash"><i className="fas fa-trash-alt trash"></i></a></td>
                    </tr>
                    <tr>
                        <td>Bret</td>
                        <td>Lanne</td>
                        <td><a href="/" className="users__list-link">Sincere@april.biz</a></td>
                        <td><a href="/" className="users__list-link">Gwenborough</a></td>
                        <td>Always</td>
                        <td>Every day</td>
                        <td><a href="/" className="users__list-link">3</a></td>
                        <td><a href="/" className="users__list-link">2</a></td>
                        <td>38</td>
                        <td><a href="/" className="users-list trash"><i className="fas fa-trash-alt"></i></a></td>
                    </tr>
                    <tr>
                        <td>Bret</td>
                        <td>Lanne</td>
                        <td><a href="/" className="users__list-link">Sincere@april.biz</a></td>
                        <td><a href="/" className="users__list-link">Gwenborough</a></td>
                        <td>Always</td>
                        <td>Every day</td>
                        <td><a href="/" className="users__list-link">3</a></td>
                        <td><a href="/" className="users__list-link">2</a></td>
                        <td>38</td>
                        <td><a href="/" className="users-list trash"><i className="fas fa-trash-alt"></i></a></td>
                    </tr>
                    <tr>
                        <td>Bret</td>
                        <td>Lanne</td>
                        <td><a href="/" className="users__list-link">Sincere@april.biz</a></td>
                        <td><a href="/" className="users__list-link">Gwenborough</a></td>
                        <td>Always</td>
                        <td>Every day</td>
                        <td><a href="/" className="users__list-link">3</a></td>
                        <td><a href="/" className="users__list-link">2</a></td>
                        <td>38</td>
                        <td><a href="/" className="users-list trash"><i className="fas fa-trash-alt"></i></a></td>
                    </tr>
                    <tr>
                        <td>Bret</td>
                        <td>Lanne</td>
                        <td><a href="/" className="users__list-link">Sincere@april.biz</a></td>
                        <td><a href="/" className="users__list-link">Gwenborough</a></td>
                        <td>Always</td>
                        <td>Every day</td>
                        <td><a href="/" className="users__list-link">3</a></td>
                        <td><a href="/" className="users__list-link">2</a></td>
                        <td>38</td>
                        <td><a href="/" className="users-list trash"><i className="fas fa-trash-alt"></i></a></td>
                    </tr>
                </table>
            </div>   
        </div>
    )
}

