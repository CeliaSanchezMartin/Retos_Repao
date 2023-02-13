//Reto 5: Clase Triangle.
import { Point } from "./points";

export class Triangle{
    constructor(private vertex1:Point,
             private vertex2:Point,
             private vertex3:Point ){}

    //Getters.
    public getVertex1():Point{
        return this.vertex1
    };

    public getVertex2():Point{
        return this.vertex2
    };

    public getVertex3():Point{
        return this.vertex3
    };

    //Método cálculo aristas.
    public calculateLengthsides():number[]{
        let lengthSides: number[] = [];
        lengthSides.push(this.vertex1.calculateDistance(this.vertex2));
        lengthSides.push(this.vertex2.calculateDistance(this.vertex3));
        lengthSides.push(this.vertex3.calculateDistance(this.vertex1));

        return lengthSides;
    };

}