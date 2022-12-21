 var c=0;
 var a=0;
 var f=0;
var y;
function start(){
    
  y=setInterval(run,100);
function run(){
    if(a==1280 || c==1250|| f==1190){
        clearInterval(y);
        c=0;
        f=0;
        a=0;
    }
    else{
        f+=8;
    c+=12;
    a+=15;
    var x=document.getElementById("car").style.marginLeft=c+'px';
    var z=document.getElementById("amb").style.marginLeft=a+'px';
    var d=document.getElementById("fer").style.marginLeft=f+'px';
}
}
}
function stop(){
    clearInterval(y)
}
