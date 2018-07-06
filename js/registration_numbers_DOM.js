let plateInput = document.querySelector(".plateInputField"),
    addBtn = document.querySelector(".regAddBtn"),
    clearBtn = document.querySelector(".clearBtn"),
    display = document.querySelector('ul'),
    filterTown = document.querySelector('.select-town')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var registration = reg_numFF(itemsArray);

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
  let filt = registration.townFilter(filterTown.value);
  display.innerHTML = "";
  if (filt.length > 0) {
    for (var i = 0; i< filt.length; i++) {
      liMaker(filt[i]);
    }
  }
});