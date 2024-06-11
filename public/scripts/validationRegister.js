window.onload = () => {

    // ELEMENTOS
    let firstName = document.querySelector("#firstName")
    let valiFirst = document.querySelector("#valifirst")
    let lastName = document.querySelector("#lastName")
    let valiLast = document.querySelector("#valilast")
    let username = document.querySelector("#username")
    let valiUser = document.querySelector("#valiuser")
    let avatar = document.querySelector("#avatar")
    let valiAvatar = document.querySelector("#valiava")
    let email = document.querySelector("#email")
    let valiEmail = document.querySelector("#valiemail")
    let password = document.querySelector("#password")
    let valiPass = document.querySelector("#valipass")
    let repass = document.querySelector("#confirm-password")
    let valiRepass = document.querySelector("#valirepass")


    // NOMBRE
    firstName.onchange = () => {
        valiFirst.style.display = 'none'
        
        if(firstName.value.length < 2) {
            valiFirst.style.display = 'block'
            valiFirst.innerText = "El nombre debe tener como minimo 2 caracteres."
        }
    }


    // APELLIDO
    lastName.onchange = () => {
        valiLast.style.display = 'none'
        
        if(lastName.value.length < 2) {
            valiLast.style.display = 'block'
            valiLast.innerText = "El apellido debe tener como minimo 2 caracteres."
        }
    }


    // USER
    username.onchange = () => {
        valiUser.style.display = 'none'
        
        if(username.value.length < 5 || username.value.length > 15) {
            valiUser.style.display = 'block'
            valiUser.innerText = "El nombre de usuario debe tener entre 5 y 15 caracteres."
        }
    }

    // AVATAR
    avatar.onchange = () => {
        valiAvatar.style.display = 'none'
        let file = avatar.value
        let ext = file.substring(file.lastIndexOf('.'),file.length)
        if(avatar.getAttribute('accept').split(',').indexOf(ext) < 0) {
            valiAvatar.style.display = 'block'
            valiAvatar.innerText = 'La imagen debe ser formato PNG, JPEG, JPG o GIF.'
        }
    }


    // EMAIL
    email.onchange = () => {
        valiEmail.style.display = 'none'
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(email.value) == false) {
            valiEmail.style.display = 'block'
            valiEmail.innerText = "Debe ingresar un mail valido."
        }
    }


    // CONTRASENA
    password.onchange = () => {
        valiPass.style.display = 'none'

        if(password.value.length < 8 || password.value.length > 25) {
            valiPass.style.display = 'block'
            valiPass.innerText = "La contrasena debe tener entre 8 y 25 caracteres."
        }
    }


    // CONFIRMAR CONTRASENA
    repass.onchange = () => {
        valiRepass.style.display = 'none'

        if(password.value !== repass.value) {
            valiRepass.style.display = 'block'
            valiRepass.innerText = "Las contrasenas no coinciden."
        }
    }



}