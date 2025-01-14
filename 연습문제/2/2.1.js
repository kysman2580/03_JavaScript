const numbers = document.querySelectorAll('.number');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

for(let num of numbers){
  num.addEventListener('click', (e)=>{
    if(result.innerText.length >= 10){
      alert('10자까지만 입력할 수 있어요');
      return;  
    }
    result.innerText += e.target.textContent;
  })
}
//초기화 버튼
reset.addEventListener('click', ()=>{
  result.innerText = ''; //누적된 번호 모두 삭제
})