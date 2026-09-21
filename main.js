
// Variabler

const addButton = document.getElementById("addBtn");
const removeAllButton = document.getElementById("removeAllBtn");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const completedList = document.getElementById("completedList")

const counterText = document.getElementById("counterText")

let completeCount = 0;
let listArray = [];

// Funktioner och events

addButton.addEventListener(
    "click",
    addItemTodo
);

todoInput.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addItemTodo();
    }
})


removeAllButton.addEventListener("click", function(){

    if(window.confirm("Are you sure you want to remove the ToDo-list?")) {
        removeList();
    }
     
});


 // Funktion för att lägga till Todo's, felhantering och att strängen 
 // från input blir tom när man tryck enter

function addItemTodo(){

    const todoText = todoInput.value;

    if(todoText === ""){
        window.alert("Please enter something!");
        return;
    }

    listArray.push({
    text: todoText,
    completed: false
});


    const todoItem = document.createElement("li");

        todoList.appendChild(todoItem);
        
    

    const textSpan = document.createElement("span");

        textSpan.classList.add("todoText");

        textSpan.textContent = todoText;
        todoItem.appendChild(textSpan);
    
    todoInput.value = "";

    const statusButton = document.createElement("button");

        statusButton.classList.add("statusButton");

        statusButton.innerHTML = "✓";

        todoItem.appendChild(statusButton);

        statusButton.addEventListener("click", function(){

            if (statusButton.innerHTML === "✓") {

            const todoObject = listArray.find(item => item.text === todoText);
                todoObject.completed = true;

                completedList.appendChild(todoItem);
                todoItem.classList.add("completed");
                statusButton.innerHTML = "↩";
                completeCount ++;
                counterText.textContent = completeCount + " completed"

            } else {
            
            const todoObject = listArray.find(item => item.text === todoText);
                todoObject.completed = false;

                todoList.appendChild(todoItem);
                todoItem.classList.remove("completed");
                statusButton.innerHTML = "✓";
                completeCount --;
                counterText.textContent = completeCount + " completed"
            }
        
        })
    
        

    const deleteButton = document.createElement("button");

        deleteButton.classList.add("deleteButton");

        deleteButton.innerHTML = "🗑"

        todoItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {

            if (statusButton.innerHTML === "↩") {
                completeCount--;
                counterText.textContent = completeCount + " completed";
            } 
            const index = listArray.findIndex(item => item.text === todoText);
            listArray.splice(index, 1);
            todoItem.remove();
        });
            
}


function removeList(){
    const deleteToDo = document.getElementById("todoList");

    deleteToDo.innerHTML = "";
    completedList.innerHTML = "";
    completeCount = 0;
    listArray = [];
    counterText.textContent = completeCount + " completed";
}


