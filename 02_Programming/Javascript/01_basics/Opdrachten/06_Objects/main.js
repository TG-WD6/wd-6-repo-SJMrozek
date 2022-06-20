// 06 JAVASCRIPT Objects

// 6.2.1

//Object Constructor
{
    let pet = new Object();

    pet.name = "Bobby";
    pet.type = "Dog";

    console.log(pet);
}

//Literal Constructor
{
    let pet = {
        name : "Garfield",
        type : "Cat"
    }

    console.log(pet);
}

//Function Constructor
{
    function Pet(name, type) {
        this.name = name
        this.type = type
    }

    let myPet = new Pet("Ghost","Mouse")

    console.log(myPet);
}

//Singleton Constructor
{
    let pet = new function() {
        this.name = "Hella",
        this.type = "Rat"
    }
    
    console.log(pet);
}

//Class-based Constructor
{
    class Pet {
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
    }

    const Peppa = new Pet("Peppa", "Pig");

    console.log(Peppa);
}


// 6.1.2
{
    const pet = {
    name: null,
    type: null,
    }

    const Bobby = Object.create(pet)
    Bobby.name = "Bobby";
    Bobby.type = "Dog";

    const Garfield = Object.create(pet)
    Garfield.name = "Garfield";
    Garfield.type = "Cat";

    const Ghost = Object.create(pet)
    Ghost.name = "Ghost";
    Ghost.type = "Mouse";

    const Hella = Object.create(pet)
    Hella.name = "Hella";
    Hella.type = "Rat";

    const Peppa = Object.create(pet)
    Peppa.name = "Peppa";
    Peppa.type = "Pig";


    console.log(Bobby, Garfield, Ghost, Hella, Peppa);
}

// 6.1.3
{
    class Person {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
    }

    const Liam = new Person("Liam", 28);
    const Noah = new Person("Noah", 31);
    const Oliver = new Person("Oliver", 35);
    const Elijah = new Person("Elijah", 18);
    const Wiliam = new Person("Wiliam", 23);
    const James = new Person("James", 43);
    const Benjamin = new Person("Benjamin", 38);
    const Lucas = new Person("Lucas", 40);
    const Henry = new Person("Henry", 19);
    const Mason = new Person("Mason", 33);

    const people = [Liam, Noah, Oliver, Elijah, Wiliam, James, Benjamin, Lucas, Henry, Mason]

    people.sort((a, b) => (a.age > b.age) ? 1 : -1)

    console.log(people);
}

// 6.2.1   &   6.2.2
{
    class Club {
        constructor(name, type, members, addres, phone, contactPerson) {
            this.name = name;
            this.type = type;
            this.members = members;
            this.contact = new ContactInfo(addres, phone, contactPerson);
        }
    }

    class ContactInfo {
        constructor(addres, phone, contactPerson) {
            this.addres = addres;
            this.phone = phone;
            this.contactPerson = contactPerson;
        }
    }


    // 6.2.3
    const clubA = new Club("Club One","Gambling", 67,"12th Alphabet Street","020-9165834","Steven Grace")
    const clubB = new Club("Business Club", "Business", 15,"1st Busniness Street", "06-23324811", "Vince Prince")
    const clubC = new Club("Clubby Club", "Night Club", 26,"8th Club Street", "020-18707523", "Trevor Holland")
    const clubD = new Club("Green Field", "Golf Club", 33, "15th National Park","020-8245210", "Mark Winston")
    const clubE = new Club("the Fifth Club", "Cultre", 6,"5th Culture Street", "020-7171354", "Daniel Chesterfield")

    const clubs = [clubA, clubB, clubC, clubD, clubE];

    clubs.forEach(club => console.log(`${club.name} --- ${club.contact.phone} --- ${club.contact.contactPerson}`));


    // 6.2.4
    clubA.contact.contactPerson = "Billie Jean";
    clubB.contact.contactPerson = "Billie Jean";

    clubB.contact.contactPerson = "Billy Jeans"

    console.log(clubA.contact.contactPerson);
    // Alles werkt, dus de console logt "Billie Jean", als ik de contactpersoon van clubB log logt de console "Billy Jeans"
}




