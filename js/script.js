//Selectors
let todoInput = document.querySelector('.todo-input'),
    todoList   = document.querySelector('.todo-list');

let todoArray = [];
if(localStorage.getItem('todo')){
    todoArray = JSON.parse(localStorage.getItem('todo'));
    addTodo();
}
//Event Listener
todoInput.addEventListener('keyup', check);
todoList.addEventListener('click', removeItem);
todoList.addEventListener('change', checker);

//Functions
function check(event){
    if(!todoInput.value) return;
    if(event.keyCode === 13){   
        let newTodo = {
            item: todoInput.value,
            checked: false,
        }
        todoArray.push(newTodo);
        localStorage.setItem('todo', JSON.stringify(todoArray));
        addTodo();
        todoInput.value = '';
    }
}

function addTodo(){
    let displayMessage = '';
    if(todoArray.length === 0) todoList.innerHTML = '';
    todoArray.forEach(function(item, i){
    displayMessage += `
        <li class="task-li">
            <input type="checkbox" class="check" id="item-${i}" ${item.checked ? 'checked': ''} >
            <label for="item-${i}" class="task-label">${item.item}</label>
            <button class="delete-btn">&times;</button>
        </li>`;
    todoList.innerHTML = displayMessage; //APPEND ELEMENT TO DOM ELEMENT TODO LIST
    });
}

function removeItem(event){
    if(event.target.className === 'delete-btn'){
        let elemes = event.target.parentNode.childNodes;
        elemes.forEach(item => {
            if(item.className === 'task-label'){
                todoArray.forEach(function(todos, i){
                    if(item.innerHTML === todos.item){
                        todoArray.splice(this, 1);
                        addTodo();
                        localStorage.setItem('todo', JSON.stringify(todoArray));
                    }
                });
            }
        });
    }
}

function checker(event){
    let valueLabel = todoList.querySelector('[for = '+ event.target.getAttribute('id') +']').innerHTML;
    todoArray.forEach(function(item){
        if(item.item === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoArray));
        }
    });
}



