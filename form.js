import {processBook} from "./library.js"
let form = document.querySelector("form");
let libT = document.getElementById("libT");
form.addEventListener("click", (e)=>{
    if(e.target.id == "submit"){
        e.preventDefault();
        //parameters:title, author, pages, isRead
        processBook(form["title"]["value"],form["author"]["value"],form["pages"]["value"],form["read"]["value"]);
    
    }


})
libT.addEventListener("click",function(e){
    if(e.target.id == "isRead"){
        e.target.textContent = e.target.textContent == "read"? "not read":"read";
    }
    if(e.target.id == "delete"){
        e.target.parentNode.parentNode.remove();
    }
})
