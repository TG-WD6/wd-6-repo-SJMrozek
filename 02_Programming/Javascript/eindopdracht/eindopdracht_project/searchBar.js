const searchWrapper = document.querySelector("#searchWrapper");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const suggestionList = document.querySelector("#suggestionList")
let input = searchInput.value;

let searchHistory = [];

//check if local storage already contains searchHistory
if (localStorage.getItem("searchHistory") === null) {
    searchHistory = localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
} else { 
    searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
}

// When typing
searchInput.addEventListener("input", () => {
    input = searchInput.value.replace(/\s+/g,' ').trim().toLowerCase();
    if (input.length !== 0) {
        getSuggestions();
    } else {
        clearDOMList();
    }
});

// When pressed 'Enter' or clicked search button
searchButton.addEventListener("click", () => confirmSearch())
searchInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        confirmSearch()
    }
});


// FUNCTIONS
function getSuggestions() {
    clearDOMList();
    let counter = 0;
    searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

    searchHistory.forEach(item => {
        //display only 5 suggestions
        if (counter < 5 && item.includes(input) && item !== input) {
            createDOMItem(item);
            counter++;
        }
    });
}

function confirmSearch() {
    setSearchHistory();
    clearDOMList();
    searchInput.value = "";
}

function setSearchHistory() {
    if (input.length > 0 && !searchHistory.some(item => item === input)) {
        searchHistory.unshift(input);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    } 
}

function createDOMItem(string) {
    let text = document.createElement("span");
    text.setAttribute("onclick", "setInput(this.parentElement)")
    text.innerText = string;
    let button = document.createElement("div");
    button.setAttribute("onclick", "deleteSuggestion(this)");
    button.classList.add("deleteButton");
    let suggestion = document.createElement("li");
    suggestion.classList.add("suggestion");
    suggestion.append(text, button);
    suggestionList.appendChild(suggestion);
}

function clearDOMList() {
    let child = suggestionList.firstElementChild; 
    while (child) {
        suggestionList.removeChild(child);
        child = suggestionList.firstElementChild;
    }   
}

function setInput(element) {
    input = element.firstElementChild.innerText;
    searchInput.value = input;
    clearDOMList();
}

function deleteSuggestion(element) {
    let content = element.parentElement.firstElementChild.innerText
    element.parentElement.remove();

    let index = searchHistory.indexOf(content);
    searchHistory.splice(index, 1);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    getSuggestions();
}


