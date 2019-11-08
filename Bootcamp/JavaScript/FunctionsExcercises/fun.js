console.log("First Excercise")

function isEven(num)
{
    if(num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;    
    }
}

function factorial(num)
{
    var result = 1;

    for(var i =  2; i <= num; i++)
    {
        result *= i;
    }

    return result;
}

function kebabToSnake(word)
{
    var newStr = word.replace(/-/g, "_");
    return newStr;
}
  

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("Factorial of five");

console.log(factorial(5));

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("blah"));