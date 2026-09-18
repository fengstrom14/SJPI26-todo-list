
// Variabler

const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");
const list = document.querySelector("ul");
const userInputTodo = document.querySelector("#userInput");
const completedTodoList = document.getElementById("completedList")

const completedCounter = document.getElementById("completeCount")
let completeCount = 0;


// Funktioner och events

addButton.addEventListener(
    "click",
    addItemTodo
);

userInputTodo.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addItemTodo();
    }
})


removeButton.addEventListener("click", function(){

    if(window.confirm("Are you sure you want to remove the ToDo-list?")) {
        removeList();
    }
     
});


 // Funktion för att lägga till Todo's, felhantering och att strängen 
 // från input blir tom när man tryck enter

function addItemTodo(){

    const inputText = userInputTodo.value;

    if(inputText === ""){
        window.alert("Please enter something!");
        return;
    }

    const itemAdd = document.createElement("li");

        list.appendChild(itemAdd);
    

    const itemLabel = document.createElement("span");

        itemLabel.textContent = inputText;
        itemAdd.appendChild(itemLabel);
    
    userInputTodo.value = "";

    const completeButton = document.createElement("button");

        completeButton.innerHTML = "Complete";

        itemAdd.appendChild(completeButton);

        completeButton.addEventListener("click", function(){

            if (completeButton.innerHTML === "Complete") {

                completedTodoList.appendChild(itemAdd);
                completeButton.innerHTML = "Return";
                completeCount ++;
                completedCounter.textContent = completeCount + " completed"

            } else {
                
                list.appendChild(itemAdd);
                completeButton.innerHTML = "Complete";
                completeCount --;
                completedCounter.textContent = completeCount + " completed"
            }
        
        })
    
        

    const deleteButton = document.createElement("button");

        deleteButton.innerHTML = "Delete"

        itemAdd.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {

            if (completeButton.innerHTML === "Return") {
                completeCount--;
                completedCounter.textContent = completeCount + " completed";
            } 

            itemAdd.remove();
        });
            
}


function removeList(){
    const deleteToDo = document.getElementById("todoList");
    deleteToDo.innerHTML = "";
}


