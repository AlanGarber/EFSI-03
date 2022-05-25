
let arrayTareas=[];
let ultimo = 0;

let deployForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "visible";
}

let hideForm=()=>{
    document.getElementById("formAgregarTareas").style.visibility = "hidden";
}

let AgregarTarea=(titulo, descripcion)=> {
    let tarea={
        id: ultimo,
        titulo:titulo,
        descripcion: descripcion,
        status:false
    }
    arrayTareas.push(tarea);
    let ul=document.getElementById("tareas");
        ul.innerHTML+=`<div class="ok">
        <li><input type="checkbox" id="${ultimo}" onclick=Marcar(id)><h10> ${titulo} </h10><i class="fa-solid fa-eye fa-2xs" data-toggle="modal" data-target="#texto" onclick=Modal(${ultimo});></i></input></li>
        </div>`
    ultimo++;
}

let Marcar=(id)=>{
    arrayTareas[id].status=true;
    Refrescar();
}

let Refrescar=()=>{
    let ul=document.getElementById("tareas")
    document.getElementById("tareas").innerHTML = "";
    for(let i = 0; i<arrayTareas.length; i++){
        if(arrayTareas[i].status){
            ul.innerHTML+=`<div class="lista">
            <li><input type="checkbox" id="${arrayTareas[i].id}" checked disabled="disabled"> <h10>${arrayTareas[i].titulo}</h10></input><i class="fa-solid fa-eye fa-2xs" data-toggle="modal" data-target="#texto onclick=Modal(${ultimo});></i> <i class="fa-solid fa-trash-can"></i></li>
            </div>`
        }else{
            ul.innerHTML+=`<div class="ok">
            <li><input type="checkbox" id="${arrayTareas[i].id}" onclick=Marcar(id); Modal(id)> <h10>${arrayTareas[i].titulo}</h10></input><i class="fa-solid fa-eye fa-2xs" data-toggle="modal" data-target="#texto onclick=Modal(${ultimo});></i> <i class="fa-solid fa-trash-can"></i></li>
            </div>`
        }
        
    }
}

let Modal=(id)=>{
    document.getElementById("areaModalDescripcion").innerHTML=`<div class="modal fade" id="texto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modals">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Descripcion tarea</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control" id="tituloTarea" placeholder="${arrayTareas[id].titulo}" readonly><br>
                <textarea name="textarea" rows="5" cols="25" class="form-control" id="descripcionTarea" placeholder="${arrayTareas[id].descripcion}"></textarea>
            </div>
            <div class="modal-footer">
            <button type="button" data-dismiss="modal" class="btn btn-primary">Cerrar</button>
            </div>
        </div>
    </div>
</div>`
}

let borrarTarea=(id)=>{

}