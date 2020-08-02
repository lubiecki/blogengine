import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap');
  ${normalize}
  body {
    background: #eee;
    color: #222831;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
