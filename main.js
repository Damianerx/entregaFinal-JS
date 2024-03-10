//CAPTURO ID DEL DOM PARA INSETAR LAS CARDS DE PRODUCTOS
const carditem = document.getElementById("shopContent")

//ARRAY DE PRODUCTOS
const productos = [{
        id: 1,
        nombre: "almohada de la abuela",
        precio: 1000,
        img: "./assets/img/almohada.png"
    },
    {
        id: 2,
        nombre: "carretilla",
        precio: 750,
        img: "./assets/img/carretilla.png"
    },
    {
        id: 3,
        nombre: "disco 80's",
        precio: 500,
        img: "./assets/img/disco.png"
    },
    {
        id: 4,
        nombre: "liber Libro",
        precio: 250,
        img: "./assets/img/libro.png"
    },
    {
        id: 5,
        nombre: "Termo Lumilagro",
        precio: 250,
        img: "./assets/img/lumi.png"
    },
    {
        id: 6,
        nombre: "Papagayo",
        precio: 250,
        img: "./assets/img/papagayo.png"
    },
    {
        id: 7,
        nombre: "Patito",
        precio: 250,
        img: "./assets/img/patito.png"
    },
    {
        id: 8,
        nombre: "Peluca Wolverine",
        precio: 250,
        img: "./assets/img/primo.png"
    },
    {
        id: 9,
        nombre: "Sacacorchos",
        precio: 250,
        img: "./assets/img/sacacorchos.png"
    },
];

//CREO EL CHANGO DONDE
let changuito = [];

//RECORRO EL ARRAY DE PRODUCTOS Y CREO UN DIV CON CADA ITEM
productos.forEach((item) => {
    let content = document.createElement("div");
    //LE PONGO LA PROPIEDAD CLASS PARA MAQUILLARLO LUEGO CON CSS
    content.className = "card-item"
    content.innerHTML = `
    <span class="titulo-item">${item.nombre}</span>
    <img src="${item.img}" alt="" class="img-item">
    <span class="precio-item">$${item.precio}</span>
    <button class="boton-item">Agregar al changuito</button>
    `;

    //INSERTO EN EL DOM CADA ITEM DEL SHOP
    carditem.append(content);
});