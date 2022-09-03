//Leemos el formulario con los datos
create = () => {
    const form = document.getElementById('formulario');
    let entrada = {
        nombre: form['nombre'].value,
        'email': form['email'].value,
        'telefono': form['phone'].value,
        'genero': form['inputState'].value,
    }
    localStorage.setItem(String(localStorage.length+1),JSON.stringify(entrada));
    reset();    
    return entrada;
}
//Limpia el formulario
reset = () => {
    document.getElementById('formulario').reset();
}

//Carga
showAll=()=>{

    
    let a=document.getElementsByTagName("table")
    console.log(a)
    for(let i =1;i<=localStorage.length;i++)
    {
        let objetoJson=JSON.parse(localStorage.getItem(String(i)))
        
       



    }
}



showAll()

