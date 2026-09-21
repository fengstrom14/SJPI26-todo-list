
// Variabler
// Hämtar HTML-element som används i ToDo-listan
const addButton = document.getElementById("addBtn");
const removeAllButton = document.getElementById("removeAllBtn");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const completedList = document.getElementById("completedList")

const counterText = document.getElementById("counterText")

// Räknar antalet färdiga uppgifter
let completeCount = 0;
// Array som lagrar alla ToDo-uppgifter som objekt
let listArray = [];

// Event listeners för knappar, Enter och Remove All

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


// Lägger till en ny ToDo och kontrollerar att inputfältet inte är tomt
function addItemTodo(){

    const todoText = todoInput.value;

    if(todoText === ""){
        window.alert("Please enter something!");
        return;
    }
// Lägger till uppgiften som ett objekt i arrayen
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

// Flyttar uppgiften mellan To do och Completed
// och uppdaterar statusen i arrayen

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
    
        
// Tar bort uppgiften från både HTML-listan och arrayen

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

// Tar bort alla uppgifter och nollställer räknaren och arrayen

function removeList(){
    const deleteToDo = document.getElementById("todoList");

    deleteToDo.innerHTML = "";
    completedList.innerHTML = "";
    completeCount = 0;
    listArray = [];
    counterText.textContent = completeCount + " completed";
}


