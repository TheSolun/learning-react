import './Contador.css'
import React from 'react'

import Display from './Display.jsx'
import PassoForm from './PassoForm.jsx'
import Botoes from './Botoes.jsx'

export default class Contador extends  React.Component {

    constructor(props) {
        super(props)
        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0
        }
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>

                <Display valor={this.state.valor}></Display>

                <Botoes inc={this.inc} dec={this.dec}></Botoes>
            </div>
        )
    }
};