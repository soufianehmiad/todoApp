document.addEventListener('DOMContentLoaded', () => {
  document.forms[0].children[1].addEventListener('click', (e) => {
    e.preventDefault();
    createNewTask();
  });
});

function createNewTask() {
  const newTaskInput = document.forms[0].children[0].value;
  if (document.forms[0].children[0].value == '') {
    document.forms[0].children[0].value = 'Empty';
  }

  const li = document.createElement('li'),
    pText = document.createElement('p'),
    div = document.createElement('div'),
    pDate = document.createElement('p'),
    btnEdit = document.createElement('button'),
    btnRemove = document.createElement('button');

  pText.innerText = newTaskInput;
  pDate.innerText = 'April 24th 2020';
  btnEdit.classList.add('fas', 'fa-edit');
  btnRemove.classList.add('fas', 'fa-trash');

  btnRemove.addEventListener('click', (e) => {
    removeTask(e);
  });

  div.appendChild(pDate);
  div.appendChild(btnEdit);
  div.appendChild(btnRemove);

  li.appendChild(pText);
  li.appendChild(div);

  document.getElementById('todoList').appendChild(li);
  document
    .getElementById('todoList')
    .insertBefore(li, document.getElementById('todoList').children[0]);
  document.forms[0].reset();
}

function removeTask(e) {
  e.target.parentElement.parentElement.classList.add('fall-remove');
  e.target.parentElement.parentElement.addEventListener('transitionend', () => {
    e.target.parentElement.parentElement.remove();
  });
}
