//Retos de bucles While

// 2. funcion que devuelva si existe un numero par en un array de numeros.
function hasEven(myNums:number[]){
    let result:boolean = false;
    let i = 0;
    while(i < myNums.length && result == false){
        if(myNums[i] % 2 == 0){
            result = true;
        };
        i++;
    };
    return result;
    

};

//Test hsEven.
console.log(hasEven([1, 3, 2, 7]));

// 3. Función que devuelva true si todos los nombres empiezan por M.

function startwhithM(myNames: string[]){;
    let i = 0;
    while(i < myNames.length && myNames[i][0] == "M"){
        i++;
    };
    if(i == myNames.length){
        return true;
    } else {
        return false;
    }
};

//Test startWhitM.

console.log(startwhithM(["Maria", "tarta"]));
