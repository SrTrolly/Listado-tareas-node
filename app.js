const { guardarDB, leerDB } = require("./helper/guardarArchivo");
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheck } = require("./helper/inquirer");
const Tareas = require("./models/tareas");


require("colors");


const main= async()=>{
    

    const tareas= new Tareas();
     
    let opt="";

    const tareasDB= leerDB();

    if(tareasDB){
        tareas.cargarTarea(tareasDB);
        
    }

    

    do{
        //Imprimir el menu
        opt= await inquirerMenu();
        
        switch(opt){
            case "1": 
            //Crear la tarea
            const descripcion= await leerInput("Descripcion de la tarea: ")
            tareas.crearTarea(descripcion);
            break;

            case "2":
                //Listar Tareas
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto();

            break;

            case "3":
                //Listar tareas completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case "4":
                //Listar tares incompletas
                tareas.listarPendientesCompletadas(false);
            break;

            case "5":
                //Completado o pendiente
                const ids= await mostrarListadoCheck(tareas.listadoArr);
                tareas.cambioCompletadas(ids);
            break;

            case "6":
                //Borrar tareas 
                const id= await listadoTareasBorrar(tareas.listadoArr);
                if(id!=="0"){
                    const ok= await confirmar("¿Esta seguro?");
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log("Tarrea borrada");
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();
        
        
    } while(opt !=="0")

    // pausa();
}

main();