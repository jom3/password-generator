
const qty = document.getElementById('cantidad')
let pass = document.getElementById('contrasena')
const generarButton = document.getElementById('generar')
const mensaje = document.getElementById('mensaje')
const limpiarButton = document.getElementById('limpiar')
const textError = document.getElementById('textError')

const caracteresValidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?//`~"

generarButton.addEventListener('click',()=>{
  if( qty.value >= 8 && qty.value <= 15 ){
    let newPassword = ''
    for(let i = 0; parseInt(qty.value)>i; i++){
      const randomNumber = Math.floor(Math.random() * caracteresValidos.length);
      newPassword += caracteresValidos[randomNumber]
    }
    showMessage('28a745', 'Contraseña generada con éxito!', 2000)
    pass.value = newPassword
    const upper = newPassword.match(/[A-Z]/g) || [];
    const numbers = newPassword.match(/\d/g) || [];
    const characters = newPassword.match(/[!@#$%^&*()\-=+[\]{}|;:',.<>?/`~]/g) || [];

    if (upper.length < 1 || numbers.length < 1 || characters.length < 1) {
      showPasswordMessage('Contraseña débil');
    } else {
      showPasswordMessage('Contraseña fuerte');
    }
  }else{
    showMessage('f94449', 'Ingresar una cantidad entre 8 y 15 para generar la contraseña', 2000)
  }
})

limpiarButton.addEventListener('click',()=>{
  pass.value = ''
})

const showMessage = (color, message, time) => {
  mensaje.style.background = `#${color}`
  mensaje.innerHTML = `
  <span>${message}</span>
  `
  setTimeout(() => {
    mensaje.style.display = 'none'
  },time);
  mensaje.style.display = 'block'
}

const showPasswordMessage = (message) => {
  textError.innerHTML = `
        <span>${message}</span>
      `
      setTimeout(() => {
        textError.style.display = 'none'
      },2000);
      textError.style.display = 'block'
}
