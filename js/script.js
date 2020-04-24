let taskInput   = document.querySelector('.task-input'),
    taskBtn     = document.querySelector('.task-btn'),
    ulToDo      = document.querySelector('.todo');

    let toDoList = [];

    if(localStorage.getItem('todo')){
        toDoList = JSON.parse(localStorage.getItem('todo'));
        displayMessages();
    }


taskInput.addEventListener('keydown',(event)=>{
    if(event.keyCode == 13){
        action();
    }
});

ulToDo.addEventListener('change', function(event){
    let valueLabel = ulToDo.querySelector('[for = '+ event.target.getAttribute('id') +']').innerHTML;
    toDoList.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(toDoList));
        }
    });
});


ulToDo.addEventListener('contextmenu', function(event){
    event.preventDefault();
    toDoList.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
            toDoList.splice(i, 1);
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(toDoList));

        }
    });
});

function action(){
    if(!taskInput.value) return;
    let newToDo = {
        todo: taskInput.value,
        checked: false
    }
        toDoList.push(newToDo);

        displayMessages();
        localStorage.setItem('todo', JSON.stringify(toDoList));
        taskInput.value = '';
    
}

function displayMessages(){
    let displayMessage = '';
    toDoList.forEach(function(item, i){
        displayMessage += `
            <li class="li_todo">
                <div>
                    <input type="checkbox" id="item_${i}" ${item.checked ? 'checked': ''}>
                    <label class="label-todo" for="item_${i}">${item.todo}</label>
                </div>
                <span class="clear-todo">&#10005;</span>
            </li>
        `;
        ulToDo.innerHTML = displayMessage;
    });
}