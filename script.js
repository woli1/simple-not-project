const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");
function updateStorage(){
    localStorage.setItem('data',notesContainer.innerHTML);

}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('data');
}
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    
})
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else  if(e.target.tagName==="P"){
        notes=document.querySelectorAll('.input-box');
        notes.forEach((nt) =>{
            //nt.onkeyup=d();
            nt.onkeyup=updateStorage;
            
        })



    }
})
showNotes();
function d(){
    //updateStorage();
    return  localStorage.setItem('data',notesContainer.innerHTML);
}
