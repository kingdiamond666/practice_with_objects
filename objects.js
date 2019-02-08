const inpTitle = document.querySelector('.title');
const inpAuthor  = document.querySelector('.author');
const inpPgs = document.querySelector('.pgNum');
const inpYes = document.querySelector('.yes');
const inpNo = document.querySelector('.no');
const inputForm = document.querySelector('.inputForm');
const lib = document.querySelector('.library');
const libBtm = document.querySelector('.lib-btm');
const deleteButton = document.querySelector('.delete');

inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    let newBook = addBookToLibrary(inpTitle.value, inpAuthor.value, inpPgs.value, inpYes.checked ? true : false );
    console.log(myLibrary);
    render(newBook);
    clearVals();
})
function Book(title, author, pages, hasRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.hasRead = hasRead,
    this.info = () => (`${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'have read' : 'not read yet'}`)
}

// let book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
// console.log(book.info());
let myLibrary = [
    {
        title: 'The Hobbit', 
        author: 'J.R.R. Tolkien',
        pages: 295,
        hasRead: false
    },
    {
        title: 'Space Wolf Ombnibus',
        author: 'William King',
        pages: 555,
        hasRead: true
    },
    {
        title: 'Babel-17', 
        author: 'Samuel Delany',
        pages: 400,
        hasRead: false
    }
]
myLibrary.forEach(book => render(book));
myLibrary.forEach(book => console.log(book))




function addBookToLibrary(title, author, pages, hasRead){
    let book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
    return book;
}

function render(book){
    let displayObj = {
        titleContent: null,
        title: null,
        author: null,
        authorContent: null,
        pageNum: null,
        pageNumContent: null,
        hasRd: null,
        hasRdVal: null
    }
    let card;

    
        //assign inner html element to li>h1, li>p, etc to be rendered on the page
    displayObj.hasRd = document.createElement("P");
    displayObj.title = document.createElement("H1");
    displayObj.author = document.createElement("H2");
    displayObj.pageNum = document.createElement("P");
    let delBtn = document.createElement("BUTTON");
    
    

    displayObj.hasRdVal = document.createTextNode(book.hasRead ? "You read it" : "Not yet read");
    displayObj.titleContent = document.createTextNode(book.title);
    displayObj.authorContent = document.createTextNode(book.author);
    displayObj.pageNumContent = document.createTextNode(`${book.pages} pages`);
    let delBtnTxt = document.createTextNode("Delete Entry");

    displayObj.hasRd.appendChild(displayObj.hasRdVal);
    displayObj.title.appendChild(displayObj.titleContent);
    displayObj.author.appendChild(displayObj.authorContent);
    displayObj.pageNum.appendChild(displayObj.pageNumContent);
    delBtn.appendChild(delBtnTxt);

    card = document.createElement("div");
    delBtn.classList.add("delete");
    card.classList.add("card");
    card.appendChild(displayObj.title);
    card.appendChild(displayObj.author);
    card.appendChild(displayObj.pageNum);
    card.appendChild(displayObj.hasRd);
    card.appendChild(delBtn);
    
    delBtn.onclick = function(e) {lib.removeChild(this.parentNode)}
    lib.insertBefore(card, libBtm);


    
}


function clearVals(){
    inputForm.childNodes.forEach(element =>{
        element.value = '';
    })
    inpYes.checked = false;
    inpNo.checked = false;
}