import React, { Component } from 'react'
import Home from './../Home/Home'
import Work from './../Work/Work'
import Porto from './../Porto/Porto'
import Profile from './../Profile/Profile'
import About from './../About/About'
import SocialMedia from './../SocialMedia/Social'
import Footer from './../Footer/Footer'

class Intent extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Porto />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    )
  }
}

export default Intent

