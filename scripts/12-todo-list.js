const todoList = [{
  name: 'make dinner', 
  dueDate: '2024-09-24'}, {name: 'wash dishes',
  dueDate: '2024-0'}];

renderTodoList();
function renderTodoList(){



 let todoListHTML = '';

 todoList.forEach(function(todoObject, index){});



console.log(todoListHTML);


document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;


  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;
  
  todoList.push({name: name,
    dueDate: dueDate}
  );
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}