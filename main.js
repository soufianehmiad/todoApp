const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// ADD task
todoInput.children[1].addEventListener('click', () => {
  if (todoInput.children[0].value == '') {
    todoInput.children[0].value = 'Empty Task';
  }
  const newTaskValue = todoInput.children[0].value;
  const newTask = document.createElement('li');
  newTask.id = 'task';
  const newTaskInput = document.createElement('p');
  newTaskInput.innerText = `${newTaskValue}`;
  const newTaskEdit = document.createElement('button');
  newTaskEdit.classList.add('fa', 'fa-edit');
  const newTaskCheck = document.createElement('button');
  const newTaskRemove = document.createElement('button');
  newTaskRemove.classList.add('fa', 'fa-trash');

  newTask.appendChild(newTaskInput);
  newTask.appendChild(newTaskCheck);
  newTask.appendChild(newTaskEdit);
  newTask.appendChild(newTaskRemove);

  todoList.insertBefore(newTask, todoList.children[0]);
  todoInput.children[0].value = '';

  // Check task
  newTaskInput.addEventListener('click', (event) => {
    event.target.parentElement.classList.toggle('done');
  });

  // REMOVE task
  newTaskRemove.addEventListener('click', (event) => {
    event.target.parentElement.remove();
  });

  // EDIT task
  newTaskEdit.addEventListener('click', () => {
    const editTaskInput = document.createElement('textarea');
    newTask.replaceChild(editTaskInput, newTaskInput);
    editTaskInput.value = `${newTaskValue}`;

    // save edit
    editTaskInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        newTaskInput.innerText = editTaskInput.value;
        newTask.replaceChild(newTaskInput, editTaskInput);
      } else if (event.keyCode === 27) {
        newTask.replaceChild(newTaskInput, editTaskInput);
      }
    });
  });
});
