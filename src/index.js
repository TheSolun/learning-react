import React from 'react' //Biblioteca que permite JSX - utilização de tags html junto ao js
import ReactDOM from 'react-dom'
import './index.css'

import App from './App.jsx'

ReactDOM.render(
    <App></App>,//Elemento a ser renderizado
   document.getElementById('root') //Joga na div 'root' que se encontra em public/index.html
)
