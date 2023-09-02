const todoList  = ["make dinner", "watch Youtube"];

renderTodoList()

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i]
    const html = `
      <p>
        ${todo}
        <button onclick="todoList.splice(${i}, 1);
        renderTodoList();
        ">Delete</button> 
      </p>
    `
    todoListHTML += html;
  }
  console.log(todoListHTML)

  document.querySelector('.js-list-input')
    .innerHTML = todoListHTML; 
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;
  todoList.push(name)
  console.log(todoList)
  inputElement.value = ''; 
  renderTodoList()
}
