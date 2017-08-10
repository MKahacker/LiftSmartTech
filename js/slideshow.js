var slideIndex = 1;
displaySlide(slideIndex);

function changeSlide(n){
  slideIndex += n;
  displaySlide(slideIndex); 
}

function displaySlide(n){
  var i; 
  var x = document.getElementsByClassName("slide-images");
  if(slideIndex < 1){
    slideIndex = x.length;
  }
  if(slideIndex > x.length){
    slideIndex = 1;
  }
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
