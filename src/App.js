import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <nav className="NavBar">
            <ul>
              <li>About</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </nav>
  
          <section className="Page">
            <p>blah blah blah</p>
          </section>

          <footer className="Footer">
            <ul>
              <li><i className="fab fa-facebook-square"></i></li>
              <li>InstaGram</li>
              <li>Twitter</li>
            </ul>
          </footer>
          <section className="Copy">
            <p>&copy; 2019 GI(ant) llc.</p>
          </section>
        </div>
     </div>
    );
  }
}

export default App;
