window.onload = () => {

    // ELEMENTOS
    let username = document.querySelector("#username")
    let valiUser = document.querySelector("#valiuser")
    let email = document.querySelector("#email")
    let valiEmail = document.querySelector("#valiemail")
    let password = document.querySelector("#password")
    let valiPass = document.querySelector("#valipass")



    // USER
    username.onchange = () => {
        valiUser.style.display = 'none'
        
        if(username.value.length == 0 || username.value == null) {
            valiUser.style.display = 'block'
            valiUser.innerText = "Debe ingresar su nombre de usuario."
        }
    }


    // EMAIL
    email.onchange = () => {
        valiEmail.style.display = 'none'
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email.value.length == 0 || email.value == null){
            valiEmail.style.display = 'block'
            valiEmail.innerText = "Debe ingresar un mail."
        }
        else if(emailRegex.test(email.value) == false) {
            valiEmail.style.display = 'block'
            valiEmail.innerText = "Debe ingresar un mail valido."
        }
    }


    // CONTRASENA
    password.onchange = () => {
        valiPass.style.display = 'none'

        if(password.value.length == 0 || email.value == null) {
            valiPass.style.display = 'block'
            valiPass.innerText = "Debe ingresar su contrasena."
        }
    }

}