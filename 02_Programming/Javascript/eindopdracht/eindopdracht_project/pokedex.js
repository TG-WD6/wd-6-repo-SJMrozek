import pokedex from "./data/pokedex.json" assert { type: "json" };


// Add images and sprites to every pokemon object
pokedex.forEach(pokemon => {
    let id = pokemon.id;
    pokemon.sprite = getSprite(pokemon.id);
    pokemon.image = getImage(pokemon.id);
});

// Generate sprite for specific pokemon
function getSprite(id) {
    const directory= "./images/sprites/";
    const fileName = String(id).padStart(3,0) + "MS.png";
    const imagePath = directory + fileName;
    return imagePath;
}

// Get image for specific pokemon
function getImage(id) {
    const directory= "./images/pokemons/";
    const fileName = String(id).padStart(3,0) + ".png";
    const imagePath = directory + fileName;
    return imagePath;
}

// Create blank cards to test layout
function createBlankCard(amount) {
    for (let i = 0; i < amount ; i++) {
        let card = document.createElement("div");
        card.classList.add("pokemonCard");

        card.innerText = "Blank Card"

        document.getElementById("cardContainer").appendChild(card);
        
    }
}

// Construct card for specific pokemon id
const cardContainer = document.getElementById("cardContainer")

function generateCard(id) {
    const pokemon = pokedex[id - 1];

    
    const img = document.createElement("img");
    img.setAttribute("src",pokemon.image);

    const dataContainer = document.createElement("div");
    dataContainer.classList.add("pokemonData");

    const identity = document.createElement("div");
    identity.classList.add("identity");

    const name = document.createElement("span");
    name.classList.add("name");
    name.innerText = pokemon.name.english;

    const spriteImg = document.createElement("img");
    spriteImg.classList.add("sprite");
    spriteImg.setAttribute("src",pokemon.sprite);

    const idNumber = document.createElement("span");
    idNumber.classList.add("idNumber");
    idNumber.innerText = pokemon.id;

    const typeList = document.createElement("ul");
    typeList.classList.add("typeList");
    pokemon.type.forEach(type => createTypeTag(type))

    function createTypeTag(type) {
        const typeItem = document.createElement("li");
        typeItem.classList.add(type.toLowerCase());
        typeItem.innerText = type;
        typeList.appendChild(typeItem);
    }

    const specs = document.createElement("div");
    specs.classList.add("specs");

    const hp = document.createElement("div")
    const hpText = document.createElement("span");
    hpText.innerText = "HP:";
    const hpValue = document.createElement("span");
    hpValue.innerText = pokemon.base.Attack;

    const atk = document.createElement("div");
    const atkText = document.createElement("span");
    atkText.innerText = "ATK:";
    const atkValue = document.createElement("span");
    atkValue.innerText = pokemon.base.Attack;

    const def = document.createElement("div");
    const defText = document.createElement("span");
    defText.innerText = "DEF:";
    const defValue = document.createElement("span");
    defValue.innerText = pokemon.base.Defense;

    const spd = document.createElement("div");
    const spdText = document.createElement("span");
    spdText.innerText = "SPD:";
    const spdValue = document.createElement("span");
    spdValue.innerText = pokemon.base.Speed;

    const spAtk = document.createElement("div");
    const spAtkText = document.createElement("span");
    spAtkText.innerText = "SP.ATK:";
    const spAtkValue = document.createElement("span");
    spAtkValue.innerText = pokemon.base["Sp. Attack"];

    const spDef = document.createElement("div");
    const spDefText = document.createElement("span");
    spDefText.innerText = "SP.DEF:";
    const spDefValue = document.createElement("span");
    spDefValue.innerText = pokemon.base["Sp. Defense"];


    const pokeCard = document.createElement("div");
    pokeCard.classList.add("pokemonCard");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("pokemonImage");

    
    pokeCard.append(imgContainer, dataContainer);

    imgContainer.appendChild(img);

    dataContainer.append(identity, typeList, specs);

    identity.append(name, spriteImg, idNumber);

    specs.append(hp, atk, def, spd, spAtk, spDef);
    hp.append(hpText, hpValue);
    atk.append(atkText, atkValue);
    def.append(defText, defValue);
    spd.append(spdText, spdValue);
    spAtk.append(spAtkText, spAtkValue);
    spDef.append(spDefText, spDefValue);

    cardContainer.appendChild(pokeCard)
}

// Pokemon id's per generation (above gen 7 not provided in the pokedex.json)
const generation = {
    "all": {
        "first": 1,
        "last": 809
    },
    1: {
        "first": 1,
        "last": 151
    },
    2: {
        "first": 152,
        "last": 251
    },
    3: {
        "first": 252,
        "last": 386
    },
    4: {
        "first": 387,
        "last": 493
    },
    5: {
        "first": 494,
        "last": 649
    },
    6: {
        "first": 650,
        "last": 721
    },
    7: {
        "first": 722,
        "last": 809
    },
}


const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generatePokedex)
console.log();

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearDex)
clearBtn.classList.add("hide")


function clearDex() {
    cardContainer.textContent = null;
    clearBtn.classList.add("hide")
}

function generatePokedex() {
    const genSelect = document.getElementById("genSelect").value;
    const typeSelect = document.getElementById("typeSelect").value;
    console.log(genSelect, typeSelect);
    console.log(pokedex[1].type);
    clearBtn.classList.remove("hide")
    cardContainer.textContent = null;

    let firstPokemon = generation[genSelect].first;
    let LastPokemon = generation[genSelect].last;

    for (let i = firstPokemon; i <= LastPokemon; i++) {
        if (typeSelect === "all") {
            generateCard(i)
        } else if (pokedex[i - 1].type.find(value => value === typeSelect)) {
            generateCard(i)
        }
    }
}