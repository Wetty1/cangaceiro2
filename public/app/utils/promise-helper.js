/* Verifica se a resposta é dada corretamente, caso não, envia a mensagem de erro */
export const handleStatus = res => res.ok ? res.json() : res.reject(res.statusText)

/* Exibe o parametro e depois o envia */
export const log = param => {
    console.log(param)
    return param
}

if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        return this.map(cb).reduce((destArray, array) => 
            destArray.concat(array), [])
    }
}