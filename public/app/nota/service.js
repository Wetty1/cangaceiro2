import { handleStatus } from "./../utils/promise-helper.js";

const API = "http://localhost:3000/notas"

const sumItems = code => notas => notas
    // transformando o array com uma unica dimensão
    .$flatMap(nota => nota.itens)
    // filtrando as notas
    .filter(item = item.codigo == '2143')
    .reduce((total, item) => total + item.valor, 0)

export const notasService = {
    listAll () {
        return fetch(API)
            .then(handleStatus)
            .catch(error => {
                console.log(error)

                //retorna uma mensagem amigável
                return Promise.reject('Não foi possível obter as notas fiscais')
            })
    }, 
    sumItems(code) {
        return this.listAll().then(sumItems(code))
    }
}