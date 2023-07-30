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

// 10g
function turnOnBtn(selector2) {
  const btnElement = document.querySelector(selector2)
  if (!btnElement.classList.contains('is-toggled')) {
    turnOffBtn()
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }  
}

function turnOffBtn() {
  const previousBtn = document.querySelector('.is-toggled')
  if (previousBtn){
    previousBtn.classList.remove('is-toggled')
  }
}
