import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  name = 'LATEST NEWS!!!'
  apiKey= process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
        {/* <Navbar />
        <h5 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}> HELLOO...{this.name} </h5>
         <News apiKey={apiKey} country='in' category='general'/>  */}
        <Router>
          <Navbar />
          <h5 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>  </h5>
          <Routes>
            <Route exact path='/' element={<News key='general' apiKey={this.apiKey} country='in' category='general' />} />
            <Route exact path='/business' element={<News key='business' apiKey={this.apiKey} country='in' category='business' />} />
            <Route exact path='/entertainment' element={<News key='entertainment' apiKey={this.apiKey} country='in' category='entertainment' />} />
            <Route exact path='/sports' element={<News key='sports'  apiKey={this.apiKey} country='in' category='sports' />} />
            <Route exact path='/technology' element={<News key='technology' apiKey={this.apiKey} country='in' category='technology' />} />
            <Route exact path='/health' element={<News key='health' apiKey={this.apiKey} country='in' category='health' />} />
            <Route exact path='/science' element={<News key='science' apiKey={this.apiKey} country='in' category='science' />} />
            <Route exact path='/About' element={<About />} />
          </Routes>
        </Router>
      </>
    )
  }
}



