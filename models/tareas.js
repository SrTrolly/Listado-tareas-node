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

    borrarTarea(id=""){
        if(this._listado[id]){
            delete this._listado[id];
        }
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

    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea,i=0)=>{
            let contador=`${i+1}`.green;
            const {descripcion,completadoEn}=tarea;
            const estado=(completadoEn)?"La tarea esta completada".green:"La tarea esta incompleta".red; 
            console.log(`${contador} ${descripcion} :: ${estado}`);
        })
    }

    


    listarPendientesCompletadas(completadas=true){
        console.log();
        let contador=0;
        this.listadoArr.forEach(tarea=>{
            const {descripcion,completadoEn}=tarea;
            const estado=(completadoEn)?"La tarea esta completada".green:"La tarea esta incompleta".red; 
            if(completadas){
                if(completadoEn){
                    contador+=1;
                    console.log(`${contador.toString().green} ${descripcion} :: ${completadoEn}`)
                }
            } else {
                if(!completadoEn){
                    contador+=1;
                    console.log(`${contador.toString().green} ${descripcion} :: ${completadoEn}`)
                }
            }
        })
    }
}


module.exports=Tareas;