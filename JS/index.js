let arrayTareasIniciadas=[];
let arrayTareasFinalizadas=[];
let ultimo = 0;

let deployForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "visible";
}

let hideForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "hidden";
}

let AgregarTarea=(titulo)=> {
    arrayTareasIniciadas.push(titulo);
    let ul=document.getElementById("tareasIniciadas")
    ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=Marcar(id)> ${titulo}</input></li>`
    ultimo++;
}

let TareasFinalizadas=(titulo)=> {
    let ul=document.getElementById("tareasFinalizadas")
    ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=Marcar(id)> ${titulo}</input></li>`
    ultimo++;
}

let Marcar=(id)=>{
    let tareaMarcar=arrayTareasIniciadas.find((tarea)=>tarea.id===id)
    arrayTareasIniciadas.splice(id)
    arrayTareasFinalizadas.push(tareaMarcar)
}