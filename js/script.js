// /******************************************
// Treehouse Techdegree:
// FSJS project 2 - List Filter and Pagination
// ******************************************/
//
// // Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
//
//
// /***
//    Add your global variables that store the DOM elements you will
//    need to reference and/or manipulate.
//    ***/
//
/******************************************

Treehouse Techdegree:

FSJS project 2 - List Filter and Pagination

******************************************/



// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
/***

   Add your global variables that store the DOM elements you will

   need to reference and/or manipulate.

   ***/
//Step 2: Get the elements for students and for pagination and page
let StudentListItem = document.getElementsByTagName('li'); // Grabs all the li Item and stores them into StudentListItem
console.log(StudentListItem.length);
let ChildListItem = StudentListItem.children; //Takes the children of the li Item and stores them into ChildListItem. Aka the ul Item
//Makes the child item so you manipulate the elements in the DOM
const buttonDiv = document.querySelector('.pagination');
const buttonUl = buttonDiv.querySelector('li');
let NumberofItem = StudentListItem.length;

//Step 3 & 4: Determine the number of elements that goes on one page. And create the variable for the number of pages needed
const ItemPerPage = 10;

//Step 5: Create a function that determines the number of pages PagesNeeded
function PagesNeeded() {
  //Math ceil so the answer returned is rounded up
  let TotalPages = Math.ceil(StudentListItem.length/ItemPerPage);
  return TotalPages;
}

//Step 6: Create for- loop that deltes the display for all the items
for (var i = 0; i < StudentListItem.length; i++) {
  StudentListItem[i].style.display = 'none';
}

//Step 7: Create a function that only shows the first ten list items.
function showPage (page, ChildListItem) {
  for (let i = 0; i < StudentListItem.length; i++) { // Loops through items to find what to hide or show
    if (i < (page * ItemPerPage) && i >= ((page * ItemPerPage) - ItemPerPage)) {  // shows the first 10 items in list
      StudentListItem[i].style.display = 'block';
    } else {
      StudentListItem[i].style.display = 'none'; //hides the rest of the items
    }
  }
};

showPage(1,ChildListItem);

// Loop to create page buttons based on number of required pages
for (let i = 1; i <= PagesNeeded(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = 'active';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonUl.appendChild(pageli);
    pageli.appendChild(pageLink);
}

buttonDiv.addEventListener('click', (event) => {
    noResultDiv.innerHTML = '';
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;
    for (let i = 0; i < eachStudent.length; i++) {
        if (i >= min && i < max) {
            eachStudent[i].style.display = '';
        }  else {
            eachStudent[i].style.display = 'none';
        }
    }
});
