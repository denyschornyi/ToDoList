//Selectors
let todoInput = document.querySelector('.todo-input'),
    todoList   = document.querySelector('.todo-list');

let todoArray = [];
//Event Listener
todoInput.addEventListener('keyup', check);
todoList.addEventListener('click', removeItem);

//Functions
function check(event){
    if(!todoInput.value) return;
    if(event.keyCode === 13){   
        let newTodo = {
            item: todoInput.value,
            checked: false,
        }
        todoArray.push(newTodo);
        addTodo();
        todoInput.value = '';
        console.log(todoArray);
    }
}

function addTodo(event){
    let displayMessage = '';
    todoArray.forEach(function(item, i){
    displayMessage += `
        <li class="task-li">
            <input type="checkbox" class="check" id="item-${i}" >
            <label for="item-${i}" class="task-label">${item.item}</label>
            <button class="delete-btn">&times;</button>
        </li>`;
    todoList.innerHTML = displayMessage; //APPEND ELEMENT TO DOM ELEMENT TODO LIST
    });
}

function removeItem(event){
    let item = event.target;
    if(item.classList.contains('delete-btn')){
        console.log(item.parentElement);
        item.parentElement.remove();
    }
}