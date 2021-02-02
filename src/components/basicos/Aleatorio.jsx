import React from 'react';

export default ({ min, max }) => {
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta) + min;
    return (
        <>
            <p>Número gerado <strong>{aleatorio}</strong></p>
        </>
    );
}