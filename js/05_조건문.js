/** if 예제 - 양수인지 검사 */ 
function check1(){

  // id가 "input1"인 요소를 얻어와 in1 상수에 저장
  const in1= document.getElementById("input1");

  // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여
  // val 변수에 저장
  const val = Number(in1.value);

  // 양수(0보다 큰 수)가 맞는지 검사
  if(val > 0){
    // 조건식이 true인 경우 수행할 코드;

    alert(`${val} 은/는 양수입니다.`); 
    // alert : 브라우저 알림창 띄우기
  }

  // 양수가 아닌 경우
  if(val <= 0){
    alert(`${val} 은/는 양수가 아닙니다.`);
  }
}

/** 1 ~ 100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){

  // 난수 발생 : Math.random();
  // 0.0 <= 난수 < 1.0

  // 1 ~ 100 사이 난수 발생
  // Math.random()  -> 0.0 <= 난수 < 1.0
  // Math.random() *100  -> 0.0*100 <= 난수 < 1.0*100
                      // -> 0.0 <= 난수 * 100 < 100.0
  
                      // Math.random() *100 +1 -> 1.0 <= 난수*100+1 < 101.0
  
  // 내림 처리 : Math.floor(실수);

  // Math.floor(Math.random() *100 +1) -> 1 <= 난수 < 101

  // 1~100 사이 난수를 발생시켜 randomNumber 변수에 저장
  const randomNumber = Math.floor(Math.random() *100 +1);


  // 발생된 난수가 홀수인지 검사
  if(randomNumber % 2 === 1){
    alert(`${randomNumber}은/는 [홀수] 입니다.`);
  }
  else{ // 홀수가 아닌 경우 == 짝수인 경우
    alert(`${randomNumber}은/는 [짝수] 입니다.`);
  }
}

/** 양수, 음수, 0 판별기 */
function check3(){
  const input3 = document.getElementById("input3"); // 문서 내에서 id가 input3인 
  const val = Number(input3.value);                 // 요소를 가져와서 input3에 대입 */

  let result; // 결과를 저장할 변수 선언 (현재 undefined)

  // 양수 판별
  if(val > 0){
    result = '양수';
  }

  // 음수 판별
  else if(val < 0){
    result = '음수';
  }

  // 양수, 음수 아닌 경우
  else{
    result = '0';
  }

  // if / else if / else 에 모두 result 값 대입 코드 작성
  // -> 무조건 result에는 값이 대입되도록 되어있다!
  alert(`${val}은/는 ${result} 입니다.`);
}

function enterkey(){
}

function ageCheck(){
  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value);

  if((0 <= age) && (age <= 13)){
    alert(`${age}은/는 어린이 입니다. `);
  }
  else if((14 <= age) && (age <= 19)){
    alert(`${age}은/는 청소년 입니다.`);
  }
  
  else if((20 <= age) && (age <= 120)){
    alert(`${age}은/는 성인 입니다.`);
  }

  else{
    alert('잘못 입력 하셨습니다.');
  }
}

  /** (실습문제) 어린이, 청소년, 성인 구분하기 2 */
  // ageCheck2()은 각자 문제 푼 코드
  function ageCheck2(){
    const inputAge = document.getElementById("inputAge");
    
    const age = Number(inputAge.value);


    let result; //결과 저장용 변수

    // 잘못 입력된 경우
    if(age < 0 || age > 120){
      result = '잘못 입력하셨습니다.';
    } else if(age <= 13){
      result = '어린이 입니다.';
    } else if(age <= 19){
      result = '청소년 입니다.';
    } else{
      result = '성인 입니다.';
    }
    alert(result);
  }
