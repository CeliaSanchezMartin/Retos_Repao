//Reto Invocacion.
//Invocando las funciones iEven y la funcion add indicar si es par o impar la suma de los caracteres de estos arrays.
import { isEven } from "./retos1";
import { add } from "./buclesFor";

let arr1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisnieto", "Brasil"];
let arr3:string[] = ["Venezuela", "Veneno", "Voltaje"];

isEven(add(arr1));

isEven(add(arr2));

isEven(add(arr3));
