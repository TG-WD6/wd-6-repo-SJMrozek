const searchWrapper = document.getElementById("searchWrapper");
const searchBar = document.getElementById("searchBar");
let searchHistory = [];
let storedHistory;


localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

searchBar.addEventListener('input', (event) => getSuggestions(event));
searchBar.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        confirmSearch();
    }
});


function getFunction(event) {
    let input = searchBar.value.replace(/\s+/g,' ').trim().toLowerCase();
    switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":

            break;
        case "ArrowLeft":
        case "ArrowRight":
            break;
        default:
            getSuggestions(event, input)
            break;
    }
}

function getInput() {
    return searchBar.value.replace(/\s+/g,' ').trim().toLowerCase();
}

function confirmSearch() {
    setSuggestion(input);
    searchBar.value = "";
}

function getSuggestions(event) {
    // Used regex to remove unnessecary spaces
    input = getInput()
    let storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    let suggestions = [];

    storedHistory.forEach(item => {
        if (input.length !== 0 && item.includes(input)) {
            suggestions.unshift(item);
            showSuggestion(suggestions)
        } else {
            clearDOM();
            // suggestions = []               <----- possibly creating a bug
        }
    });

    if (event.key === "Enter" && input.length !== 0) {
        confirmSearch()
    }
}



function setSuggestion(content) {
    // push input content to searchHistory and localstorage if it's not already in the searchHistory array.
    if (!searchHistory.find(item => item == content)) {
    searchHistory.push(content);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    searchBar.value = content;

    console.log("history:", storedHistory);
    console.log("SAVED:", storedHistory);
    } else {
        console.error("'" + content + "'", "already saved");
    }
}




let suggestionList = document.getElementById("suggestionList");

function showSuggestion(array) {
    clearDOM();
    array.forEach((string) => {
        let listItem = document.createElement("li");
        listItem.classList.add("searchItem");
        listItem.innerText = string;
        suggestionList.appendChild(listItem);
        
    });
}


function clearDOM() {
    let child = suggestionList.firstElementChild; 
    while (child) {
        suggestionList.removeChild(child);
        child = suggestionList.firstElementChild;
    }
}