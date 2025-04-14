let libT = document.getElementById("libT");//library table
let lib = [];
function Book(title, author, pages, isRead){
    if(!new.target){
        throw new Error("call on a construtor");
        
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    //format ex:"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
    this.info = function(){
        return(`${title} by ${author}, ${pages} pages, ${isRead? "read":"not read yet"}`);
    }

}

function libraryTr(b){//generates a row
    const nRow = document.createElement("tr");
    for(const properties in b){
        if(properties != "id"&&typeof(b[properties]) != "function"){
            const data = document.createElement("td");
            const text = document.createTextNode(properties=="isRead"?(b["isRead"]?"read":"not read"):b[properties]);
            if(properties=="isRead"){
                let readButton = document.createElement("button");
                readButton.appendChild(text);
                readButton.setAttribute("id","isRead");
            }else{
                data.appendChild(text);
            }
            nRow.append(data);
           
        }
        
    }

    return nRow;
}
function processBook(title, author, pages, isRead){//adds book to storage and updates display
    //add 
    const b = new Book(title, author, pages, isRead.toLowerCase() == "true");
    /*
    const deleteButton = document.createElement("button");
    const text = document.createTextNode("delete");
    deleteButton.appendChild(text);
    */
    libT.appendChild(libraryTr(b));
    
    lib.push(b);
}

libT.style.borderBlockStyle = "dotted";

export {processBook}