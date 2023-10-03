//obteniendo los elementos de el HTML
let eyes=document.querySelector(".span")
let eyes2=document.querySelector(".bi-eye")
let password=document.querySelector(".password")
let iniciar=document.querySelector(".iniciar")
let usuario=document.querySelector("#usuario")
let flat=true

//obtiene lo usuarios desde la pagina de registrar 
let usuarios=JSON.parse(localStorage.getItem("usuario"))

//comprueba si el usuario y la clave es existente
iniciar.addEventListener("click",(e)=>{
    e.preventDefault()
    usuarios.forEach(element => {
        if(element.username === usuario.value && element.contraseña === password.value ){
            alert("usuario existente")
        }else{
            alert("usuario no existente")
        }   
    });
})


// cambia el input a tipo texto
eyes.addEventListener("click",()=>{
    
    if (flat){
        password.type="text"
        eyes2.classList.toggle("bi-eye")
        eyes2.classList.add("bi-eye-slash")
        flat=false
    }else{
        password.type="password"
        eyes2.classList.toggle("bi-eye-slash")
        eyes2.classList.add("bi-eye")
        flat=true
    }
})




