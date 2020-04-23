let taskInput   = document.querySelector('.task-input'),
    taskBtn     = document.querySelector('.task-btn');

        let toDoList = [];
taskBtn.addEventListener('click', function(){

    let newToDo = {
        todo: taskInput.value,
        checked: false,
        important: false
    }

    toDoList.push(newToDo);

    console.log(toDoList);
});