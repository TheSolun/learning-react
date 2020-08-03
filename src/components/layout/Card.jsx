import React from 'react'
import './Card.css'

export default props =>
    <div className="Card" style={{borderColor: props.color || '#000'}}>
        <div className="Content">
            {props.children}
        </div>
        {/* Se não houver a propriedade color, define a cor como #000*/}
        <div className="Footer" style={{backgroundColor: props.color || '#000'}}>
            {props.titulo}
        </div>
    </div>