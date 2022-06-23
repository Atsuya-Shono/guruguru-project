import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Router } from "./router/router"
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </React.StrictMode>

    </div>
  );
}

export default App;
