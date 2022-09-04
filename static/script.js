
//Leemos el formulario con los datos
create = () => {
    const form = document.getElementById('formulario');
    let entrada = {
        'nombre': form['nombre'].value,
        'descripcion': form['descripcion'].value,
    }
    //localStorage.setItem(String(localStorage.length+1),JSON.stringify(entrada));
    guardarData(entrada)
    reset();
    location.reload()
    return entrada;
}

guardarData = (entrada) => {
    //Revisamos si en el local storage tenemos datos
    let guardados = localStorage.getItem("data");
    if (!guardados) {
        localStorage.setItem("data", JSON.stringify([entrada]));

    }
    else {
        let guardadosParseado = JSON.parse(guardados)
        guardadosParseado.push(entrada)
        localStorage.setItem("data", JSON.stringify(guardadosParseado));
    }

}
//Limpia el formulario
reset = () => {
    document.getElementById('formulario').reset();
}

// //Carga
showAll = () => {

    //Obtengo los elementos del local storate
    let guardados = localStorage.getItem("data");
    if (guardados) {
        //los parseo
        let datosParseados = JSON.parse(guardados);
        console.log(datosParseados);
        for (let i = 0; i < datosParseados.length; i++) {
            document.getElementById("aca").innerHTML += "<tr id=" + i + "><th>" + String(i + 1) + "</th><td>" + datosParseados[i].nombre + "</td><td>" + datosParseados[i].descripcion + "</td><td><button id=" + i + " onclick=" + "'" + "borra(this.id)" + "'" + ">Delete</button><button>Actualizar</button></td></tr>"
        }
    }
}

function borra(id){
    console.log(id);
    //Obtengo los datos desde el storage
    let guardados = localStorage.getItem("data");
    if(guardados){
        let datosParseado = JSON.parse(guardados);
        arr = datosParseado.filter(item => item !== datosParseado[parseInt(id)])
        console.log(datosParseado)
        localStorage.setItem("data", JSON.stringify(arr));
    }
    location.reload()

}   

showAll()


