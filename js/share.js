function preloadImages(imageURLs) {
  for (var i = 0; i < imageURLs.length; i++) {
      var img = new Image();
      img.src = imageURLs[i];
  }
}

// 페이지 로드 시 이미지 프리로드 실행
window.onload = function() {
  var imageURLs = [
      "img/question/question-0",
      "img/question/question-1",
      "img/question/question-2",
      "img/question/question-3",
      "img/question/question-4",
      "img/question/question-5",
      "img/question/question-6",
      "img/question/question-7",

      // 프리로드할 이미지의 URL을 추가합니다.
  ];
  preloadImages(imageURLs);
}