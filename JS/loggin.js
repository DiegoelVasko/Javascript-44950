class user {
  constructor(mail, password) {
    this.mail = mail.toLowerCase();
    this.password = password;
  }
}
const usuario = [];
usuario.push(new user("javascript1@coderhouse.com", 44950))
usuario.push(new user("javascript2@coderhouse.com", 44950))
usuario.push(new user("javascript3@coderhouse.com", 44950))
usuario.push(new user("javascript4@coderhouse.com", 44950))
usuario.push(new user("javascript5@coderhouse.com", 44950))

let loggin = document.getElementById("loggin")


loggin.addEventListener('click', async () => {
  const email  = await Swal.fire({
    background: '#414141cc',
    color: '#f4772a',
    title: 'Ingrese su Correo Electrónico ',
    input: 'email',
    inputPlaceholder: 'javascript1@coderhouse.com',
  })


  const usuarioExistente = usuario.find(u => u.mail === email.value);
  
  
  if (!usuarioExistente) {
    await Swal.fire({
      background: '#414141cc',
      color: '#f4772a',
      icon: 'error',
      title: 'Usuario no registrado',
    })
  } else {
    const  password  = await Swal.fire({
      background: '#414141cc',
      color: '#f4772a',
      title: 'Ingrese su Contraseña',
      input: 'password',
      inputPlaceholder: '44950',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    })

    if (password.value != usuarioExistente.password) {
     await Swal.fire({
        background: '#414141cc',
        color: '#f4772a',
        icon: 'warning',
        title: 'Contraseña Incorrecta',
        text: 'Intente de nuevo',
      })
    } else {
      await Swal.fire({
        background: '#414141cc',
        color: '#f4772a',
        icon: 'success',
        title: `Ingreso Exitoso!`
      })
    }
  }

}
)








