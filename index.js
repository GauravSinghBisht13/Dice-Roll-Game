var rand=Math.floor(Math.random()*6)+1;

var imaagesource="./images/dice"+ rand +".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imaagesource);


var rands=Math.floor(Math.random()*6)+1;

var imaagesources="./images/dice"+ rands +".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",imaagesources);

if(rand>rands)
{
    document.querySelector("h1").innerHTML=" Player 1 Wins";
}

else if (rand==rands)
{
    document.querySelector("h1").innerHTML="Its a draw";
}

else
document.querySelector("h1").innerHTML=" Player 2 Wins";
