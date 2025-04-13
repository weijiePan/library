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
function addBookToLibrary(title, author, pages, isRead){
    const b = new Book(title, author, pages, isRead);
    lib.push(b);
}
function displayBooks(){
    for(const b of lib){
        const nRow = document.createElement("tr");
        for(const properties in b){
            if(properties == "id" || typeof(b[properties]) == "function"){
                continue;
            }
            const data = document.createElement("td");
            data.appendChild(document.createTextNode(b[properties]));
            nRow.appendChild(data);
        }
        libT.appendChild(nRow);
    }
}
addBookToLibrary("ball", "joe", 232, true);
displayBooks();
libT.style.borderBlockStyle = "dotted";