function clickPicture() {
  var res = '';
  //$.each(data, function(index,item)
  for (i = 0; i < data.length; i++) {
    var pic =
      '<div class="m1" onclick="switchPicture(' +
      i +
      ')">' +
      '<img class="image" src="' +
      data[i].image+
      //item.image +
      '" alt="">' +
      '<p class="name" id="c">' +
      data[i].name+
      //item.name +
      '</p>' +
      '</div>';
    res = res + pic;
  }
  document.querySelector("#mutilple").innerHTML = res;
  switchPicture(0)//讓頁面默認效果先
}


function switchPicture(i) {
  var images = data[i].list;
  var imageRes = '';
  //$.each(data,function(index,item)
  for (i = 0; i < images.length; i++){ 
  
    // 这个插件本身就有一些问题，在5张图片以后样式会变乱，所以我们就强制只让他显示5张
    if (i == 5) {
      break;
    }
    // 这里要按照DEMO给的结构在外层添加上 li 标签
    var pho = '<li class="card"><a href="' + images[i].href + '"><img src="' + images[i].cover + '" alt="Sun" class="card-list__image"/></a></li>';
    imageRes = imageRes + pho;
  }
  document.querySelector('.card-list').innerHTML = imageRes;
 
}
  document.querySelector("#mutilple").onclick=function clickhPicture(i){
  if(document.querySelector('.container').style.display=="none"||
     document.querySelector('.container').style.display==""){
     document.querySelector('.container').style.display='block';    
     }
}  

window.onload = clickPicture;
