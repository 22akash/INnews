import React, { Component } from 'react'
// import Back from './Back.jpg';

export class About extends Component {
  render() {
    return (
      <div className='Aboutt'  >
        <h1>ABOUT</h1>
        <p>
          This 'INnews' is a real time news application, which uses NEWS API (Application Programmable Interface) to obtain the dynamically updated headlines from all over the world.Though user can update the category and country (customize the news ) as per the necessity.Interactive User Interface like REACT-JS is applied in building this application.
        </p>
        <p>
          All the updated features like Router and Infinite Scroll are empolyed to give user a better experience while using.
          Though, this may not be the best alternate in e-news, this application stands a chance in depolying simple user friendly api based news application.
        </p>
      </div>
    )
  }
}

export default About
