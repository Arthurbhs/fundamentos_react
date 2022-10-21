import React from 'react'


import ComParametric from './componet/ComParametric'
import First from './componet/First'
import Fragment from './Fragment'

export default () => {
    return (

        <div id="app">
            <h1>Fundamentos de React</h1>
            <Fragment />
            <ComParametric
                titulo="Situação do Aluno"
                aluno="Arthur Barbosa"
                nota={9.8} />
            <First>
            </First>

        </div>
    );
}