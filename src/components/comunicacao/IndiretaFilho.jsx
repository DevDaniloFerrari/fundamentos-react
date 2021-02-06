import React from 'react'

export default function IndiretaFilho(props) {

    const callback = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => { callback('João', gerarIdade(), gerarNerd()) }}>
                Fornecer Informações
            </button>
        </div>
    )
}
