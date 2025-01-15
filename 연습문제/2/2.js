//10자 까지 클릭한 숫자 기록하기

const nums = document.querySelectorAll(".number");
// nums은 number 클래스 요소를 전부 선택
const span = document.querySelector("#result");
// id가 result인 요소를 선택
const reset = document.querySelector("#reset");
// id가 reset인 요소를 선택

let temp = "";
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", (e) => {
    if (temp.length < 10) {
      temp += nums[i].textContent;
      span.textContent = temp;
    } else {
      alert("10자 까지만 입력할 수 있습니다");
    }
  });
  reset.addEventListener("click", () => {
    temp = "";
    span.innerText = "";
  });
}


/* 강사님 풀이  */

// const numbers = document.querySelectorAll(".number"); // 버튼
// const result = document.querySelector("#result"); // 결과
// const reset = document.querySelector("#reset"); // 초기화

// // 향상된 for문
// for(let num of numbers){
//   num.addEventListener("click", (e) => {

//     if(result.textContent.length >= 10){
//       alert("10자 까지만 입력할 수 있습니다");
//       return;
//     }
//     // e.target : 이벤트가 발생된 요소
//     // textContent == innerText
//     result.textContent += e.target.textContent; // 버튼 내용 누적
//   });
// }

// // 초기화 버튼 클릭 시
// reset.addEventListener("click", ()=>{
//   result.textContent = ""; // 누적된 번호 모두 삭제
// });