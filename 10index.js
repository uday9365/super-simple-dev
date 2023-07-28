// 10c
const checkBtn = document.querySelector('.js-btn');
console.log(checkBtn.classList.contains('js-btn')); 

// 10d
function clickBtn() {
  const btnElement = document.querySelector('.js-gaming-btn')
  if (!btnElement.classList.contains('is-toggled')) {
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }  
}

// 10e

function clickBtn1() {
  const btnElement = document.querySelector('.js-gaming1-btn')
  if (!btnElement.classList.contains('is-toggled')) {
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }  
}

function clickBtn2() {
  const btnElement = document.querySelector('.js-coding-btn')
  if (!btnElement.classList.contains('is-toggled')) {
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }  
}

function clickBtn3() {
  const btnElement = document.querySelector('.js-traveling-btn')
  if (!btnElement.classList.contains('is-toggled')){
    btnElement.classList.add('is-toggled')
  }else{
    btnElement.classList.remove('is-toggled')
  }
}