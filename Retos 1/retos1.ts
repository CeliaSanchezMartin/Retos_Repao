//Retos 1. 
//Realiza una funcion que dada una fecha de nacimiento devuelva el signo del zodiaco.

function zodiac(day:number, month:number){
    let zodiac:string = "";
    if((day >= 22 && month == 12) || (day <= 19 && month == 1)){
        zodiac = "Capricornio";
    } else if((day >= 20 && month == 1) || (day <= 18 && month == 2)){
        zodiac = "Acuario";
    } else if((day >= 19 && month == 2) || (day <= 20 && month == 3)){
        zodiac = "Piscis";
    } else if((day >= 21 && month == 3) || (day <= 19 && month == 4)){
        zodiac = "Aries";
    } else if((day >= 20 && month == 4) || (day <= 20 && month == 5)){
        zodiac = "Tauro";
    } else if((day >= 21 && month == 5) || (day <= 20 && month == 6)){
        zodiac = "Géminis";
    } else if((day >= 21 && month == 6) || (day <= 22 && month == 7)){
        zodiac = "Cáncer";
    } else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)){
        zodiac = "Leo";
    } else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)){
        zodiac = "Virgo";
    } else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)){
        zodiac = "Libra";
    } else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)){
        zodiac = "Escorpio";
    } else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)){
        zodiac = "Sagitario";
    } else {
        zodiac = "No encuentro ningun signo del zodiaco para esas características"
    };

    return zodiac; //Funcion.
};
//Test Zodiac.

//console.log(zodiac(30, 4)); //It Works!

//2. Realiza un procedimiento dado el nombre de un pais te imprima el continente en el que estás.
function continent(country:string){
    if(country == "Spain" || country == "Italy" || country == "France" ||
    country == "Germany" || country == "Nederlands"){
        console.log("The continent is Europe");

    } else if (country == "Morocco" || country == "Egypt" || country == "Nigeria" ||
    country == "Ethiopia" || country == "Kenya"){
        console.log("The continent is Africa");
        
    } else if (country == "Japan" || country == "China" || country == "India" ||
    country == "Thailand" || country == "Vietnam"){
        console.log("The continent is Asia");
        
    } else if(country == "USA" || country == "Canada" || country == "Mexico" ||
    country == "Colombia" || country == "Argentina"){
        console.log("The continent ir America");
        
    } else if (country == "Autralia" || country == "New Zealand" || country == "Fiyi" ||
    country == "Samoa" || country == "Tonga"){
        console.log("The continent is Australia");
        
    } else if (country == "Antarctica"){
        console.log("The continent is Antarctica");
        
    }
};

//Test continent.
//continent("Japan");

//4. Funcion  que devuelva si un numero es par o impar

 export function isEven(number:number){
    let result:string = "";
    if (number % 2 == 0){
        result = "even";

    } else {
        result = "odd"
    };

    console.log( "The number " + number + " is " + result);
    
};

//Test isEven

//isEven(1);
