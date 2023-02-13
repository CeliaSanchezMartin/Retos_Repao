//Importar y probar todos los métodos de la clase point.
import { Point } from "./points";

let myPoint: Point = new Point(1,-2);

console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.toString());

console.log(myPoint.distanceToOrigin());

let myPoint2:Point = new Point(0, 0);
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint.calcularQuadrant());

let myPoint3:Point = new Point(1, 1);
let myPoints:Point [] = [myPoint2, myPoint3];
console.log(myPoint.calculateNearest(myPoints));



