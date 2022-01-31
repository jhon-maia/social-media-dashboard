const btnDark=document.querySelector(".dark-mode-btn");
const body=document.querySelector("body");
const card=document.querySelectorAll(".social-media-box");
const header=document.querySelector("header");
const span=document.querySelectorAll("span");
const p=document.querySelectorAll("p");
const overviewBox=document.querySelectorAll(".overview-box");
const h1=document.querySelector("h1");


let darkOn=true;

btnDark.addEventListener("click",changeLigth);


function changeLigth()

{
	if (darkOn==true){
	body.style.backgroundColor="hsl(0, 0%, 100%)";

	card.forEach(card=>{
    
    card.style.backgroundColor="hsl(227, 47%, 96%)";
    card.style.color=" hsl(230, 17%, 14%)";

	});


	header.style.backgroundColor="hsl(227, 47%, 96%)"
	header.style.color=" hsl(230, 17%, 14%)";
   

   span.forEach(span=>{
    
     span.style.color="hsl(230, 17%, 14%)"

   });


   
   p.forEach(p=>{
      
      p.style.color="hsl(230, 17%, 14%)"


   });



   overviewBox.forEach(overviewBox=>{

   overviewBox.style.backgroundColor="hsl(227, 47%, 96%)";


   });


  h1.style.color="hsl(230, 17%, 14%)";


	darkOn=false;
 }else{
 	changeDark();
 }

}



function changeDark()
{
	body.style.backgroundColor=" hsl(230, 17%, 14%)";

	card.forEach(card=>{
    
    card.style.backgroundColor=" hsl(228, 28%, 20%)";
    card.style.color="hsl(0, 0%, 100%)";

	});


	header.style.backgroundColor="hsl(228, 28%, 20%)"
	header.style.color="hsl(0, 0%, 100%)";
   

   span.forEach(span=>{
    
     span.style.color="hsl(0, 0%, 100%)"

   });


   
   p.forEach(p=>{
      
      p.style.color="hsl(0, 0%, 100%)"


   });



   overviewBox.forEach(overviewBox=>{

   overviewBox.style.backgroundColor="hsl(228, 28%, 20%)";


   });


  h1.style.color="hsl(0, 0%, 100%)";

  
	darkOn=true;

}

