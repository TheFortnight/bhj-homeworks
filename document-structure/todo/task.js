addButton = document.querySelector('.tasks__add');

function addTask () {
    let taskText = document.querySelector('.tasks__input').value;
    let newTask = `<div class="task">
    <div class="task__title">
      ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`

    let tasksList = document.querySelector('.tasks__list');

    tasksList.innerHTML = taskText == "" ? tasksList.innerHTML : tasksList.innerHTML += newTask;
    let closeButtons = Array.from(tasksList.querySelectorAll('.task__remove'));
    closeButtons.forEach(currentElement => 
    currentElement.onclick = function() {
        let element = currentElement.closest('.task');
        element.remove();
        
    });
    document.querySelector('.tasks__input').value = "";
    return false;
}

addButton.onclick = addTask;
document.querySelector('.tasks__input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask;
    }});