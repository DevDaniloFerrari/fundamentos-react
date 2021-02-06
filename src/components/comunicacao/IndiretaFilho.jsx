import React from 'react'

export default function IndiretaFilho(props) {

    const callback = props.quandoClicar

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => { callback('João', 53, true) }}>
                Fornecer Informações
            </button>
        </div>
    )
}
