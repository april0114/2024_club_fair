const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
//result 섹션 선택
const reuslt = document.querySelector("result")
// 질문지의 개수를 endPoint로 설정
const endPoint = 8;
//사용자가 어떤 선택을 했는지 저장하는 배열
const select = [0,0,0,0,0,0,0,0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}
//결과창
function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.jpg';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

//결과 창 가기 위한 애니메이션
function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    
    setResult();
}

//질문지에 이미지 추가하기 위해서
function addImage(qIdx) {
  var b = document.querySelector('#Ibox');
  
  // 이미지를 초기화합니다.
  b.innerHTML = '';

  var questionImage = document.createElement('img');
  questionImage.classList.add('my-3');
  questionImage.classList.add('col-lg-6');
  questionImage.classList.add('col-md-8');
  questionImage.classList.add('col-sm-10');
  questionImage.classList.add('col-12');
  questionImage.classList.add('mx-auto');
  questionImage.classList.add('fadeIn');

  var imgURL = 'img/question-' + qIdx + '.jpg';
  questionImage.src = imgURL;
  questionImage.alt = 'Question Image ' + qIdx;

  // 이미지를 qBox 아래에 추가합니다.
  b.appendChild(questionImage);
}



//답변 선택
function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }

  var qBox = document.querySelector('.qBox');
  var iBox = document.querySelector('.Ibox');

  // 클래스가 있는지 확인하고 없으면 추가
  if (!qBox) {
    qBox = document.createElement('div');
    qBox.classList.add('qBox');
    document.body.appendChild(qBox);
  }

  if (!iBox) {
    iBox = document.createElement('div');
    iBox.classList.add('Ibox');
    document.body.appendChild(iBox);
  }

  qBox.innerHTML = qnaList[qIdx].q;
  iBox.innerHTML = ''; // 이미지를 초기화

  addImage(qIdx); // 이미지 추가

  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }

  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}




//시작할때 애니메이션
function begin(){
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