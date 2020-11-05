var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(200,200,20,0,2*Math.PI);
ctx.stroke();
 
canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e){
    x= e.clientX - canvas.offsetLeft;
    y= e.clientY - canvas.offsetTop;
    console.log(x+"   "+y);
    console.log(canvas.offsetTop+"  "+e.clientY);
    circle(x,y);
}
function circle(x,y){
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.linewidth=2;
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.stroke();
}
function color_change(){
color=document.getElementById("colorname").value;

}