const numbers = document.querySelectorAll('#numContainer tr');
const record = document.querySelector('.record');

const add = document.querySelector('#addBtn');
const reset = document.querySelector('#resetBtn');

const result = document.querySelector('.addContent');





// 번호를 누르면 record 요소 안에 입력한 번호를 추가
for(let num of numbers){
  num.addEventListener('click', (e) =>{
    record.innerText += e.target.innerText;
  })
}
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 번호 누른 값 초기화 하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
reset.addEventListener('click', ()=>{
  record.innerText = '';
})
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 추가 버튼 클릭 시 addContent에 입력값 추가 ㅡㅡㅡㅡㅡ

add.addEventListener('click', ()=>{
  const div = document.createElement('div');
  div.className = 'history';

  const span = document.createElement('span');
  span.className = 'span';

  const star = document.createElement('span');
  star.className = 'star';
  star.innerHTML = '☆';

  const xBtn = document.createElement('span');
  xBtn.className = 'xBtn';
  xBtn.innerHTML = '&times';

  span.append(xBtn, star);

  const numSpan = document.createElement('span');
  numSpan.innerText = record.innerText;

  div.append(numSpan, span);
  
  result.append(div);

  record.innerText = '';

  // x버튼 누르면 result 지우기
  xBtn.addEventListener('click', ()=>{
    div.remove();
  });

  star.addEventListener('click', ()=>{
    if(star.innerText === '☆'){
      star.innerText = '★';
      star.style.color = 'orange';
      numSpan.style.color = 'red';
    }else{
      star.innerText = '☆';
      star.style.color = 'black';
      numSpan.style.color = 'black';
    }
  })
  
})





