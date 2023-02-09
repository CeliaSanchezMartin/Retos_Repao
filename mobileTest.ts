//Vamos a probar los métodos de la clase Mobile,

import { Mobile } from "./mobile";

let iPhone: Mobile = new Mobile ("iPhne 73", "Apple", "73 pro ultra max", "white", 12345);

console.log(iPhone.getName());
console.log(iPhone.geTrademark());
console.log(iPhone.getModel());
console.log(iPhone.getColor());
console.log(iPhone.getPrice());

iPhone.setName("Samsung Galaxi Zflipp");
iPhone.setTrademark("Samsung");
iPhone.setModel("Zflipp 5");
iPhone.setColor("Black");
iPhone.setPrice(231);


