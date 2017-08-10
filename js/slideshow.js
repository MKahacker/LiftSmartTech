var slideIndex = 1;
displaySlide(slideIndex);

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
  x[slideIndex-1].style.display = "block;
}
