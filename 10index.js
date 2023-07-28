// 10c
const checkBtn = document.querySelector('.js-btn');
console.log(checkBtn.classList.contains('js-btn')); 

// 10d
function clickMe() {
  const btnElement = document.querySelector('.js-gaming-btn')
  if (!btnElement.classList.contains('is-toggled')) {
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }  
}

// 10e 10f

function clickBtn(selector) {
  const btnElement = document.querySelector(selector)
  if (!btnElement.classList.contains('is-toggled')) {
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }  
}