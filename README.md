# Listado-tareas-node
Una app de consola que sirve para agregar, eliminar y listar las tareas del usuario. Esta app fue construida con node utilizando librerias de inquirer, colors y uuid

Despliegue: usando la consola, se inicia con el comando node app.js (Estar en la carpeta principal) . La version de node utiliza es la version v16.14.0 

Menu :
Se despliegaran las siguientes opciones al momento de iniciar la app

1. Crear tarea: Sirve para crear una tarea, añadiendo al archivo json que sirve como base de datos local, la fecha y la descripcion de la tarea. Ademas al obejto se le
   agrega su id, para poder controlar ese objeto.
2. Listar tarea: Listara las tareas guardas con la primera opcion. Estas tareas tendran uno de estos dos mensajes, el completado con el color verde o el rojo que esta incompleta.
3. Listar tareas completadas: Listara las tareas que estem completas (se podrar controlar con el boton 5).
4. Listar tareas incompletas: Listara las tareas incompletas (se podrar controlar con el boton 5).
5. Completar area: Listara todas las tarea que esten en la base y saldran con la opcion si esta completa o no. Esta opcion se podrar confirmar con el espacio para luego poder confirmar
6. Borrar tarea: Borrara la tarea seleccionada.
0. Salir: Se saldra del sistema         
