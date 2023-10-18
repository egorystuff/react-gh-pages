import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Это приложения для тестирования по созданию gh-pages</p>
        <a
          className='App-link'
          href='https://github.com/gitname/react-gh-pages'
          target='_blank'
          rel='noopener noreferrer'>
          Более подробно можно прочитать тут.
        </a>
      </header>
    </div>
  );
}

export default App;
