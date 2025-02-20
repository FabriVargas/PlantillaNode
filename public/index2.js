import { postUsers } from "./services/llamados.js";


const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const agregar = document.getElementById("agregar");

agregar.addEventListener("click", function () {

    postUsers(nombre.value,precio.value,stock.value);
})
