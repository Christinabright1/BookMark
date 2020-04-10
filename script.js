# BookMark

//UI constructor
class Book{
    constructor(name, url){
        this.name= name;
        this.url= url;
    }
}

let myForm= document.getElementById("form");

//create load function which will load all event Listener

loadEventListeners();
//instantiate book
  function loadEventListeners(){
      //add book event Listener
     myForm.addEventListener('submit', addBook);
  }

  //select div
//let div= document.getElementById("addBookmark");
//select ul
let ul= document.querySelector("ul");
let li= document.querySelector("li");
  //create add book function
  function addBook(e){
    let nameValue= document.getElementById('siteName').value;
    let urlValue= document.getElementById("urlLink").value;
    let book= new Book(nameValue, urlValue);
    //create li
    const div= document.createElement('div');
      div.className='list';

        div.innerHTML = `
        <span class="link"><a href="${book.url}">${book.name}</a></span>
         <button class="visit">Visit</button>
         <button class="delete">Delete</button>
`;
     
     
     li.appendChild(div);
     ul.appendChild(li);
        e.preventDefault();
  }



