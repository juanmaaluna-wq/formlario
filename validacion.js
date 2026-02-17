let usuario = document.getElementById("usuario")
let mensaje = document.getElementById("mensaje")
let password = document.getElementById("password")
let mensajePassword = document.createElement("div")
mensajePassword.id = "mensajePassword"
password.parentElement.appendChild(mensajePassword)

usuario.addEventListener("input",function(evento){
   this.value = this.value.toLowerCase()
   if(/[^a-z]/g.test(this.value)){
      mensaje.textContent ="Esta tratando de ingresar un valor incorrecto"
      this.style.borderColor = "red"
      this.borderColor = "2px solid"
   }
   else if (this.value){
      mensaje.textContent = "usuario correcto"
   }
   else{
      mensaje.textContent ="campo requerido"
       this.style.borderColor = "green"
       this.borderColor = "2px solid"
   }
   this.value = this.value.replace(/[^a-z]/g,"")

})

// Validación de contraseña
password.addEventListener("input", function(evento) {
   let longitud = this.value.length;
   
   if(longitud === 0) {
      mensajePassword.textContent = "Campo requerido";
      mensajePassword.style.color = "orange";
      this.style.borderColor = "orange";
   }
   else if(longitud < 10) {
      mensajePassword.textContent = "✗ Contraseña inválida (mínimo 10 caracteres)";
      mensajePassword.style.color = "red";
      this.style.borderColor = "red";
      this.style.borderWidth = "2px";
   }
   else {
      mensajePassword.textContent = "✓ Contraseña válida";
      mensajePassword.style.color = "green";
      this.style.borderColor = "green";
      this.style.borderWidth = "2px";
   }
})