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

var tam = Movies.length

for(var i = 0; i < tam; i++)
{
    if(Movies[i].hasWatched === true)
    {
        console.log("You have watched " + Movies[i].title, "- " +Movies[i].rating, "stars")
    }
}