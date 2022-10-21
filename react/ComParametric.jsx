import React from 'react'

export default function ComParametric(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.titulo}</strong>
                tem nota
                <strong>{props.nota}</strong>
                e está
                <strong>{status}</strong>
            </p>
        </div>
    )

}