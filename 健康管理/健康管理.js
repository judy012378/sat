function answer(){
  
  var height = document.querySelector(".height").value;
  var weight = document.querySelector(".weight").value;
  var age = document.querySelector(".age").value;
  var sex = document.querySelector('input[name="sex"]:checked').value;

  var g=0;
  if (sex=="female"){
    g=0;
  }else{
    g=1;
  }

  var bmi = weight / (height * height / 10000);
  var bfr = 1.2 * bmi + (0.23 * age) - 5.4 - (10.8 * g);
  var result="";

 if (sex =="female"){
  if(bfr > 5 && bfr <= 20){
    result="偏瘦"
    }
  if(bfr>20 && bfr<=34){
    result="正常"
    }
  if(bfr>34 && bfr<=39){
    result="超重"
    }
  if(bfr>39 && bfr<=45){
    result="肥胖"
    }
  }else{
  if(bfr>5 && bfr<=10){
    result="偏瘦"
    }
  if(bfr>10 && bfr<=21){
    result="正常"
    }
  if(bfr>21 && bfr<=26){
    result="超重"
    }
  if(bfr>26 && bfr<=45){
    result="肥胖"
    }
  }  

  document.querySelector(".result").innerHTML = "體脂率是" + bfr + " 當前狀態：" + result;
  
}
