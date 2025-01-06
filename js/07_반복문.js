/* 
  [작성법]

        for([1]초기식; [2]조건식; [4]증감식){
          // [3]조건식이 true일 경우 수행할 코드;
        }

        * 처음 for문이 수행 될 때만 [1] 초기식을 수행
        -> 두 번째 반복부터는 [2],[3],[4] 만 반복

        초기식 : for문을 제어하는 용도의 변수 선언

        조건식 : for문의 반복 여부를 지정하는 식
              - true일 때 반복
                false가 되는 순간 바로 반복(for) 종료

              - 보통 초기식에 사용된 변수를 이용해서
                조건식을 작성함

        증감식 : 초기식에 사용된 변수값을 변환시키는 식
              
              - 변환된 초기식에 의해서 조건식의 결과가 달라지게 함
*/


/** 콘솔에 12345 출력하기 */
function check1(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);

  console.log("-------------------------");
  
  /* for문 버전 */
  
  // num 값이 1부터 5까지 1씩 증가하는 동안 반복
  for(let num = 1; num<6; num++){
    console.log(num);

    // [초기식] let num = 1;
    //      -> 1이 저장된 변수 num을 선언

    // [조건식] num < 6
  //        -> num 변수에 저장된 값이 5 이하면 true
  //        -> 반복 O == for문 {} 내부 코드를 수행해라

  //        -> num 변수에 저장된 값이 5 이하가 아니면 false
  //        -> 반복 X == for문 {} 내부 코드를 수행하지 말아라

    //  [증감식] num++
    //  -> num 변수에 저장된 값을 반복 때 마다 1 증가
  }
}


/** 콘솔에 1~10까지 1씩 증가하며 출력하기 */
function check2(){
  for(let num=1; num<=10; num++){
    console.log(num);
  }
}

/** 콘솔에 5~13까지 1씩 증가하며 출력하기 */
function check3(){
  for(let num=5; num<=13; num++){
    console.log(num);
  }
}

/** 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4(){
  
  let result = ""; // 결과를 저장할 반수에 ""(빈칸) 대입

  for(let num=1; num<=7; num++){
    result += num;  // result = result + num;
  }
  console.log(result);
}

/** 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5(){
  
  let result = ""; 
  // result에 ""(빈칸)을 대입하는 이유
  // -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
  //  -> undefined는 산술 연산의 대상이 될 수 없음!
  //   -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨

  for(let num=4; num<=11; num++){
    result += num;  // result = result + num;
  }
  console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자의 합 */
function check6(){
  let sum =0;
  for(let num =1; num <= 10; num++){
    sum += num;
  }
  console.log(sum);
}

/** 입력 받은 값 사이 정수값들의 합 구하기 */
function check7(){
  // 모든 값 입력 되어있고 
  // 입력 1이 입력 2보다 작다고 가정
  const a = Number(document.getElementById("input7a").value);
  const b = Number(document.getElementById("input7b").value);

  let sum = 0;

  for(let num=a; num<=b; num++){
    sum += num;
  }

  alert(`${a} 부터 ${b} 사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기 */
function check8(){
  let sum = 0;
  
  for(num=1; num<11; num += 2){
    sum += num;
    console.log(num);
  }
  console.log("합계 : ",sum);
}

/** 3부터 30까지 3의 배수만 출력하기 */
function check9(){
  // 1) 증감식 변경
  let result = "";
  for(let num = 3; num < 31; num += 3 ){
    result += num + " ";
  }
  console.log(result);
 
  // 2) for문 + if문
  let result2 = "";
  for(i = 3; i <= 30; i++){
    if(i % 3 === 0){
      result2 += i + " ";
    }    
  }
  console.log(result2);
}

/** 입력 받은 범위 내 지정된 수의 배수를 출력(한 줄), 합계 구하기 */
function check10(){
  const start = Number(document.getElementById("start10").value);
  const end = Number(document.getElementById("end10").value);
  const multiple = Number(document.getElementById("multiple10").value);
  sum = 0;
  result = "";

  for(i = start; i <= end; i++){

    // start 부터 end 까지 1씩 증가하는 num이 
    // multiple로 나눴을 때 나머지가 0인 경우
    // == num이 multiple의 배수인 경우
    if(i % multiple === 0){
      result += i + " ";
      sum += i;
    }
  }  
  console.log(result);
  console.log(sum);  
}

/** 구구단 2단 출력하기 */
function check11(){
  for(i = 1; i <= 9; i++){
    console.log(`2 x ${i} = `, 2*i);
  }
}

/** 입력 받은 단의 구구단 출력하기 */
function check12(){
  const dan = document.getElementById("dan");
  const v1 = Number(dan.value);

  if(dan.value.length === 0){
    alert("단을 입력해주세요");
    return;
  }

  if( 2 > v1 || v1 > 9){
    alert("2~9단 사이만 입력해주세요");
    return;
  }

  for(i = 1; i <= 9; i++){
    console.log(`${v1} x ${i} = ${v1*i}`);
  }
}

/** 10부터 1까지 1씩 감소하며 출력하기 */
function check13(){
  for(i=10; i>=1; i--){
    console.log(i);
  }
}

/** 20부터 3까지 3씩 감소하며 출력하기 */
function check14(){
  for(i=20; i>=3; i-= 3){
    console.log(i);
  }
}

/** 3단 거꾸로 출력하기 */
function check15(){
  for(i=9; i>=1; i--){
    console.log(`3 x ${i} = ${3*i}`);
  }
}

/** 5의 배수마다 @, 10의 배수마다 줄바꿈 하면서 출력하기 */
function check16(){
  let result = "";
  for(i=1; i<=30; i++){
    if(i % 5 === 0){ // 5의 배수인 경우
      result += "@";

    }else{ // 5의 배수가 아닌 경우
    result += i + " ";
    }

    // 10의 배수마다 줄바꿈(따로 생각해야되는 조건)
    if(i % 10 === 0){
      result += "<br>"; // 줄바꿈 태그 추가
    }
  }
  
  // #result16에 출력(HTML 해석)
  document.getElementById("result16").innerHTML = result;
}