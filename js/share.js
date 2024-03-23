window.onload = function() {
  var imageURLs = [
    "img/question/question-0.jpg",
    "img/question/question-1.jpg",
    "img/question/question-2.jpg",
    "img/question/question-3.jpg",
    "img/question/question-4.jpg",
    "img/question/question-5.jpg",
    "img/question/question-6.jpg",
    "img/question/question-7.jpg",
    // 나머지 이미지 경로들도 추가해주세요.
  ];

  function preloadImages(imageURLs) {
    for (var i = 0; i < imageURLs.length; i++) {
      var img = new Image();
      img.src = imageURLs[i];
    }
  }
  
  preloadImages(imageURLs);
}
