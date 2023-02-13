//Retos de Repaso 4.

//Creacion de la clase point.

export class Point{

    //constructor.
    constructor(private x:number,
                 private y:number){

    }

    //Getters y setters
    //Getters.

    public getX():number{
        return this.x
    };

    public getY():number{
        return this.y
    };

    //Método toString.

    public toString():string{
        return "(" + this.getX() + ", " + this.getY() + ")"
    };

    //Método distancia.
    public distanceToOrigin():number{
        return Math.sqrt(this.getX()*this.getX() + this.getY()*this.getY());
    };

    //distancia a otro punto.

    public calculateDistance(anotherPoint: Point):number{
        return Math.sqrt((this.getX()-anotherPoint.getX()) * (this.getX()-anotherPoint.getX()) +
        (this.getY()-anotherPoint.getY()) * (this.getY()-anotherPoint.getY()))
    };

    //Cálculo cuadrante.
    public calcularQuadrant():number{
        let quadrant: number = 0;
        if(this.x == 0 && this.y == 0){
            quadrant =  0
        } else if (this.x > 0 && this.y > 0){
            quadrant = 1;
        } else if(this.x < 0 && this.y > 0){
            quadrant = 2;
        } else if (this.x < 0 && this.y < 0){
            quadrant = 3;
        } else if (this.x > 0 && this.y < 0){
            quadrant = 4;
        };

        return quadrant;
    };

    //Calcular el punto más cercano.
    public calculateNearest(points:Point[]):Point{
        let distance:number = this.calculateDistance(points[0]);
        let nearest:Point = points[0];

        for(let i:number = 0; i < points.length; i++){
            let myDistance = this.calculateDistance(points[i])
            if(myDistance < distance){
                distance = myDistance;
                nearest = points[i]
            }
        }
        return nearest;
    }
};