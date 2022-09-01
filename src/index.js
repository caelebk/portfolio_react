import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar/navbar';
import ScrollMenu from './components/scroll-menu/scroll-menu';
import ScrollAnchor from './components/scroll-menu/scroll-anchor';
import Introduction from './components/section/introduction/introduction'
import reportWebVitals from './reportWebVitals';
import About from './components/section/about/about';
import 'hover.css';
import 'animate.css';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <ScrollMenu dataAOS="fade-left" anchor="#scroll-anchor" />
    <ScrollAnchor />
    <Introduction />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();