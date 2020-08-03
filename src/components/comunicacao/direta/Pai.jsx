import React from 'react'
import Filho from './Filho.jsx'

export default props =>
    <div>
        <Filho {...props}>João</Filho> {/* Passa todas as propriedades recebidas */}
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Freitas">Pedro</Filho>
    </div>