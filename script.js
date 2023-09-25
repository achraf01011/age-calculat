  function years (){
var x=document.getElementById("y").value;
var year = new Date().getFullYear();
var ny = year-x ;
return(ny);  }
    

function days (){
    var x=document.getElementById("y").value;
    var year = new Date().getFullYear();
    var ny = year-x ;
    var nyd =ny*365
    return(nyd);  }
    function months (){
        var x=document.getElementById("y").value;
        var year = new Date().getFullYear();
        var ny = year-x ;
        var nym =ny*12
        return(nym);  }
function results() {
var show = document.getElementById("result");

if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";


 
}}

function shw(){
 var div = document.getElementById("last");
  div.innerHTML="You have lived "+years()+" years, and you've spent a total of  "+days()+ " days and " +months()+ " months ";
  
  div.style.color="green";
  div.style.fontFamily="fantasy"
  



}