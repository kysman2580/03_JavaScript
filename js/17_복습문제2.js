const colorInputs = document.querySelectorAll(".color-input");


// 인덱스 이용 -> 요소 탐색 코드로 변경

// 향상된 for문 : 0~끝 까지 모든 순서를 순차 접근하는 용도의 for문
for(let input of colorInputs){
  // input === colorInputs[i], i는 0부터 끝 까지 1씩 증가 

  input.addEventListener("keyup", ()=>{
    
    // 입력된 input의 이전 형제(div.box)의 배경색 변경
    input.previousElementSibling.style.backgroundColor
    = input.value;
  });
}