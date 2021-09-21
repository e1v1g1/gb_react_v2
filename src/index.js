import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elementLi = React.createElement('li', {
//     className: 'li'
// }, 'List element')

// const elementUl = React.createElement('ul', {
//     className: 'ul'
// }, elementLi, elementLi, elementLi, elementLi, elementLi)


//+++++++++++++++++++++ JSX +++++++++++++
// const elementLiJSX = <li className='li'>element_JSX</li>
//
// const elementUlJSX = <ul className ='ul'>
//     {elementLiJSX}
//     {elementLiJSX}
//     {elementLiJSX}
//     {elementLiJSX}
//
// </ul>
//ReactDOM.render(elementUlJSX, document.getElementById('root'));

//++++++++++++++++++++++++++++++++++++++++++++



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
