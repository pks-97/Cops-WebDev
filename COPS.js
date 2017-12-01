var clicks=0;//storing current value of clicks
var id=document.querySelector("#butt1");//for button 1
var throttle = function(func, limit) {
  var inThrottle = undefined;
  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);//calls the funcion after 2s
    }
  };
};
id.addEventListener("click",throttle(function(){
    var b1=document.querySelector("#cliks");
    clicks++;
   b1.textContent=clicks+"";},2000));//a time of 2 seconds