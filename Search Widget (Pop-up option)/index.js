
window.companyName="Add Company Name"//Add your Company Name
window.token="Add Token"// Add your token, this is gotten by clicking on the Simple Integration link then
// clicking copy link under Premium Integration
// e.g:https://chidiejike.wixsite.com/trackimize/embedded-security-search-private?search=44cse0aa-9753-47fe-a4ac-efe1dwee73de 
// 44cse0aa-9753-47fe-a4ac-efe1dwee73de would be your token
// Note: You must be logged in and filled the ownership form to access your token, do not leave spaces
// Note: Your token is not a secret key and does not compromise security
function caller(){
document.getElementById("total").innerHTML="Loading Items...";
const Http = new XMLHttpRequest();
const url="https://www.trackimize.com/_functions/myFunction/totalEntries";
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
console.log((JSON.parse(Http.responseText)).items)
document.getElementById("total").innerHTML=((JSON.parse(Http.responseText)).items).toString()+" Items";
return ((JSON.parse(Http.responseText)).items).toString()
  }
}
function caller2(){
document.getElementById("total").innerHTML="Loading Items..."; 
const Http = new XMLHttpRequest();
const url="https://www.trackimize.com/_functions/myFunction/"+window.token;
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
console.log((JSON.parse(Http.responseText)).items)
if((JSON.parse(Http.responseText)).items!==1){
document.getElementById("total").innerHTML=window.companyName+" has "+(JSON.parse(Http.responseText)).items+" Items"
}
else if((JSON.parse(Http.responseText)).items===1){
document.getElementById("total").innerHTML=window.companyName+" has 1 Item"}
return ((JSON.parse(Http.responseText)).items)
  }
}
if(window.token===""){
caller()
}
else if(window.token!==""){
document.getElementById("total").value=window.token
caller2()
}
  function goto(){
    window.searr=document.getElementById("searcher").value;
    if(window.token!==""){
        window.open("https://chidiejike.wixsite.com/trackimize/embedded-security-search-personal?token="+window.token+"&param="+window.searr+"&parame="+window.companyName,"_blank","height=500px, width=805px, top=140px, left=275px")}
    else if(window.token===""){
    window.open("https://chidiejike.wixsite.com/trackimize/embedded-security-search?search="+window.searr,"_blank","height=500px, width=805px, top=140px, left=275px")}
  }
  
  var input = document.getElementById("searcher");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("clicker").click();
  }
});

