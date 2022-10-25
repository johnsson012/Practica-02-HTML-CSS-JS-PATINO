function guardar(){
    
    const cedula=document.getElementById("cedula");
    const nombre=document.getElementById("nombre");
    const apellido=document.getElementById("apellido");
    const edad=document.getElementById("edad");
    const telefono=document.getElementById("telefono");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    
    cedula.value="";
    nombre.value="";
    apellido.value="";
    edad.value="";
    telefono.value="";
    email.value="";
    password.value="";
    
    validar();
   
    window.alert('Usuario Agregado');
};
 

/**
 * Funcion para añadir datos en la tabla
 */
function agregarFila(cedula,nombre,apellido,edad,telefono,email,password) {
    // añadimos una persona a la tabla crando el tr, td's 
    const tr=document.createElement("tr");
 

    const tdCedula=document.createElement("td");
    let txt=document.createTextNode(cedula);
    tdCedula.appendChild(txt);
   

    const tdNombre=document.createElement("td");
    txt=document.createTextNode(nombre);
    tdNombre.appendChild(txt);
    

    const tdApellido=document.createElement("td");
    txt=document.createTextNode(apellido);
    tdApellido.appendChild(txt);
    
 
    const tdEdad=document.createElement("td");
    txt=document.createTextNode(edad);
    tdEdad.appendChild(txt);
    

    const tdTelefono=document.createElement("td");
    txt=document.createTextNode(telefono);
    tdTelefono.appendChild(txt);
    

    const tdEmail=document.createElement("td");
    txt=document.createTextNode(email);
    tdEmail.appendChild(txt);
    

    const tdPassword=document.createElement("td");
    txt=document.createTextNode(password);
    
    tdPassword.appendChild(txt);
    

    tr.appendChild(tdCedula);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdEdad);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdEmail);
    //tr.appendChild(tdPassword);
   
 
    const tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);
    
    
}
function init() {
 
  let a = document.getElementById("a");
  a.setAttribute("href", "PaginaSecundaria.html");
  let aTexto = document.createTextNode("Pagina Secundaria");
  a.appendChild(aTexto);
   
  document.body.appendChild(a);

}
function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('mail');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){

		alert('Email is valid, continue with form submission');
    
		return true;
	}else{
    
		alert('Email is invalid, skip form submission');
		return false;
	}
} 

function validar() {
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }
      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
        window.alert('usuario AGRGADO');
        agregarFila(cedula.value,nombre.value,apellido.value, edad.value,telefono.value,email.value,password.value);
        console.log("Cedula Valida");
       

      }else{
        //document.getElementById("salida").innerHTML = ("Cedula Inválida");
        window.alert('Cedula Inválida');
       /*window.addEventListener("load",function(){ 
            document.getElementById("viewAlert").addEventListener("click",function(){
                alert("Como vas");
            })
        })*/
      }
    }
   }

