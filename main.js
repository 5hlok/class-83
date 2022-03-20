
var lastpositionx, lastpositiony;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="black";
widthofline=5;

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
   lastpositionx= e.touches[0].clientX - canvas.offsetLeft;
   lastpositiony= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    currentpositionofx= e.touches[0].clientX - canvas.offsetLeft;
    currentpositionofy= e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log("last cordinates of x and y=");
        console.log("x="+ lastpositionx + "y=" + lastpositiony);
        ctx.moveTo(lastpositionx,lastpositiony);

        console.log("current cordinates of x and y=");
        console.log("x="+ currentpositionofx + "y=" + currentpositionofy);
        ctx.lineTo(currentpositionofx,currentpositionofy);
        ctx.stroke();

        lastpositionx = currentpositionofx;
        lastpositiony = currentpositionofy;
    
}

