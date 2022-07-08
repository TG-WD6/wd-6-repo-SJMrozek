import pokedex from "./data/pokedex.json" assert { type: "json" };
let pokemonList = [];

pokedex.forEach(pokemon => {
    let id = pokemon.id;
    pokemonList.push(`${pokemon.name.english} id:${pokemon.id} image: ${getImage(id)} sprite: ${getSprite(id)}`);
    console.log(getSprite(pokemon.id));
    console.log(getImage(pokemon.id))
});
// console.log(pokemonList);

function getSprite(id) {
    const spriteDatabase= "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/";
    const fileName = String(id).padStart(3,0) + "MS.png";
    const imageURL = spriteDatabase + fileName;
    return imageURL;
}

function getImage(id) {
    const imageDatabase= "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/";
    const fileName = String(id).padStart(3,0) + ".png";
    const imageURL = imageDatabase + fileName;
    return imageURL;
}


function blankCard(amount) {
    for (let i = 0; i < amount ; i++) {
        var card = document.createElement("div");
        card.classList.add("pokemonCard");

        var text = document.createTextNode("Blank Card");
        card.appendChild(text);

        var element = document.getElementById("cardContainer");
        element.appendChild(card);
    }
}

blankCard(300)