import React from 'react'
import './MegaSena.css'

export default props => {

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Match.random()* (max + 1 - min)) + min
        return array.icludes(aleatorio)?
        gerarNumeroNaoContido(min, max, array) : 
        aleatorio
    }
    
    function gerarNumero(qtde) {
        const number = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const newNumber = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, newNumber]
        },[])
        .sort((n1, n2) => n1 - n2)
        
        return number;
    }
    const [qtde, setQtde] = useState(props.qtde || 6);
     const initialNumber = Array(qtde).fill(0)
    const [number, setNumber] = useState(initialNumber)
    return (
        <div>
            <h2>Mega</h2>
            <h3>{number.join('')}</h3>
            <div>
                <label>Qtde de numeros</label>
                <input min="6" max="17" type="number" value={qtde}
                onChange={(e) =>{ setQtde(+e.target.value)
                    setNumber(gerarNumero(+e.target.value))}}
                />
            </div>
            <button onClick={_ => setNumber(gerarNumero(qtde))}>
                gerar numero
            </button>

        </div>
    )
}