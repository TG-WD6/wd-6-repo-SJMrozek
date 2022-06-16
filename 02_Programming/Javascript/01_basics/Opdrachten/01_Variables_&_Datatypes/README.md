<img src="../../images/javascript_logo.png" alt="Sass logo" height="100" >

<br>

# JavaScript Variables &  Datatypes
De Javascript codes vindt je in [main.js](./main.js)
<hr>

## 1.1 We onderzoeken het verschil tussen var, let en const. Gegeven zijn een aantal voorbeelden - schrijf eerst je verwachtingen op voordat je ze zelf nabootst. Kijk vervolgens wat er bij jou in de console gelogd wordt.
<br>

- a)

    Error, je kan maar 1 declaratie toevoegen.
<br>

- b)

    "Let Tekst" en "Let Tekst 2!" worden allebij gelogd, omdat met let je een variabel declaratie toevoegd (wat maar 1 keer kan per variabel) en daarna de waarde overschrijft met 'letOefening = "Let Tekst 2!"'. Er is ook een 'console.log()' Voordat de overschrijving plaats vindt, waardoor je beide waardes te zien krijgt.
<br>

- c)

    Error, je kan de waarde van en 'const' (constante variable) niet vervangen. Deze blijft constant.
<br>

- d)

    Alle drie waardes worden gelogd, net als bij opdracht b. het verschill tussen de eerste en de andere twee 'vars' is dat als er "var" aan het begin staat, er een locale variabel wordt aangemaakt, en als er geen "var" voor staat, er wordt gezocht naar een globale variabel of wordt deze aangemaakt als er niet al een is.

<br><hr>

## 1.2 We onderzoeken de verschillende datatypes. Gegeven een code.
<br>

1. Wat zie je in de console? Was dat wat je verwachtte?

"This is a string, with the value: number". Ja, omdat we bij de eerste opdracht met let hebben gewerkt.

<br><hr>

## 1.3 gegeven een code.
<br>

1. Wat komt eruit?
    - 55

<br>

2. Wat komt eruit als je van beiden een number maakt?
    - 10

<br>

3. Wat komt eruit als je de + vervangt door: "=="/"==="/"!="/"!=="

    - bij "==" :
    true


    - bij "==+" :
    true


    - bij "!=" :
    false


    - bij "!==" :
    false

<br><hr>

## 1.4 We gaan operators wat nader onderzoeken, en ermee experimenteren.
<br>

1. Wat komt er uit het volgende?

        let increment = 3;
        console.log(++increment)
        console.log(increment++)

    - 2 en 2

<br>

2. Wat komt er uit als je de console.log() hierboven omdraait?

    - 1 en 3

<br>

3. Wat komt er uit het volgende?

        let modulo = 24 % 10
        console.log(modulo)

        let division = 24 / 10;
        console.log(division)
    
    - 4 en 2.4

<br>

4. Wat komt er uit het volgende? 

        let SomeNumber = "Tekst";
        console.log(!SomeNumber)

    - false (! betekent 'not')

<br>

5. Wat komt er uit bovenstaand als je de waarde van someNumber verandert in:

    - 5 : false

    - Boolean : false

    - false : false

    - “false” : false

    - true : false

    - “true” : false

    - null : true

    - undefined : true

<br>

6. Zoek op of experimenteer wat "+=" doet. Werkt deze ook met Strings? Weet je hoe je deze anders kan schrijven?.

    Je kan tekst samenvoegen of een rekensom maken. Door de '='teken wordt de waarde van het variabel overgeschreven. Wat normaalgesproken niet zou gebeuren als je alle '+' zou gebruiken.

    - voorbeeld:

            a += b
        Zelfde als [ a = a + b ].   
        Werkt ook met strings.

<br>

7. Doe hetzelfde voor "-=", "*=", "/=", "%=" en "**=".

    -       -=
        Zelfde als [ a = a - b ]  
        Werkt niet met strings.  
        <br>

    -       *=
        Zelfde als [ a = a * b ]    
        Werkt niet met strings.  
        <br>

    -       /=
        Zelfde als [ a = a / b ]    
        Werkt niet met strings.  
        <br>

    -       %=
        Zelfde als [ a = a % b ]    
        Werkt niet met strings.  
        <br>

    -       **=
        Zelfde als [ a = a ** b ] (a tot de macht b)  
        Werkt niet met strings.  
        <br>
