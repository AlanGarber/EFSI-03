let arrayTareas=[];
let ultimo = 0;

let deployForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "visible";
}

let hideForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "hidden";
}

let AgregarTarea=(titulo)=> {
    let tarea={
        id: ultimo,
        titulo:titulo,
        status:false
    }
    arrayTareas.push(tarea);
    let ul=document.getElementById("tareas")
        ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=Marcar(id)> ${titulo}</input></li>`
    ultimo++;
}

let TareasFinalizadas=(titulo)=> {
    let ul=document.getElementById("tareasFinalizadas")
    ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=Marcar(${ultimo})> ${titulo}</input></li>`
    ultimo++;
}

let Marcar=(id)=>{
    console.log(id)
    arrayTareas[id].status=true;
    Refrescar();
}

let Refrescar=()=>{
    let ul=document.getElementById("tareas")
    document.getElementById("tareas").innerHTML = "";
    for(let i = 0; i<arrayTareas.length; i++){
        if(arrayTareas[i].status){
            ul.innerHTML+=`<li><input type="checkbox" id="${arrayTareas[i].id}" checked disabled="disabled"> <h10 style="color:red">${arrayTareas[i].titulo}</h10></input></li>`
            
        }else{
            ul.innerHTML+=`<li><input type="checkbox" id="${arrayTareas[i].id}" onclick=Marcar(id)> <h10>${arrayTareas[i].titulo}</h10></input></li>`
        }
    }
}