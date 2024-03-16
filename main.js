//CAPTURO ID DEL DOM PARA INSETAR LAS CARDS DE PRODUCTOS
const carditem = document.getElementById("shopContent");
//CAPTURO ID DEL DOM PARA INSERTAR MODAL DEL CHANGUITO
const modalContainer = document.getElementById("modal-container");

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
    `;

    //INSERTO EN EL DOM CADA ITEM DEL SHOP
    carditem.append(content);

    //AGREGO DINÁMICAMENTE LOS BOTONES
    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al changuito";
    comprar.className = "boton-item";

    content.append(comprar);

    //LISTENER DEL BOTON PARA LA COMPRA DE LOS ITEMS
    comprar.addEventListener("click", () => {
        changuito.push({
            id: item.id,
            img: item.img,
            nombre: item.nombre,
            precio: item.precio,
        });
        console.log(changuito);
    });
});

//CREO UN DIV PARA EL FONDO SEMITRANSPARENTE
let overlay = document.createElement('div');
overlay.className = 'overlay';

//LISTENER DEL BOTON FLOTANTE DEL CARRITO
window.addEventListener("load", () => {
    let flotante = document.querySelector(".btn-comprar")
    flotante.addEventListener("click", (x) => {
        // Mostrar el fondo semitransparente
        document.body.appendChild(overlay);

        // Añadir clase para evitar scroll
        document.body.classList.add("modal-open");

        modalContainer.style.display = "block";
        x.preventDefault();


        //PROGRAMACION DEL MODAL DEL CHANGUITO

        //HEADER DEL CHANGUITO
        modalContainer.innerHTML = "";
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML = `
            <h2 class="header-changuito">Tu Changuito</h2>

        `;
        modalContainer.append(modalHeader);

        const modalX = document.createElement("h2");
        modalX.innerText = "Cerrar";
        modalX.className = "modal-header-x"

        modalX.addEventListener("click", () => {
            // Ocultar el fondo semitransparente
            document.body.removeChild(overlay);

            // Quitar clase para permitir scroll
            document.body.classList.remove("modal-open");

            modalContainer.style.display = "none";
        })

        modalContainer.append(modalX);


        //FIN HEADER DEL CHANGUITO

        //CUERPO DEL CHANGUITO, LO RECORREMOS Y GENERAMOS EL CUERPO HTML
        changuito.forEach((productos) => {
                let changuitoContent = document.createElement("div");
                changuitoContent.className = "changuito-main";
                changuitoContent.innerHTML = `
            
            <div class="changuito-item">
                <img src="${productos.img}" width="80px" alt="">
                <div class="changuito-item-detalles">
                    <span class="changuito-item-titulo">${productos.nombre}</span>
                    <div class="selector-cantidad">
                        <i class="fa-solid fa-minus restar-cantidad"></i>
                        <input type="text" value="1" class="changuito-item-cantidad" disabled>
                        <i class="fa-solid fa-plus sumar-cantidad"></i>
                    </div>
                    <span class="changuito-item-precio">$ ${productos.precio}
                    </span>                                
                </div>
                    
                <span class="btn-eliminar">
                    <i class="fa-solid fa-trash"></i>
                </span>
                                            
            </div>
            `;

                modalContainer.append(changuitoContent);
            })
            //FIN CUERPO DEL CHANGUITO

        //INICIO FOOTER DEL CHANGUITO
        const total = changuito.reduce((acc, el) => acc + el.precio, 0);
        const totalCompra = document.createElement("div");
        totalCompra.className = "changuito-total";
        totalCompra.innerHTML = `
        <div class="fila">
            <strong>Tu Total:</strong>
            <span class="changuito-precio-total">$${total}</span>
        </div>
        <button class="btn-pagar">Pagar <i class="fa-solid fa-bag-shopping"></i></button>
        `
        modalContainer.append(totalCompra);
    });
});