import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Intent from './Components/Intent/Intent';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Intent} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    )
  }
}

export default App

