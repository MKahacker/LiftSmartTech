var slideIndex = 1;
displaySlide(slideIndex);
document.getElementByClassName("next").addEventListener("click", changeSlide(1), false);
document.getElementByClassName("prev").addEventListener("click", changeSlide(-1), false);

function changeSlide(n){
  displaySlide(slideIndex += n); 
}

function displaySlide(n){
  var i; 
  var x = document.getElementByClassName("slide-images");
  if(n < 1){
    slideIndex = x.lenght;
  }
  if(n > x.lenght){
    slideIndex = 1;
  }
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
