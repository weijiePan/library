import {processBook} from "./library.js"
let form = document.querySelector("form");
form.addEventListener("click", (e)=>{
    if(e.target.id == "submit"){
        e.preventDefault();
        //parameters:title, author, pages, isRead
        processBook(form["title"]["value"],form["author"]["value"],form["pages"]["value"],form["read"]["value"]);
    
    }


})