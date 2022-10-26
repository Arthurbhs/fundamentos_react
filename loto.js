function gerarNumero(qtde){
    return [3, 13, 43, 51, 60, 2, 90]

}
function gerarNumeroNaoContido(min, max, array){
    const aleatorio = parseInt(match.random()* (max + 1 - min)) + min
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
    
    return number
}


