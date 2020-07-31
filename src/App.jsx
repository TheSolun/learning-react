import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos.jsx'
import Repeticao from './components/basicos/Repeticao.jsx'
import Condicional from './components/basicos/Condicional.jsx'
import CondicionalComIf from './components/basicos/CondicionalComIf.jsx'
import Card from './components/layout/Card.jsx'

export default props =>
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={3}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parâmetro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>