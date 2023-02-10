//Retos Repaso 2.
//Reto 1 Creación de la clase con Typescript.

 export class Mobile{

    constructor(private name: string,
                private trademark : string,
                private model: string,
                private color:string,
                private price: number){
    }
    //Setters y Getters.
    //Getters
    public getName():string{
        return this.name
    };

    public geTrademark():string{
        return this.trademark
    };

    public getModel():string{
        return this.model
    };

    public getColor():string{
        return this.color
    };

    public getPrice():number{
        return this.price
    };

    //Setters.
    public setName(newName:string):void{
        this.name = newName;
    };

    public setTrademark(newTrademark:string):void{
        this.trademark = newTrademark;
    };

    public setModel(newModel:string):void{
        this.model = newModel;
    };

    public setColor(newColor:string):void{
        this.color = newColor;
    };
    public setPrice(newPrice:number):void{
        this.price = newPrice;
    };

    //Método que imprima las características.
    public printCaracteristics():void{
        console.log("The characteristics of the mobile name are:"+
                    "\n·Name: " + this.name +   //Pregunta para correccion: aqui deberia poner los getters de cada atributo?¿?
                    "\n·Trademark: " + this.trademark +
                    "\n·Model. " + this.model + 
                    "\n·Color: " + this.color + 
                    "\n·Price: " + this.price);
    };
 }