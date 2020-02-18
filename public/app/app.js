import { handleStatus, log } from "./utils/promise-helper.js";
import "./utils/promise-helper.js";

document.querySelector("#myButton")
    .onclick = () => 
        fetch("/notas")
            .then(handleStatus)
            .then(notas => notas
                // transformando o array com uma unica dimensão
                .$flatMap(nota => nota.itens)
                // filtrando as notas
                .filter(item => item.codigo == '2143')
                // then para fazer a somatoria
                .reduce((total, item) => total+item.valor, 0)
            )
            // exibindo resultado
            .then(log)
            // detectando erros
            .catch(log)
    