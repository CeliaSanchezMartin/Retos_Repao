//Retos de Bucles For. 1.

//2. Funcion que imprima numeros impares existentes hasta un número indicado.

function evenNumbers(num:number){
    let result: number[] = [];
    for(let i = 0; i < num +1; i ++){
        if( i % 2 !== 0){
        result.push(i)
    }};

    console.log(result);
    
};
//Test evenNumbers.
evenNumbers(10);

//3. funcion cuyo parametro de entrada sea un array y como salida devuelva un array revertido.

function myRevert(myArr: number[]){
    let result:number[] = [];
    for(let i = myArr.length -1; i >= 0; i--){
        result.push(myArr[i])
    };
    return result;
};

//Test myRevert
console.log(myRevert([1, 2, 3, 4, 5]));


//4. funcion cuyo parametro de entrada sea un array de string  e imprima si el  color está en el arcoíris.
let rainbow: string[] = ["yellow", "orange", "red", "brown", "green", "blue","pink", "purple"]
function isRainbow(colors: string[]){
    let result:boolean;
    for(let i = 0; i < colors.length; i++){
        result = false;

        for(let j = 0; j < rainbow.length; j++){
            if ( colors[i] == rainbow[j]){
                result = true
            }
        };
        console.log(result);
        
    };
};

//Test isRainbow:

isRainbow(["blue", "black", "yellow"]);

//5. funcion suma de los caracteres de un array de string.

function add(myWords: string[]){
    let num:number= 0;
    for( let i = 0; i < myWords.length; i++){
        num += myWords[i].length;
    }
    return num;
};
//Test add.
console.log(add(["Hola", "buenos", "días"]));
