let taskInput   = document.querySelector('.task-input'),
    taskBtn     = document.querySelector('.task-btn'),
    ulToDo        = document.querySelector('.todo');

    let toDoList = [];
    if(localStorage.getItem('todo')){
        toDoList = JSON.parse(localStorage.getItem('todo'));
        displayMessages();
    }

taskBtn.addEventListener('click', function(){

    let newToDo = {
        todo: taskInput.value,
        checked: false,
        important: false
    }

    toDoList.push(newToDo);

    displayMessages();
    localStorage.setItem('todo', JSON.stringify(toDoList));
});

function displayMessages(){
    let displayMessage = ' ';
    toDoList.forEach(function(item, i){
        displayMessage += `
            <li>
                <input type="checkbox" id="item_${i}" ${item.checked ? 'checked': ''}>
                <label for="item_${i}"> ${item.todo} </label>
            </li>
        `;
        ulToDo.innerHTML = displayMessage;
    });
}

ulToDo.addEventListener('change', function(event){
    let valueLabel = ulToDo.querySelector('[for = '+ event.target.getAttribute('id') +']').innerHTML;
    console.log(valueLabel);
});