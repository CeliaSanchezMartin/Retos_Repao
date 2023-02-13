//Importamos Triangle y probamos métdos.
import { Point } from "./points";
import { Triangle } from "./triangle";

let myPoint: Point = new Point(0,0);
let myPoint2: Point = new Point(0,3);
let myPoint3: Point = new Point(3,0);

let triangle:Triangle = new Triangle(myPoint, myPoint2, myPoint3);

console.log(triangle.calculateLengthsides());
