//CAPTURO ID DEL DOM PARA INSETAR LAS CARDS DE PRODUCTOS
const carditem = document.getElementById("shopContent")

//CREO EL CHANGO DONDE VOY A GUARDAR TODO
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