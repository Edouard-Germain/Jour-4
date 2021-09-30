

///## 01 - Object
///  - Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`,
// `age` de valeur `3` et `isCute` de valeur `true`
//
//- Affichez la valeur de `age` dans la console
///
///- À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`
///

var cat = {
    name : "Garfield",
    age : 3,
    isCute: true
}

console.log(cat.age)
if (cat.isCute =true){
    console.log("So cute !")
}

// ## 02 - Combine
//- Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
//- Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
//- Affichez la valeur de `age` de `cat` (il y a deux façons de le faire) dans la console
//- Affichez la valeur de `isCute` de `cat2` (il y a deux façons de le faire) dans la console

var cat2= {
    name: "Pedro",
    age: 4,
    isCute: false
}

var cats= [cat,cat2]
console.log(cats)
//console.log(cats.(cat2))

///## 03 - Even
//- Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
//- Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
//- Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats


function checkIfEven(num){
    if (num % 2 ===0){
        console.log("even")
    } else {
        console.log("odd")
    }
}

checkIfEven(5)


///## 04 - Compare
//- Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//"`num1` is bigger" si `num1` est plus grand
//"`num2` is bigger" si `num2` est plus grand
// "both are the same" si ils sont égaux

function compare(num,num2){
    if( num>num2){
        console.log("num1 is bigger")
    } else if (num===num2){
            console.log("both are the same")
    }       else console.log("num2 is bigger")
}

compare(2000,22222)

///## 05 - Add Up
//- Créez une fonction `addUp` qui reçoit un paramètre `num`
//- À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
//- Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78

function addUp(num){
    var result = 0 
    for ( var i = 1; i<=num ; i++){
        result += i
    }
    console.log(result)
    
}

addUp(12)

// Exercice 6 

function format (num){
    var hours = Math.floor((num / 3600)) 
    var minutes = Math.floor((num % 3600 / 60))
    var seconds = Math.floor((num % 3600 % 60))
    console.log(hours +":" + ":" + minutes +":"+ seconds)
}

format(3700 )