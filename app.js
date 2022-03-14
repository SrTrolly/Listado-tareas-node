const { guardarDB } = require("./helper/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helper/inquirer");
const Tareas = require("./models/tareas");


require("colors");


const main= async()=>{
    

    const tareas= new Tareas();
     
    let opt="";
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
                console.log(tareas.listadoArr);

            break;
        }

        // guardarDB(tareas.listadoArr);
        await pausa();
        
        
    } while(opt !=="0")

    // pausa();
}

main();