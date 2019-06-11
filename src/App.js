import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppContainer">
            <nav className="NavBar">
              <ul>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </nav>
    
            <section className="Page">
              <div className="Card">
                <h2>About</h2>
                <article className="About">
                  <p>Ea eiusmod non incididunt do sit. Nisi nulla eiusmod fugiat exercitation cupidatat ullamco commodo. Nisi officia laborum ipsum in.</p>
                </article>
              </div>
              <div className="Card">
                <div className="logo">B.A.J.</div>
              </div>
            </section>

            <footer className="Footer">
              <section className="Copy">
                <h3>&copy; 2019 Beverly Jones Designs.</h3>
              </section>
            </footer>
        </div>
     </div>
    );
  }
}

export default App;
