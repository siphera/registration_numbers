const plateInput = document.querySelector(".plateInputField"),
    addBtn = document.querySelector(".regAddBtn"),
    clearBtn = document.querySelector(".clearBtn"),
    ul = document.querySelector('ul'),
    displayOutput = document.querySelector(".regPlatesDisplay");


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// function that creates an li element
const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}


addBtn.addEventListener('click', function (e) {
  //prevent form from default action
  e.preventDefault();

// push new value to the array
  itemsArray.push(plateInput.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(plateInput.value);
  //auto erase input field
  plateInput.value = "";
});

// loop to display stored list to user interface
data.forEach(item => {
  liMaker(item);
});


clearBtn.addEventListener('click', function () {
//  window.location.reload();
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});