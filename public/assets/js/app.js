//Funcion para desplazar arriba
const desplazarArriba = document.querySelector("#desplazar-arriba");
desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});     

//MOSTRAR MENU AL HACER CLIC EN LA HAMBURGUESA
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//CERRAR EL MENU DE LA HAMBURGUESA CUANDO SE HACE CLIC EN UN ENLACE
const navlink = document.querySelectorAll(".nav-link");

navlink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);