let eyes=document.querySelector(".span")
let eyes2=document.querySelector(".bi-eye")
let password=document.querySelector(".password")
let iniciar=document.querySelector(".iniciar")
let usuario=document.querySelector("#usuario")

let flat=true

let usuarios=JSON.parse(localStorage.getItem("usuario"))
function confirmacion(){

    usuarios.forEach(element => {
        console.log(element.username)        
    });
    // if(usuarios.username == usuario.value && usuarios.password==){

    // }   
}

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



iniciar.addEventListener("click",confirmacion())

