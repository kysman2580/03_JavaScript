/* input 생성 */

const addBtn = document.querySelector(".create"); // 생성 버튼
const container = document.querySelector(".container");
const inputNumber = document.querySelector("#input-number");
const result = document.querySelector(".result");

addBtn.addEventListener("click", ()=>{
  // 생성 버튼 클릭 시
  // input-number에 작성한 숫자 만큼 input 요소 만들어서
  // .container 의 마지막 자식으로 추가
  
  const count = Number(inputNumber.value) || 0;

  for(i=0; i<count; i++){
    // 새로운 input 요소를 만들고 type과 id 요소를 지정해주고 container에 추가하기
    const newInput = document.createElement("input");
    newInput.className = "input-number";
    newInput.type = "number";

    container.append(newInput);
  }
})

// 아래 입력된 숫자 모두 더하기
const resultBtn = document.querySelector(".resultBtn");
resultBtn.addEventListener("click", ()=>{
  const inputs = document.querySelectorAll(".input-number");

  let sum = 0;

  for(let input of inputs){
    const value = Number(input.value);

    sum += value;
  }
  result.textContent = sum;
});