var Movies = [
    {title: "Zombieland", 
    rating: 5, 
    hasWatched: true },
    {
        title: "Frozen",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Yeet",
        rating: 5,
        hasWatched: true
    }
]

var tam = Movies.length;

for(var i = 0; i < tam; i++){
    var result = "You have ";
    if(Movies[i].hasWatched){
        result += "watched ";
    }
    else{
        result += "not watched ";
    }

    result += "\"" + Movies[i].title + "\" - ";
    result += Movies[i].rating + " stars";
    console.log(result);
}