var slideIndex = 0;
var justChanged = 0;
autoSlide();

function changeSlide(n){
  justChanged = 1;
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

function autoSlide(){
  var i;
  var x = document.getElementsByClassName("slide-images");
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > x.length){
    slideIndex = 1;
  }
  x[slideIndex-1].style.display = "block";
  if(justChanged == 0){
    setTimeout(autoSlide, 4000);
  }else if(justChanged != 0){
    justChanged = 0;
    setTimeout(autoSlide, 8000); 
  }
}
