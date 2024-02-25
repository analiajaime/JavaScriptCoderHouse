function calcularTotalConDescuento(total) {
    let tieneCupon = prompt("¿Tiene un cupón de descuento? (responda 'si' o 'no')");
    if (tieneCupon.toLowerCase() === "si") {
        return total * 0.9; // Aplica un 10% de descuento
    }
    return total; // Retorna el total sin descuento si la respuesta es 'no'
}

function iniciarPedido() {
    let total = 0;
    let seguirComprando = true;
    let precios = {
        1: 2500, // Precio de la hamburguesa 1
        2: 3000, // Precio de la hamburguesa 2
        3: 3500, // Precio de la hamburguesa 3
        4: 4000, // Precio de la hamburguesa 4
        5: 4500  // Precio de la hamburguesa 5
    };

    while (seguirComprando) {
        let eleccion = prompt("Ingrese el código de la hamburguesa que desea agregar a su pedido (1: Hamburguesa Simple - 2: Doble carnes - 3: Doble con jamón y queso - 4: Veggie - 5: Doble completa con papas y gaseosa) o '6' para terminar el pedido:");
        if (eleccion === "6") {
            seguirComprando = false;
        } else if (precios[eleccion]) {
            total += precios[eleccion];
            alert(`Hamburguesa ${eleccion} agregada. Total que llevas gastado: $${total}`);
        } else {
            alert("Opción no válida. Por favor, ingrese un número entre 1 y 6.");
        }
    }

    if (total > 0) {
        total = calcularTotalConDescuento(total);
        alert(`El total de su pedido con descuento (si aplica) es: $${total}`);
    } else {
        alert("Pedido cancelado o vacío.");
    }
}

iniciarPedido();

