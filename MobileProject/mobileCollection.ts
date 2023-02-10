//Reto 1. 
import { Mobile } from "./mobile";

export class MobileCollection{
    private mobiles: Mobile[];
    private totalPrice:number;

    constructor(mobiles: Mobile[], totalPrice:number){
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculator();
    };

    //Getters y Setters
    public getMobiles():Mobile[]{
        return this.mobiles;
        
    };
    public getTotalPrice():number{
        return this.totalPrice
    };

    public setMobiles(newMobiles: Mobile[]):void{
        this.mobiles = newMobiles
    };

    public setTotalPrice(newPrice: number): void{
        this.totalPrice = newPrice
    };

    private totalPriceCalculator():number{
        let totalPrice: number = 0; 
        for( let i = 0; i < this.mobiles.length;i++){
            totalPrice += this.mobiles[i].getPrice()
        }
        return totalPrice
    }
}