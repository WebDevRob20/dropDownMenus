// Assigning elements to variables
var dropDownMenu = document.getElementById('dropDown');// selects the products nav link

//event listeners
dropDownMenu.addEventListener('click', dropDown);

//Functions
function dropDown(){
  if( dropDownMenu.classList.contains('closed')) {
    dropDownMenu.classList.remove('closed')
  }else {
    dropDownMenu.classList.add('closed')
  }
};
