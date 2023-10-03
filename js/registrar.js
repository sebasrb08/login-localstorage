let input =document.querySelectorAll(".input")
let formulario =document.querySelectorAll("form")
let registrar=document.querySelector(".registrar")

let usuarios=JSON.parse(localStorage.getItem("usuario"))
console.log(usuarios)

function contraseñas(){
    if (input[3].value == input[4].value){
        return true
    }else{
        alert("las contraseñas no son iguales")
        return false
    }
}


registrar.addEventListener("click",(e)=>{
    e.preventDefault()
    let confirmar= contraseñas()
    if(confirmar){
        if(usuarios){
    
            usuarios.push({
                nombre:input[0].value,
                email:input[1].value,
                username:input[2].value,
                contraseña:input[3].value,
            })
    
        }else{
    
            usuarios=[{
                nombre:input[0].value,
                email:input[1].value,
                username:input[2].value,
                contraseña:input[3].value,
            }]
    
        }
    }else{
        return
    }
        
    localStorage.setItem("usuario",JSON.stringify(usuarios))
})