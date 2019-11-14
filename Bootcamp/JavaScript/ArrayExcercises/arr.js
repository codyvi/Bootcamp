/*
    Complexity of printReverse: 
    for O(N)
    N
    Big-O = O(N)
*/

function printReverse(array){
    for(var i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

/*
    Complexity of isUniform: 
    .forEach() O(N)
    N
    Big-O = O(N)
*/


function isUniform(array){
    var check = array[0];
    var bool = true;
    array.forEach(function(letters){
        if(check !== letters){
            bool = false;
        }
    });
    return bool;
}


/*
    Complexity of sumArray: 
    .forEach() O(N)
    N
    Big-O = O(N)
*/


function sumArray(array){
    var sum = 0;
    array.forEach(function(numbers){
        sum += numbers;
    });
    return sum;
}

/*
    Complexity of max: 
    .forEach() O(N)
    N
    Big-O = O(N)
*/

function max(array){
    var max = array[0];
    array.forEach(function(numbers){
        if(numbers > max){
            max = numbers;
        }
    })
    return max;
}




// First Excercise
console.log("### Reverse Excercise ###")
var arr1 = ["a", "b", "c"];
console.log("The array is: " + arr1);
console.log("Reversing the array!");
printReverse(arr1);
// Second Excercise
console.log("### Uniform Excercise ###")
var arr2 = ["a","a","a"];
console.log("The array is: " + arr2)
console.log(isUniform(arr2));
//Third Excercise 
console.log("### Sum Excercise ###")
var arr3 = [10,3,10,4];
console.log("The array is: " + arr3)
console.log(sumArray(arr3));
//Fourth Excercuse
console.log("### Max Excercise ###")
var arr4 = [10,3,10,4];
console.log("The array is: " + arr4)
console.log(max(arr4));