const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    checkInputs();
});

function checkInputs() {
  //GET VALUES FROM THE INPUTS
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

    if(usernameValue === '') {
        //show error
        setErrorFor(username, 'El campo no puede estar vacío');
    } else if(!isUsername(usernameValue)) {
        setErrorFor(username, 'El nombre de usuario no puede contener caracteres especiales como por ejemplo "*"');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'El campo no puede estar vacío');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'El email es inválido, quizá no contiene un "@" o un ".com/org"');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'El campo no puede estar vacío');
    } else if(!isPassword(passwordValue)) {
        setErrorFor(password, 'Recuerde que la contraseña debe contener mínimo 8 caracteres y máximo 12');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'El campo no puede estar vacío');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'La contraseña no coincide');
    }else {
        setSuccessFor(password2);
    }
}

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        //add error message inside small
        small.innerText = message;

        //add error class
        formControl.className = 'form-control error'
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isUsername(username) {
        return /^[a-zA-Z0-9\_\-]{4,16}$/.test(username);
    }

    function isPassword(password) {
        return /^[a-zA-Z0-9_.+-]{8,12}$/.test(password);
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    }

    const visibilityBtn = document.getElementById('visibilityBtn');
    

    function toggleVisibility() {
        const passwordInput = document.getElementById('password')
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            visibilityBtn.classList.add("hide")
        } else {
            passwordInput.type = "password"
            visibilityBtn.classList.remove("hide")
        }

        const passwordInput2 = document.getElementById('password2')
        if (passwordInput2.type === "password") {
            passwordInput2.type = "text";
            visibilityBtn.classList.add("hide")
        } else {
            passwordInput2.type = "password"
            visibilityBtn.classList.remove("hide")
        }
    }

    visibilityBtn.addEventListener("click", toggleVisibility)
