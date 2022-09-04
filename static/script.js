
//Leemos el formulario con los datos
create = () => {
    const form = document.getElementById('formulario');
    let entrada = {
        'nombre': form['nombre'].value,
        'email': form['email'].value,
        'phone': form['phone'].value,
        'genero': form['inputState'].value,
    }
    //Simple check de todo vacio
    if(entrada.nombre=="" || entrada.email=="" || entrada.phone==""){
        alert("Ingrese nombre, email y telefono ");
        reset();
        location.reload()    
        return 0;
    }

    //aca hay dos casos.. se actualiza o se crea un retgistrpo nuevo
    if(sessionStorage.getItem("update")=="true"){
        let guardados = localStorage.getItem("data");
        let guardadosParseado = JSON.parse(guardados);
        let aux=guardadosParseado[sessionStorage.getItem("id")]
        aux.nombre=entrada.nombre;
        aux.email=entrada.email;
        aux.phone=entrada.phone;
        aux.genero=entrada.genero;
        guardadosParseado[sessionStorage.getItem("id")]=aux;
        localStorage.setItem("data", JSON.stringify(guardadosParseado));
        sessionStorage.setItem("update",false)
        reset();
        location.reload()
        return 0;
    }
    else{
        guardarData(entrada)
        reset();
        location.reload()
        return 0;
    }
    
    

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
    sessionStorage.setItem("update",false)

}
//Limpia el formulario
reset = () => {

    document.getElementById('formulario').reset();
    sessionStorage.setItem("update",false)

}

// //Carga
showAll = () => {
    sessionStorage.setItem("update",false)
    //Obtengo los elementos del local storate
    let guardados = localStorage.getItem("data");
    if (guardados) {
        //los parseo
        let datosParseados = JSON.parse(guardados);
        console.log(datosParseados);
        for (let i = 0; i < datosParseados.length; i++) {
            document.getElementById("aca").innerHTML += "<tr id=" + i + "><th>" + String(i + 1) +
             "</th><td>" + datosParseados[i].nombre + "</td><td>" + datosParseados[i].email +
              "</td><td>" + datosParseados[i].phone + "</td><td>" + datosParseados[i].genero +
              "</td><td><button class=" + "'" + "buttonTable" + "'" + " id=" + i + " onclick=" +
               "'" + "borra(this.id)" + "'" + ">Delete</button><button "+"id=" + "'" + i + "'" +" onclick=" + "'" + "update(this.id)" + "'" + ">" +
                "Actualizar</button></td></tr>"
        }
    }
}

function borra(id) {
    console.log(id);
    //Obtengo los datos desde el storage
    let guardados = localStorage.getItem("data");
    if (guardados) {
        let datosParseado = JSON.parse(guardados);
        arr = datosParseado.filter(item => item !== datosParseado[parseInt(id)])
        localStorage.setItem("data", JSON.stringify(arr));        
    }
    sessionStorage.setItem("update",false)
    location.reload()

}


update=(id)=>{
    //Obtengo los datos desde el storage
    let guardados = localStorage.getItem("data");
    if (guardados) {
        let datosParseado = JSON.parse(guardados);
        //busco el elemento con el id
        const form = document.getElementById('formulario');        
        form['nombre'].value=datosParseado[id].nombre;
        form['email'].value=datosParseado[id].email;
        form['phone'].value=datosParseado[id].phone;
        form['inputState'].value=datosParseado[id].genero; 
        sessionStorage.setItem("id",id)
        sessionStorage.setItem("update",true)
        const boton = document.getElementById('botonCambia');   
        boton.innerHTML="Actualizar";
    }
  
}


showAll()


