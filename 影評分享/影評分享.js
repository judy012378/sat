var data = []

function comment(){
  var res = '';
  for(i = 0; i< data.length; i++){
    var commentBox = '<div>'+data[i].name +data[i].rank+'</div>'
                     +'<div>'+data[i].comments+'</div>'+
                     '<hr>';
    res += commentBox;
  }
  document.querySelector('#result-gather').innerHTML = res;
}

function answer(){
  var o = {
      name: document.querySelector('#urname').value,
      rank: document.querySelector('#score').value,
      comments: document.querySelector('#comment').value
  }
  data.push(o);
  comment();
}

 