const todoList  = [{
  name : "make dinner",
  dueDate: "02-09-2023"
 },
 {
  name : "watch Youtube",
  dueDate : "03-09-2023"
}];

renderTodoList()

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="todoList.splice(${i}, 1);
       renderTodoList();
       " class="dlt_btn">Delete</button> 
    `
    todoListHTML += html;
  }
  //console.log(todoListHTML)

  document.querySelector('.js-list-input')
    .innerHTML = todoListHTML; 
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name, 
    dueDate
  });
  //console.log(todoList)
  inputElement.value = ''; 
  renderTodoList()
}
