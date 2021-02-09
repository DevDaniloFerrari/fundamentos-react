import React, { useState } from 'react'
import './Mega.css'

export default function Mega() {

    const [numeros, setNumeros] = useState([]);
    const [quantidade, setQuantidade] = useState(5);

    function onClickGerar() {
        const numerosGerados = gerarNumeros(quantidade, [])
        setNumeros(numerosGerados)
        console.log(numeros)
    }

    function gerarNumeros(qtde, numeros) {
        const numero = parseInt(Math.random() * 59) + 1
        if (numeros.length === qtde)
            return numeros.sort((a, b) => a - b);

        if (numeros.includes(numero))
            return gerarNumeros(qtde, numeros);

        numeros.push(numero);
        qtde = qtde++;
        return gerarNumeros(qtde, numeros);
    }

    return (
        <div>
            <h2>Mega</h2>
            <div className="numbers">
                {numeros.map(numero => {
                    return <h3 className="mega-number" key={numero}>{numero}</h3>
                })}
            </div>
            <input type="number" min={1} value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
            <button onClick={onClickGerar}>Gerar</button>
        </div>
    )
}
