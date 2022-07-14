const searchBar = document.getElementById("searchBar");
let searchHistory = [];
let storedHistory = JSON.parse(localStorage.getItem("searchHistory"));


// localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

searchBar.addEventListener('input', (event) => getFunction(event));
searchBar.addEventListener('keydown', (event) => getFunction(event));

function getFunction(event) {
    console.log("searchhistory", searchHistory);
    console.log("storedHistory", storedHistory);
    switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":

            break;
        case "ArrowLeft":
        case "ArrowRight":
            break;
        default:
            getSuggestions(event)
            break;
    }
}

function processInput(content) {
    console.clear()
    // guard class for blank input content (spaces are trimmed)
    if (content.length === 0) return;
    
    // push input content to searchHistory and localstorage if it's not already in the searchHistory array.
    if (!searchHistory.find(item => item == content)) {
    searchHistory.push(content);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    searchBar.value = content;

    console.log("SAVED:", storedHistory)
    } else {
        console.error("'" + content + "'", "already saved");
    }
}



function getSuggestions(event) {
    // Used regex to remove unnessecary spaces
    let input = searchBar.value.replace(/\s+/g,' ').trim().toLowerCase();
    let storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    let suggestions = [];

    storedHistory.forEach(string => {
        if (input.length !== 0 && string.includes(input)) {
            suggestions.push(string);
            showSuggestion(suggestions)
        } else {
            suggestions = [];
            clearSuggestions();
            console.clear();
            console.warn("search for anything", storedHistory);
            console.warn(input);
        }
    });
    // Confirm input
    if (event.key === "Enter") {
        setSuggestion(input);
    }
}



function showSuggestion(array) {
    clearSuggestions();
    
    console.clear();
    console.warn("\nSUGGESTIONS:");
    array.forEach((string) => {
        let listItem = document.createElement("li");
            listItem.classList.add("suggestion")
            listItem.innerText = string;
        
            suggestionList.appendChild(listItem)
    });
}



let suggestionList = document.getElementById("suggestionList");

function clearSuggestions() {
    let child = suggestionList.firstElementChild; 
    while (child) {
        suggestionList.removeChild(child);
        child = suggestionList.firstElementChild;
    }
}