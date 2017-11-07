var i = elementHeight = document.getElementById('holder').offsetHeight;

var open = false;
var show;
var icon;
function showMore(icon){
  clearTimeout(show);
  if(open == false && icon == 'first'){
      document.getElementById('icon_minus').className = 'fa fa-plus-square-o';
  } if(open == false && icon == 'second'){
      document.getElementById('icon_minus2').className = 'fa fa-plus-square-o';
  } if(open == true && icon == 'first'){
      document.getElementById('icon_minus').className = 'fa fa-minus-square-o';
  } if(open == true && icon == 'second'){
      document.getElementById('icon_minus2').className = 'fa fa-minus-square-o';
  }

  collapse(open);
}
function collapse(){ 
  show = setTimeout(function(){
    var holder = document.getElementById('holder').style.height = i + 'px';
    // var holder2 = document.getElementById('holder2').style.height = i + 'px';

    if (open == false) {
        i++;
    } else{
      i--;
    }
    // var holder = document.getElementById('holder').style.height = i + 'px';
    if(i == 175){
      open = true;
      return false;
    } if (i == elementHeight) {
      open = false;
      return false;
    }
    showMore();
  },1);
}
