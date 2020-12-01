function exchange(){
  var us=(0.14*100)/100;
  var input = document.querySelector(".input1").value;
  var result= us * input;
  document.querySelector(".input2").value = result;
}
function exchangeJpy(){
  var jpy=(15.16*100)/100;
  var input = document.querySelector(".input3").value;
  var result= jpy * input;
  document.querySelector(".input4").value = result;
}
function exchangePh(){
  var ph=(7.34*100)/100;
  var input = document.querySelector(".input5").value;
  var result= ph * input;
  document.querySelector(".input6").value = result;
}