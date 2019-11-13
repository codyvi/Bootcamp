var todos = ["Buy New Turtle"];

window.setTimeout(function() {
    // put all of your JS code from the lecture here
    
    var input = prompt("What would you like to do?");
    
    while(input !== "quit")
    {

      if(input === "list")
      {
        listTodos();
      }

      else if(input === "new")
      {
        addTodo();
      }

      else if (input === "delete")
      {
        deleteTodo();
      }

      input = prompt("What would you like to do?");
    }

    console.log("See ya bro")
    
    function listTodos()
    {
      console.log("*********");
      todos.forEach(function(todo,index)
      {
        console.log(index + ": " + todo);
      });
      console.log("*********");
    }

    function addTodo()
    {
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo);
      console.log("Added Todo");
    }

    function deleteTodo()
    {
      var indexTodo = prompt("Enter index of todo to delete")
      todos.splice(indexTodo, 1);
      console.log("Deleted Todo");
    }

  }, 500);

