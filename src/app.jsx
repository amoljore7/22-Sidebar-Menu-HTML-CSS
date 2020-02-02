import React, { Component } from 'react';
import './app.css';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <input type="checkbox" id="check" />
        <label for="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
        </label>
      <div className='sidebar'>
        <header>My App</header>
        <ul>
          <li><a href="#"><i className="fas fa-qrcode"></i>Dashbord</a></li>
          <li><a href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
          <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
          <li><a href="#"><i className="fas fa-calendar-week"></i>Event</a></li>
          <li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
          <li><a href="#"><i className="fas fa-sliders-h"></i>Service</a></li>
          <li><a href="#"><i className="fas fa-envelope"></i>Contact</a></li>
        </ul>
      </div>
      <section>
        
      </section>
      </React.Fragment>
    );
  }

}



export default App;
