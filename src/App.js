import React, { Component } from 'react';
import reactLogo from './react-logo.svg';
import reduxLogo from './redux-logo.svg';
import './App.css';
import { withStore } from './store';

const LogoLearn = ({ logo, altLogo, linkClass, href, text }) => (<div className="App-logo-learn">
  <img src={logo} className="App-logo" alt={altLogo} />
  <a className={linkClass}
     href={href}
     target="_blank"
     rel="noopener noreferrer"
  >
    {text}
  </a>
</div>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logos">
            <LogoLearn logo={reactLogo}
                       altLogo="react logo"
                       text="Learn React"
                       linkClass="App-link-react"
                       href="https://reactjs.org"
            />
            <LogoLearn logo={reduxLogo}
                       altLogo="redux logo"
                       text="Learn Redux"
                       linkClass="App-link-redux"
                       href="https://redux.js.org"
            />
          </div>
        </header>
        Test
      </div>
    );
  }
}

export default withStore()(App);
