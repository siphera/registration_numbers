let plateInput = document.querySelector(".plateInputField"),
    addBtn = document.querySelector(".regAddBtn"),
    clearBtn = document.querySelector(".clearBtn"),
    display = document.querySelector('ul'),
    filterTown = document.querySelector('.select-town')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// function that creates an li element
function liMaker(text) {
    let li = document.createElement('li');
    li.innerText = text;
    display.appendChild(li);
    //    auto erase input field
    plateInput.value = "";
}


function addReg() {
    // push new value to the array
    itemsArray.push(plateInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(plateInput.value);
};

// loop to display stored list to user interface
window.addEventListener('load', function () {
    if (itemsArray.length > 0)
        for (var i = 0; i < itemsArray.length; i++) {
            liMaker(itemsArray[i]);
        }
});


addBtn.addEventListener('click', addReg);

clearBtn.addEventListener('click', function () {
    window.location.reload();
    localStorage.clear();
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
});


filterTown.addEventListener('change', function() {
  let filterData = registration.filterBy(filterTown.value);
  display.innerHTML = "";
  if (filterData.length > 0) {
    for (var i = 0; i< filterData.length; i++) {
      liMaker(filterData[i]);
    }
  }
});