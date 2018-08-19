import React, { Component } from 'react'
import './sass/main.css'


import Header from './components/header'
import Breadcrumb from './components/breadcrumb'
import Sport from './components/sport'
import User from './components/user'
import Registration from './components/registration/registration'

class App extends Component {

  render() {
    return (
      <div className="container">

        <Header name="Agostinho Teles Jr." />
        <Breadcrumb />
        <Sport />
        <User />
        <Registration />

      </div>
    )
  }
}

export default App
