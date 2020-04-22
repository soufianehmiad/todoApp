const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const todoTask = document.querySelector('#todoTask');

// ADD Task
function addTask(event) {
  event.preventDefault();
  let newTask = todoInput.value;
  // HTML Template
  let newTaskHTML = `
    <div class="task">
        <i onclick="checkTask(event)" class="fa fa-check"></i>
        <li><input type="task" value="${newTask}" disabled id="todoTask" /></li>
        <i onclick="editTask(event)" class="fa fa-edit"></i>
        <i onclick="deleteTask(event)" class="fa fa-trash"></i>
    </div>`;

  let li = document.createElement('li');
  li.innerHTML = newTaskHTML;
  todoList.insertBefore(li, todoList.childNodes[0]);

  todoInput.value = '';
}

// CHECK Task
function checkTask(event) {
  event.preventDefault();
  event.target.classList.toggle('checked');
  event.target.nextElementSibling.classList.toggle('lineThrough');
}

// DELETE Task
function deleteTask(event) {
  event.preventDefault();
  event.target.parentElement.remove();
}

// EDIT Task
function editTask(event) {
  event.preventDefault();
  todoTask.removeAttribute('disabled');
  todoTask.setAttribute('type', 'editmode');

  todoTask.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      todoTask.setAttribute('type', 'task');
      todoTask.setAttribute('disabled', '');
      //
      console.log(todoTask.value);
    }
  });
}
