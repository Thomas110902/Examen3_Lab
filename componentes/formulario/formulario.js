export function formulario() {
    let div = document.createElement("div");
    div.className = "cuadro";
    div.id = "Seccion";
  
    let tareas = document.createElement("h2");
    tareas.className = "tareas";
  
    let inputProducto = document.createElement("input");
    inputProducto.type = "text";
  
    let btn = document.createElement("button");
    btn.textContent = "Agregar";
  
    let lista = document.createElement("ul");
    lista.className = "listado";

    div.appendChild(tareas);

    div.appendChild(inputProducto);
   
    div.appendChild(btn);
    div.appendChild(lista);
    
    return div;
    }