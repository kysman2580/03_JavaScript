// 식당명 입력하세요 클릭 시 안에 내용 비우기
const inputName = document.querySelector('#inputName');
const originalPlaceholder = inputName.placeholder; // 원래 placeholder


/* 
  input 내용이 비어있으면 input을 눌렀을 때 placeholder가 지워지고
  input 내용이 비어있지 않다면 
*/
inputName.addEventListener('click', ()=>{
  if(inputName.value === ''){
    inputName.placeholder = '';
  }

  inputName.addEventListener('blur', ()=>{
    if(inputName.value.trim() === ''){
      inputName.placeholder = originalPlaceholder;
      return;
    }
  })
  
})