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


