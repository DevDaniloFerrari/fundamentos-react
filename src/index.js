import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3} />
    </div>,
    document.getElementById('root')
)