/* 전역 변수 (JS 전체에서 공용으로 사용할 수 있는 변수 */

// 잔액이 출력 되는 span 요소
const output = document.getElementById('output');

// 금액이 입력되는 input 요소
const amount = document.getElementById('amount');

// 잔액을 기록할 변수 (초기값 10000)ㅣ
let balance = 10000;

// 비밀번호 저장 변수(초기값 "1234")
const password = '1234';

// ----------------------------------------------------------

// 함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩(랜더링) 시
//  script 파일이 전체 해석되면 같이 해석/수행 된다

// 잔액 초기 값 출력
output.innerText = balance;

// 금액 입력 input 태그의 value값을 삭제하는 효과
amount.value = "100"; 

/** 연습용 함수 */
function test(){
  // prompt('내용')
  // - 알림창에 값을 입력할 수 있는 형태

  // - 확인 클릭 : 입력 된 값 반환
  // - 취소 클릭 : null 반환
  const pw = prompt('비밀번호를 입력하시오')
  
  console.log("pw : ", pw );

  if(pw === null){ //취소 클릭 시
    alert("비밀번호 입력 취소됨");
      return;
  }

  // 입력 받은 비밀번호(pw)와
  // 전역 변수 password가 다를 경우 == 비밀번호 불일치
  if(pw != password){
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  // 비밀번호 일치
  alert("출금 기능 수행");
}

/** 입금하기 */
function deposit(){
  balance += Number(amount.value);
  // balance = balance + Number(amount.value);

  output.innerText = balance; // 화면에 누적된 잔액 출력
  amount.value = ""; // 입력하려고 작성한 금액 삭제
  

}

/** 출금하기 */
function withdrawal(){
  // 출금 버튼 클릭 시 prompt를 이용해 비밀번호 입력 받기

  const pw = prompt("비밀번호를 입력하세요");

  if(pw === null){ // prompt에서 취소 클릭
    alert("비밀번호 입력 취소");
    return;  
  }

  if(pw !== password){ // 입력받은 pw와 전역변수 password 불일치
    alert("비밀번호가 일치하지 않습니다");
    return;  
  }

  // 출금
  const val = Number(amount.value); // 입력 받은 금액 number 타입 변환

  // 출금할 금액이 잔액(balance) 보다 큰 경우
  // -> alert("출금 금액이 잔액보다 클 수 없습니다") 출력
  if(val > balance){
    alert("출금 금액이 잔액보다 클 수 없습니다.");
    return;
  }
  // 출금할 금액이 잔액(balance) 보다 작거나 같은 경우
  // -> 잔액(balance)에서 출금 금액만큼 감소 시킨 후
  balance -= val; // balance를 val 만큼 차감

  output.innerText = balance; // 화면에 차감된 금액 출력
  amount.value = "";  // 입력된 금액 삭제

  // alert("000원이 출금 되었습니다. 남은 금액 000원") 출력
  alert(`${val}원이 출금 되었습니다. 남은 잔액 : ${balance}`);
}


/* 
변수 선언 및 대입
    - const amount = [빈칸 작성];  // 금액 입력 input
    - let balance = 10000;       // 잔액 기록 변수 (초기값 10000)
    - const password = '1234';     //비밀번호 저장 변수(초기 비밀번호 1234)


    함수 작성
    1. 입금 ->  function deposit(){}
    * 입금 버튼 클릭 시 
      input에 입력된 금액 만큼 잔액(balance)에 추가


    2. 출금 ->  function withdrawal(){}
    * 출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기


    * 비밀번호가 일치할 경우
      1) 출금할 금액이 잔액(balance) 보다 큰 경우 
        -> alert("출금 금액이 잔액보다 클 수 없습니다") 출력
      
      2) 출금할 금액이 잔액(balance) 보다 작거나 같은 경우
        -> 잔액(balance)에서 출금 금액만큼 감소 시킨 후
          alert("OOO원이 출금 되었습니다. 남은 잔액 : OOO원") 출력

    * 비밀번호가 일치하지 않을 경우
      -> alert("비밀번호가 일치하지 않습니다") 출력
*/