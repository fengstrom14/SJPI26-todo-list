
// Variabler

const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");
const list = document.querySelector("ul");
const userInputTodo = document.querySelector("#userInput");
const completedList = document.querySelector("#paraOne");


// Funktioner och events

addButton.addEventListener(
    "click",
    addItemTodo
);


removeButton.addEventListener("click", function(){

    if(window.confirm("Are you sure you want to remove the ToDo-list?")) {
        removeList();
    }
     
});




function addItemTodo(){

    const inputText = userInputTodo.value;
    

    if(inputText === ""){
        window.alert("Please enter something!")
        return;
    }

    const itemAdd = document.createElement("li");
    list.appendChild(itemAdd);
    

    const itemLabel = document.createElement("span");
    itemLabel.textContent = inputText;
    itemAdd.appendChild(itemLabel);
    


}


function removeList(){
    
}

function completedTodo(){
    

}