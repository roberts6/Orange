document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', handleSubmit);
}
                         )
function validarCorreoElectronico(email) {
// Expresión regular para validar el correo electrónico
const expresionRegularCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Retorna true si el correo electrónico es válido, de lo contrario retorna false
return expresionRegularCorreoElectronico.test(email);
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const nombre = formData.get("nombre");
  const correo = formData.get("correo");
  const telefono = formData.get("telefono");
  const musica = formData.get("musica");
  const gorra = formData.get("gorra");
  const color = formData.get("color");
  const insignia = formData.get("insignia");
  const apellido = formData.get("apellido");
  const estilo = formData.get("estilo");
  
  console.log("nombre: ",nombre)
  console.log("correo: ",correo)
  console.log("telefono: ",telefono)
  console.log("musica: ",musica)
  console.log("gorra: ",gorra)
  console.log("color: ",color)
  console.log("insignia: ",insignia)
  console.log("apellido: ",apellido)
  

// Validar los campos del formulario
if (nombre === "" || 
validarCorreoElectronico(email) !== true ||
telefono === "" ||
correo === "" ||
musica === "" ||
gorra === "" ||
color === "" ||
!insignia ||
apellido === "") {
 alert("Por favor completa todos los campos.");
return false; 
}  
  e.target.submit();
}
