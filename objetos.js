const tareas = [];
let sacar = "";

function ingresarTarea() {
    let ingresar;
    do {
        ingresar = prompt("Ingresar una tarea").toUpperCase();
    } while (ingresar === "" || ingresar === null);
    tareas.push(ingresar);
    let conf = confirm(tareas.join("\n"));
    if (conf === true) {
        nuevaLista();
    }
}

function nuevaLista() {
    let newList;

    do {
        newList = parseInt(
            prompt(`1)Ingresar nueva tarea
2)Visualizar tareas
3)Eliminar tarea`)
        );
        switch (newList) {
            case 1:
                ingresarTarea();
                break;
            case 2:
                tareas.forEach((el) => confirm(el));
                nuevaLista();
                break;
            case 3:
                sacar = prompt(`Cual deseas eliminar?
${tareas.join("\n")} `).toUpperCase();
                eliminar(sacar);
                nuevaLista();
                break;
        }
    } while (isNaN(newList) || newList === "" || (newList != 1 && newList != 2 && newList != 3));
}
const eliminar = (el) => {
    let index = tareas.indexOf(el);
    if (index != -1) {
        tareas.splice(index, 1);
    }
};

ingresarTarea();
nuevaLista();
eliminar();