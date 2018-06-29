const plateInput = document.querySelector(".plateInputField"),
    addBtn = document.querySelector(".regAddBtn"),
    clearBtn = document.querySelector(".clearBtn"),
    ul = document.querySelector('ul'),
    filter = document.querySelector(".town-filter")

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// function that creates an li element
function liMaker(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

    
function addReg() {
    // push new value to the array
    itemsArray.push(plateInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(plateInput.value);
//    auto erase input field
    plateInput.value = "";
};

// loop to display stored list to user interface

//data.forEach(item => {
//    liMaker(item);
//});

window.addEventListener('load', function () {
    if (itemsArray.length > 0)
        for (var i = 0; i < itemsArray.length; i++) {
            liMaker(itemsArray[i]);
        }
});


addBtn.addEventListener('click', function () {
    addReg();
})

filter.addEventListener('click', function () {
    checkLocation();
})

clearBtn.addEventListener('click', function () {
    //  window.location.reload();
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});
