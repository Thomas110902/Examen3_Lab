import { formulario } from "./componentes/formulario/formulario.js";


    let section = document.createElement('section');

    section.appendChild(formulario());

    
    document.body.appendChild(section);