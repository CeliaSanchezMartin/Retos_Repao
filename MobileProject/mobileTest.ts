//Vamos a probar los métodos de la clase Mobile,

import { Mobile } from "./mobile";

let iPhone: Mobile = new Mobile ("iPhne 73", "Apple", "73 pro ultra max", "white", 12345);
let Samsung: Mobile = new Mobile ("Samsung Galaxi 7", "Samsung", "Galaxi 7", "Black", 999);
let huawei:Mobile = new Mobile("Huawei Mate 30 pro", "Huawei", "Mate 30 pro", "Grey", 898);

console.log(iPhone.getName());
console.log(iPhone.geTrademark());
console.log(iPhone.getModel());
console.log(iPhone.getColor());
console.log(iPhone.getPrice());



//iPhone.setName("Samsung Galaxi Zflipp");
//iPhone.setTrademark("Samsung");
//iPhone.setModel("Zflipp 5");
//iPhone.setColor("Black");
//iPhone.setPrice(231);
let myMobiles: Mobile[] = [iPhone,Samsung,huawei];

function mostrarDatos(mobiles:Mobile[]): void{
    let stringDevuelto:string = "";
    for (let i = 0; i < mobiles.length; i++ ){
        stringDevuelto += mobiles[i].printCaracteristics()
    }
    console.log(stringDevuelto);
};

mostrarDatos(myMobiles);

