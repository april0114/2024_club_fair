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
    "img/question/question-7.jpg",
    "img/result/image-0.jpg",
    "img/result/image-1.jpg",
    "img/result/image-2.jpg",
    "img/result/image-3.jpg",
    "img/result/image-4.jpg",
    "img/result/image-5.jpg",


  ];

  function preloadImages(imageURLs) {
    for (var i = 0; i < imageURLs.length; i++) {
      var img = new Image();
      img.src = imageURLs[i];
    }
  }
  
  preloadImages(imageURLs);
}
