const Tarea=require("./tarea");

class Tareas{
    _listado={};

    constructor(){
        this._listado={};
    }

    get listadoArr(){
        const listado=[];
        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    crearTarea (descripcion=""){
        const tarea= new Tarea(descripcion);
        this._listado[tarea.id]=tarea;
    };

    cargarTarea(tareas=[]){
        tareas.forEach(tarea=>{
            this._listado[tarea.id]=tarea
        })
    };
}


module.exports=Tareas;