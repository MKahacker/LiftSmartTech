var slideIndex = 1;
displaySlide(slideIndex);
var ne = document.getElementByIdName("nbutton");
var pr = document.getElementByIdName("pbutton");
ne.addEventListener("click", changeSlide(1), false);
pr.addEventListener("click", changeSlide(-1), false);

function changeSlide(n){
  displaySlide(slideIndex += n); 
}

function displaySlide(n){
  var i; 
  var x = document.getElementsByClassName("slide-images");
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
