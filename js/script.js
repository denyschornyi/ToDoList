//Selectors
let todoInput = document.querySelector('.todo-input'),
    todoList   = document.querySelector('.todo-list');

let todoArray = [];
//Event Listener
todoInput.addEventListener('keyup', addTodo);
todoList.addEventListener('click', removeItem);

//Functions

function addTodo(event){
    if(event.keyCode === 13){   
       
        let newTodo = {
            item: todoInput.value,
            checked: false,
        }

        const taskLii = `
            <li class="task-li">
                <input type="checkbox" class="check" id="item-" >
                <label for="item-" class="task-label">${newTodo.item}</label>
                <button class="delete-btn">&times;</button>
            </li>
        `;

        //APPEND ELEMENT TO DOM ELEMENT TODO LIST
        todoList.innerHTML = taskLii;
        todoArray.push(newTodo);
        todoInput.value = '';
        console.log(todoArray);
   }
}

function removeItem(event){
    let item = event.target;

    if(item.classList.contains('delete-btn')){
        console.log(item.parentElement);
        item.parentElement.remove();
    }
}