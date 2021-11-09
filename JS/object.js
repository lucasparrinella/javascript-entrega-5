class Prenda {

    constructor(modelo, talle, precio) {
        this.modelo = modelo;
        this.talle = talle;
        this.precio = precio;
    }

    mostrarDatos() {
        //console.log("La prenda que elegiste es un/a " + this.modelo + ", talle: " + this.talle + " y tiene un valor de: $" + this.precio);
        alert("La prenda que elegiste es un/a " + this.modelo + ", talle: " + this.talle + " y tiene un valor de: $" + this.precio);
    }
}

const remera = new Prenda("Remera", "S/M/L", 1500);
const pantalon = new Prenda("Pantalón", "S/M/L", 2000);
const gorra = new Prenda("Gorra", "Universal", 1000);

const info = Number(prompt("¿Querés saber mas sobre nuestros productos? Ingresa el número de la prenda sobre la cual querés saber mas información, siendo                                                       (1) Remera (2) Pantalón (3) Gorra"));

if (info == 1) {
    remera.mostrarDatos();
} else if (info == 2) {
    pantalon.mostrarDatos();
} else if (info == 3) {
    gorra.mostrarDatos();
} else {
    alert("¡El número ingresado no pertenece a un producto!");
}