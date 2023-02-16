const nombre = "Santiago";
const apellido = "Montoya";
const yo = {
    nombre:nombre,
    apellido:apellido,
}

sessionStorage.setItem("yo",JSON.stringify(yo));
localStorage.setItem("yo",JSON.stringify(yo));
const fecha = new Date();
const miliSeg = fecha.getTime();
const adicionar = 1*60000;
document.cookie = `yo=${JSON.stringify(yo)};expires=` + new Date(miliSeg + adicionar).toUTCString();