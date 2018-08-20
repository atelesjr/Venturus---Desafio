import React, { Component } from 'react'
import './sass/main.css'

import axios from 'axios'

import Header from './components/header'
import Breadcrumb from './components/breadcrumb'
import Sport from './components/sport'
import User from './components/users/user'
import Registration from './components/registration/registration'

const usersURL = 'https://jsonplaceholder.typicode.com/users'
const postsURL = 'https://jsonplaceholder.typicode.com/posts'
const photosURL = 'https://jsonplaceholder.typicode.com/photos'
const albumsURL = 'https://jsonplaceholder.typicode.com/albums'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { usersList: [], postsList: [], photosList: [], albumsList: []  }

    this.refresh()
  }

  refresh() {
    axios.all([
      axios.get(usersURL),
      axios.get(postsURL),
      axios.get(photosURL),
      axios.get(albumsURL)
    ])
    .then(axios.spread((users, posts, albums, photos ) => {
      this.setState(
        { ...this.state, 
          usersList: users.data,
          postsList: posts.data,
          albumsList: albums.data,
          photosList: photos.data  
        } ) 
      }
      ) 
    ) 
    .catch(error => console.log('Erro:', error))
  }
   
  render() {
    
    return (
      <div className="container">
        <Header name="Agostinho Teles Jr." />
        <Breadcrumb />
        <Sport />
        <User usersList={ this.state.usersList } 
        />
        <Registration />    
      </div>
    )
  }
}

export default App
