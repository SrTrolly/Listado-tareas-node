const inquirer = require("inquirer");
require("colors");

const preguntas=[
    {
        type:"list",
        name:"opcion",
        message:"¿Que desea hacer?",
        choices:[
            {
                value:"1",
                name:`${"1".green}.Crear tarea`
            },
            {
                value:"2",
                name:`${"2".green}.Listar tareas`
            },
            {
                value:"3",
                name:`${"3".green}.Listar tareas completadas`
            },
            {
                value:"4",
                name:`${"4".green}.Listar tareas pendientes`
            },
            {
                value:"5",
                name:`${"5".green}.Completar Tareas`
            },
            {
                value:"6",
                name:`${"6".green}.Borrar tarea`
            },
            {
                value:"0",
                name:`${"0".green}.Salir del menu`
            }
        ]
    }
]




const inquirerMenu=async()=>{
    console.clear();
    console.log("======================".green);
    console.log("Selecciona una opcion".white);
    console.log("======================\n".green);

    const {opcion}=await inquirer.prompt(preguntas);

    return opcion;
}

const pausa=async()=>{

    const question=[
        {
            type:"input",
            name:"enter",
            message:`Presione ${"enter".green} para continuar`
        }
    ]
    console.log("\n");
    await inquirer.prompt(question)
}

const leerInput= async(mensaje="")=>{
    const question=[
        {
            type:"input",
            name:"leerInput",
            message:mensaje,
            validate(value){
                if(value.length===0){
                    return "Por favor ingrese un valor"
                }
                return true;
            }
        }
    ];

    const {leerInput}= await inquirer.prompt(question);
    return leerInput;
}

const listadoTareasBorrar= async(tareas=[])=>{
    const choices=tareas.map((tarea,i)=>{
        const contador=`${i+1}`.green;
        return{
            value:tarea.id,
            name:`${contador} ${tarea.descripcion}`
        }
    });

    const preguntas=[
        {
            type:"list",
            name:"id",
            message:"Borrar",
            choices:choices
        }
    ]

    const {id}=await inquirer.prompt(preguntas);
    return id;
    
}

const confirmar=(mensaje) =>{
    const question=[
        {
            type:"confirm",
            name:"ok"
        }
    ]
}


module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
}