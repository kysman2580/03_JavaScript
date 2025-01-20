const reset = document.querySelector("#reset");
const randomBtn = document.querySelector("#random");
const nums = document.querySelectorAll(".num");
const result = document.querySelector('#result');

// 숫자 클릭시 배경색 변경
for (let num of nums) {
  num.addEventListener("click", () => {
    if (num.innerText !== "") {
      if (num.style.backgroundColor === "orange") {
        num.style.backgroundColor = "white";
      } else {
        num.style.backgroundColor = "orange";
      }
    }
  });

  // 버튼 초기화
  reset.addEventListener("click", () => {
    if (num.innerText !== "") {
      num.style.backgroundColor = "white";
    }
  });
}

/* 랜덤 선택을 누르면 
   1부터 45까지의 랜덤한 숫자 중
   6개의 숫자가 선택이 됨
*/
randomBtn.addEventListener("click", () => {
  let start = 0; // 반복 시작
  let count = 20; // 반복 횟수

  function selectNumbers() {
    start++;

    nums.forEach((num) => {
      num.style.backgroundColor = "white";
    });

    const countNum = [];

    while (countNum.length < 6) {
      const random = Math.floor(Math.random() * 45) + 1;
      if (!countNum.includes(random)) {
        countNum.push(random);
      }
    }
    // 버튼을 누를 때 마다 countNum 배열 안에 랜덤한
    // 6자리의 숫자가 입력됨
    // 배열안에 값과 일치하는 num의 컬러를 orange로 바꿈
    for (let c of countNum) {
      nums[c - 1].style.backgroundColor = "orange";
    }

    if (start < count) {
      setTimeout(selectNumbers, 100);
    }else{
      result.value = countNum.join(' ,     ');
    }
  }
  selectNumbers(); // 초기 실행
});
