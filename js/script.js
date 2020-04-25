let taskInput = document.querySelector('.task-input'),
    ulToDo    = document.querySelector('.todo');

let toDoList = [];

taskInput.addEventListener('keyup', (event)=>{
    if(!taskInput.value) return;
    if(event.keyCode === 13){
        let newToDo = {
            item: taskInput.value,
            checked: false
        }
        toDoList.push(newToDo);
        displayMessages();
        taskInput.value = '';
    }
});

function displayMessages(){
    let displayMessage = '';
    toDoList.forEach(function(item, i){
        displayMessage += `
            <li>
                <input type='checkbox' id='item-${i}'>
                <label for='item-${i}'> ${item.item}</label>
                <button class='clear' >&#10005;</button>
            </li>
        `;
        ulToDo.innerHTML = displayMessage;
    });
}


