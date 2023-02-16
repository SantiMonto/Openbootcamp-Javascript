const boton = document.getElementById("btn");
console.log(boton);

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("click en el botón");
})

$(()=>{
    $("#btn").click(()=>{
        (console.log("Hola, estoy utilizando jQuery"));
    })
})