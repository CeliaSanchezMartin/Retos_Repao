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
    }
}