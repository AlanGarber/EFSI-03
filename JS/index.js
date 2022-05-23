let arrayTareasIniciadas=[];
let arrayTareasFinalizadas=[];

let deployForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "visible";
}

let hideForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "hidden";
}

let AgregarTarea=(titulo)=> {

    arrayTareasIniciadas.push(titulo);
        let task = titulo
        let ul=document.getElementById("tareasIniciadas")
        ul.innerHTML+=`<li><input type="checkbox"> ${task}</input></li>`

}