function fontSize() {
    var size =  parseInt( document.getElementById('text').style.fontSize);
    document.getElementById('text').style.fontSize = size + 2 + "pt" ;
    // alert("Hello World!");
    console.log("hi");

}

function checkStyle(){
  if (document.getElementById('Bling').checked)  {
    document.getElementById('text').style.fontWeight = "bold";
    document.getElementById('text').style.color = "green";
    document.getElementById('text').style.textDecoration = "underline";

   } 
   else 
   {
    document.getElementById('text').style.fontWeight = "normal";
    document.getElementById('text').style.color = "";
    document.getElementById('text').style.textDecoration = "";
   }
    
}

function bigFont(){
    document.getElementById('text').style.fontSize = "12pt" ;
   
    setInterval(fontSize, 500);
}

