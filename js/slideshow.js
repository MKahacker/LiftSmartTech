var slideIndex = 1;
displaySlide(slideIndex);
var ne = document.getElementById("nbutton");
var pr = document.getElementById("pbutton");
ne.addEventListener("click", changeSlide(1), false);
pr.addEventListener("click", changeSlide(-1), false);

function changeSlide(n){
  slideIndex += n;
  displaySlide(slideIndex); 
}

function displaySlide(n){
  var i; 
  var x = document.getElementsByClassName("slide-images");
  if(slideIndex < 1){
    slideIndex = x.lenght;
  }
  if(slideIndex > x.lenght){
    slideIndex = 1;
  }
 /* for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";*/
}
