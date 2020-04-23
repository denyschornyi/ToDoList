let taskInput   = document.querySelector('.task-input'),
    taskBtn     = document.querySelector('.task-btn'),
    liToDo        = document.querySelector('.todo');

        let toDoList = [];

taskBtn.addEventListener('click', function(){

    let newToDo = {
        todo: taskInput.value,
        checked: false,
        important: false
    }

    toDoList.push(newToDo);

    displayMessages();
});

function displayMessages(){

    toDoList.forEach(function(item, i){
        let displayMessage = `
            <li>
                <input type="checkbox" id="item_${i}">
                <label for="item_${i}"> ${item.todo} </label>
            </li>
        `;
        liToDo.innerHTML = displayMessage;
    });

}