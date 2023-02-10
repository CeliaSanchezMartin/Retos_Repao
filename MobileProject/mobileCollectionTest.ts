import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";


let iPhone: Mobile = new Mobile ("iPhne 73", "Apple", "73 pro ultra max", "white", 12345);
let samsung: Mobile = new Mobile ("Samsung Galaxi 7", "Samsung", "Galaxi 7", "Black", 999);
let huawei:Mobile = new Mobile("Huawei Mate 30 pro", "Huawei", "Mate 30 pro", "Grey", 898);
let xiaomi:Mobile = new Mobile("Xiaomi Redmi 10", "Xiaomi", "Redmi 10","Green", 100);

let mobileArray: Mobile[] = [iPhone, samsung, huawei, xiaomi];
let myCollection: MobileCollection = new MobileCollection(mobileArray,0);

console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());

//console.log(myCollection.setTotalPrice(500));



