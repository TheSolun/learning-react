import React, { useState } from 'react'
import Sub from './Sub.jsx'

export default (props) => {
 
    const [num, setNum] = useState('Valor')
    const [texto, setTexto] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};