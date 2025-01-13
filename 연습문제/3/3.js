const btn = document.getElementById("btn");
// btn이라는 id요소를 찾아 btn 객체에 저장

const result = document.getElementById("result");
// result 라는 id요소를 찾아 result 객체에 저장

const fruitList = document.getElementsByClassName("fruit");
// class이름이 fruit 라는 요소를 찾아 fruitList 객체에 저장 
// fruit 요소가 3개이기 때문에 배열 형태로 저장됨

btn.addEventListener("click", () => {
  // btn 버튼을 클릭했을 때

  let str = "";
  // 메시지를 저장할 변수 str

  let sum = 0;
  // 과일 x 갯수 를 저장할 변수 sum


  for (let fruit of fruitList) {
    /* fruitList[
        <input type="checkbox" class="fruit" id="apple">,
        <input type="checkbox" class="fruit" id="banana">,
        <input type="checkbox" class="fruit" id="melon">
        ]
     */
    console.log(fruit);

    if (fruit.checked) {
      // furit 요소의 체크박스가 체크되었을 때 
      const label = fruit.nextElementSibling.innerText;
      // fruit 요소에 다음 요소의 텍스트 콘텐츠를 가져와 label에 저장

      const price = fruit.nextElementSibling.nextElementSibling.innerText;
      // fruit 요소의 다음 다음 요소의 텍스트 콘텐츠를 가져와 price에 저장

      const input = fruit.nextElementSibling.nextElementSibling.nextElementSibling.value;
      // fruit 요소의 다음 다음 다음 요소의 텍스트 콘텐츠의 value 값을 가져와 price에 저장

      sum += Number(price) * input;
      // price 콘텐츠를 number 타입으로 변한 값과 price 값을 곱하여 sum에 저장

      str += label + " " + input + "개 ";
      // label 요소 내용 + input 요소 내용 
    }
  }

  str += "총합 " + sum + "원";
  // label 요소 내용 + input 요소 내용 + 총합 sum + 원


  result.innerText = str;
  // result 요소의 텍스트 콘텐츠에 
  // label 요소 내용 + input 요소 내용 + 총합 sum + 원을 넣음
});