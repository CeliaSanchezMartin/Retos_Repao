//Retos de bucles While

// 2. funcion que devuelva si existe un numero par en un array de numeros.
function hasEven(myNums:number[]){
    let i:number = 0;
    while(i < myNums.length && myNums[i] % 2 != 0){
        i++;
    };
    return i != myNums.length
    

};

//Test hsEven.
//console.log(hasEven([1, 3, 2, 7]));

// 3. Función que devuelva true si todos los nombres empiezan por M.

function startwhithM(myNames: string[]){;
    let i:number = 0;
    while(i < myNames.length && myNames[i][0] == "M"){
        i++;
    };
    return i == myNames.length
};

//Test startWhitM.

//console.log(startwhithM(["Maria", "tarta"]));
