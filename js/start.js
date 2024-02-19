const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
//result 섹션 선택
const reuslt = document.querySelector("result")
// 질문지의 개수를 endPoint로 설정
const endPoint = 8;
//사용자가 어떤 선택을 했는지 저장하는 배열
const select = [0,0,0,0,0,0,0,0];

function calResult(){

//value가 가장 높은 값을 결과값을불러와주기 => 정렬 먼저
var result = select.indexOf(Math.max(...select));
return result;



}
  for (let i =0; i<endPoint; i++){
    //target 안에 질문 i 번째의 선택 정답 변수를 넣어줌
    var target = qnaList[i].a[select[i]]
    //사용자가 지정해둔 type에 대해 반복문이 돎
    for (let j= 0; j< target.type.length; j++){
      //k는 pointarray를 반복하게 됨 type에 담겨 있는 값과, point array의 이름이 일치하면 값을 증가
      for (let k=0; k<pointArray.length; k++){
        if(target.type[j] === pointArray[k].name ){
          pointArray[k].value += 1;
        }
      }
    }

  }




//qna가 꺼지고 result가 켜져야함
function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)
  })
  console.log(select);
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function () {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      //사용자가 몇번째 질문에서 몇번째 버튼을 눌렀는지 배열에 넣어주기
      var target = qnaList[qIdx].a[idx].type;
    //사용자가 지정해둔 type에 대해 반복문이 돎
    for (let j= 0; j< target.type.length; j++){
    
      select[type[i]] += idx;
    }
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    //몇번째 버튼을 클릭했는지 알 수 있게 하기 위해 i추가
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}