//Selectors
let todoInput = document.querySelector('.todo-input'),
    todoList   = document.querySelector('.todo-list');

let todoArray = [];
//Event Listener
todoInput.addEventListener('keyup', addTodo);

//Functions

function addTodo(event){
    if(event.keyCode === 13){   
       
        let newTodo = {
            item: todoInput.value,
            checked: false
        }

        //CREATE ELEMENT TODO
        //CREATE ELEMENT LI  WRAPPER
        const taskLi = document.createElement('LI');
        taskLi.classList.add('task-li');
        //CREATE CHECKBOX
        const taskCheckbox = document.createElement('INPUT');
        taskCheckbox.type = 'checkbox';
        taskLi.appendChild(taskCheckbox);
        //CREATE INPUT TASK LABEL
        const taskLabel = document.createElement('input');
        taskLabel.type = 'text';
        taskLabel.classList.add('task-label');
        taskLabel.value = newTodo.item;
        taskLabel.setAttribute("disabled", "disabled");
        taskLi.appendChild(taskLabel);
        //CREATE DELETE BUTTON
        const deleteBtn = document.createElement('BUTTON');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;';
        taskLi.appendChild(deleteBtn);

        //APPEND ELEMENT TO DOM ELEMENT TODO LIST
        todoList.appendChild(taskLi);
        todoArray.push(newTodo);
        todoInput.value = '';
        console.log(todoArray);
   }
}
