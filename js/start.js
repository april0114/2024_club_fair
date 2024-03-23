const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
//result 섹션 선택
const reuslt = document.querySelector("result")
// 질문지의 개수를 endPoint로 설정
const endPoint = 8;
//사용자가 어떤 선택을 했는지 저장하는 배열
const select = [0,0,0,0,0,0,0,0];
// 다시 시작 버튼
const restartButton = document.getElementById('restartButton');

function setQnaSectionWidth(widthPercentage) {
  var qnaSection = document.getElementById("qna");
  if (qnaSection) {
    qnaSection.style.width = widthPercentage + "%";
  }
}
//로딩시 100프로 사이즈
setQnaSectionWidth(100);


function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}
//결과창
function setResult() {
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name || ''; // 대체 텍스트 또는 공백
  
  const imgDiv = document.querySelector('#resultImg');
  const clubImgDiv = document.querySelector('.club_img'); // 동아리 이미지를 추가할 div 선택
  const imgURL = 'img/result/image-' + point + '.jpg';
  
  // 이미지가 로드되지 않았을 때 숨기는 함수
  function hideIfImageNotFound(imgElement) {
    imgElement.onerror = function() {
      this.style.display = 'none';
    };
  }

  // 결과 이미지 생성 및 추가
  if (imgURL) {
    var resultImg = document.createElement('img');
    resultImg.src = imgURL;
    resultImg.alt = '';
    resultImg.classList.add('img-fluid');
    hideIfImageNotFound(resultImg); // 이미지가 로드되지 않았을 때 숨기는 함수 호출
    imgDiv.appendChild(resultImg);
  }
  
  // 동아리 이미지 경로 배열
  const clubImgURLs = [
    [
      'img/club_img/club-' + point + '-1.png',
      'img/club_img/club-' + point + '-2.png',
      'img/club_img/club-' + point + '-3.png',
      'img/club_img/club-' + point + '-4.png',
      'img/club_img/club-' + point + '-5.png',
      'img/club_img/club-' + point + '-6.png',
      'img/club_img/club-' + point + '-7.png'

    ]
    
    // 이하 추가 이미지 경로 배열
  ];
  
  // 각 이미지 경로를 가져와서 이미지 생성 및 추가
  for (let i = 0; i < clubImgURLs.length; i++) {
    for (let j = 0; j < clubImgURLs[i].length; j++) {
        var clubDiv = document.createElement('div'); // 이미지를 감싸는 div 생성
        clubDiv.classList.add('image-wrapper'); // 스타일을 적용할 클래스 추가

        var clubImg = document.createElement('img');
        clubImg.src = clubImgURLs[i][j];
        clubImg.classList.add('img-fluid');
        clubImg.classList.add('rounded-circle');
        clubImg.style.width = '50px';
        clubImg.style.height = '50px';

        clubDiv.appendChild(clubImg); // 이미지를 div에 추가

        clubDiv.style.clear = 'both'; // 각 div를 새로운 줄에 배치
        clubDiv.style.float = 'left'; // 왼쪽 정렬 설정
        clubDiv.style.marginRight = '10px'; // 이미지 간격 조절
        hideIfImageNotFound(clubImg); // 이미지가 로드되지 않았을 때 숨기는 함수 호출
        clubImgDiv.appendChild(clubDiv); // 동아리 이미지를 추가할 div에 div 요소 추가
    }
}

  

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}


function resultaddImage(qIdx) {
  var b = document.querySelector('#');
  b.innerHTML = ''; // 이미지를 초기화

  var questionImage = document.createElement('img');

  var imgURL = 'img/question/question-' + qIdx + '.jpg';
  questionImage.src = imgURL;
  questionImage.alt = 'Question Image ' + qIdx;
  questionImage.classList.add('img-fluid');


  b.appendChild(questionImage);
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
  b.innerHTML = ''; // 이미지를 초기화

  var questionImage = document.createElement('img');

  var imgURL = 'img/question/question-' + qIdx + '.jpg';
  questionImage.src = imgURL;
  questionImage.alt = 'Question Image ' + qIdx;
  questionImage.classList.add('img-fluid');
  questionImage.id = "Iimg";
  questionImage.style.padding = "0";

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

//다시 시작
restartButton.addEventListener('click', function() {
  restartPage(); // 페이지 다시 시작 함수 호출
});

function restartPage() {
  window.location.reload(); // 페이지 새로고침하여 다시 시작
}