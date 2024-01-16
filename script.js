var add=document.querySelector(".add-btn");
var input=document.getElementById("input")
var  ul=document.querySelector(".li-container")


add.addEventListener("click",addtask)

function addtask(){
    if (input.value ===''){
        alert("Please enter a task")
    }
    else{
        var li=document.createElement("li")
        li.textContent=input.value;
        ul.appendChild(li);
        var span =document.createElement("span")
        span.innerHTML="<img src='images/delete.png'>"
        li.appendChild(span)
        
    }
    savedata()
    input.value='';
    
}


ul.addEventListener("click",function(e){

   if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        
        savedata()
       
   }
   else if(e.target.tagName==="IMG"){
        e.target.parentElement.parentElement.remove()
        
        savedata()
   }
   
})

function savedata(){
    localStorage.setItem("task",ul.innerHTML)

}
function showdata(){
    ul.innerHTML=localStorage.getItem("task")
}


  

showdata()
