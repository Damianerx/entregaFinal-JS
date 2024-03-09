const productos = [{
        nombre: "coca",
        precio: 1000,
    },
    {
        nombre: "pesi",
        precio: 750,
    },
    {
        nombre: "manaos",
        precio: 500,
    },
    {
        nombre: "naranpol",
        precio: 250,
    },
];

let changuito = [];

let seleccion = prompt("Quiere comprar algo señora? (si/no)");

while (seleccion != "si" && seleccion != "no") {
    alert("debe responder si o no");
    seleccion = prompt("Quiere comprar algo señora?");
}

if (seleccion == "si") {
    alert("a constinuación, nuestras bebidas");
    let todosLosProductos = productos.map((producto) =>
        producto.nombre + " $" + producto.precio);
    alert(todosLosProductos.join("\n"));
} else {
    alert("con todo respeto, hágasela plantar señora.")
}

while (seleccion != "no") {
    let producto = prompt("que va a llevar para la previa?");
    let precio = 0;

    if (producto == "coca" ||
        producto == "pesi" ||
        producto == "manaos" ||
        producto == "naranpol") {

        switch (producto) {
            case "coca":
                precio = 1000
                break;
            case "pesi":
                precio = 750
                break;
            case "manaos":
                precio = 500
                break;
            case "naranpol":
                precio = 250
                break;
        }
        let unidades = parseInt(prompt(`cuántas ${producto} quiere señora?`));

        changuito.push({ producto, unidades, precio });
        console.log(changuito);
    } else {
        prompt("no tenemos merca señora");
    }

    seleccion = prompt("alguna otra cosita? si/no");

    while (seleccion == "no") {
        alert("gracias, vuelva pronto!");
        changuito.forEach((changuitoFinal) => {
            console.log(`producto: ${changuitoFinal.producto}, cantidad: ${changuitoFinal.unidades}, TOTAL: $${changuitoFinal.unidades * changuitoFinal.precio}`)
        })
        break;
    }
}

const total = changuito.reduce((acc, item) => acc + item.precio * item.unidades, 0);
console.log(`
    el total a pagar es: $${total}
`)