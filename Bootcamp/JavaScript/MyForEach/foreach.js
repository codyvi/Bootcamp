function myForEach(arr, func){
    for(var i = 0; i < arr.length; i++){
        func(arr[i]);        
    }
}

var colors = ["red",  "orange", "yellow"];

myForEach(colors, console.log)