document.addEventListener('DOMContentLoaded', () => {
  document.forms[0].children[1].addEventListener('click', (e) => {
    e.preventDefault();
    createNewTask();
  });
});

/* ADD Task */
function createNewTask() {
  if (document.forms[0].children[0].value == '') {
    document.forms[0].children[0].value = 'Empty';
  }
  const newTaskInput = document.forms[0].children[0].value;

  const li = document.createElement('li'),
    pText = document.createElement('p'),
    div = document.createElement('div'),
    pDate = document.createElement('p'),
    btnCheck = document.createElement('button'),
    btnEdit = document.createElement('button'),
    btnRemove = document.createElement('button');

  pText.innerText = newTaskInput;
  pDate.innerText = taskDate();
  btnCheck.classList.add('fas', 'fa-check');
  btnEdit.classList.add('fas', 'fa-edit');
  btnRemove.classList.add('fas', 'fa-trash');

  btnCheck.addEventListener('click', (e) => {
    checkTask(e);
  });

  btnEdit.addEventListener('click', (e) => {
    editTask(e);
  });

  btnRemove.addEventListener('click', (e) => {
    removeTask(e);
  });

  div.appendChild(btnCheck);
  div.appendChild(pDate);
  div.appendChild(btnEdit);
  div.appendChild(btnRemove);

  li.appendChild(pText);
  li.appendChild(div);

  document.getElementById('todoList').appendChild(li);

  li.classList.add('animated', 'fadeInRightBig', 'faster');
  li.addEventListener('animationend', () => {
    document.getElementById('todoList').prepend(li);
    li.classList.remove('animated', 'fadeInRightBig');
  });

  document.forms[0].reset();
}

function checkTask(e) {
  e.target.parentElement.parentElement.classList.toggle('check-task');
  e.target.classList.toggle('check-hovered');
}

/* EDIT Task */
function editTask(e) {
  const oldTask = e.target.parentElement.parentElement.children[0].innerText;
  const formEdit = document.createElement('form'),
    inputEdit = document.createElement('input'),
    btnEdit = document.createElement('button');

  formEdit.classList.add('input-edit');
  btnEdit.classList.add('fas', 'fa-check');
  inputEdit.setAttribute('value', oldTask);

  formEdit.appendChild(inputEdit);
  formEdit.appendChild(btnEdit);

  const oldTaskEl = e.target.parentElement.parentElement.children[0];
  const hideThis = e.target.parentElement;
  hideThis.classList.add('hide-element');
  e.target.parentElement.parentElement.replaceChild(formEdit, oldTaskEl);

  btnEdit.addEventListener('click', (e) => {
    e.preventDefault(e.target);
    hideThis.classList.remove('hide-element');
    oldTaskEl.innerText = formEdit.children[0].value;
    formEdit.parentElement.replaceChild(oldTaskEl, formEdit);
  });
}

/* REMOVE Task */
function removeTask(e) {
  e.target.parentElement.parentElement.classList.add('animated', 'fadeOutLeft');
  e.target.parentElement.parentElement.addEventListener('animationend', () => {
    e.target.parentElement.parentElement.remove();
  });
}

/* Get Time Function */
function taskDate() {
  const today = new Date(),
    year = today.getFullYear(),
    month = today.toLocaleString('default', { month: 'long' }),
    day = today.getDate(),
    time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return month + ' ' + day + 'th ' + year + ' at ' + time;
}
