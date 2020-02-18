import { handleStatus, log } from "./utils/promise-helper.js";
import "./utils/promise-helper.js";
import { notasService as services } from "./nota/service.js";



document.querySelector("#myButton")
    .onclick = () => 
        services
            .sumItems('2143')
            .then(log)
            .catch(log)
    