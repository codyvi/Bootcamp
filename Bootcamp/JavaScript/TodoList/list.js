var todos = ["Buy New Turtle"];

window.setTimeout(function() {
    // put all of your JS code from the lecture here
    
      
    var input = prompt("What would you like to do?");
    
    while(input !== "quit")
    {

      if(input === "list")
      {
          console.log(todos);
      }

      else if(input === "new")
      {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
      }
      input = prompt("What would you like to do?");
    }

    console.log("See ya bro")

  }, 500);

