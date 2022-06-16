<img src="../../images/sass_logo.svg" alt="Sass logo" height="100" >

<br>

# Operators

## Zie de volgende codes en geef aan welk resultaat je verwacht:

<br>

## 1.

    .image {
        height: 400px * 2;
        width: auto;
    }

- <span style="background-color:green">JUIST</span>: height wordt 800px

<br><hr>

## 2.

    .image {
        height: 400px + 100;
        width: auto;
    }

- <span style="background-color:green">JUIST</span>: height wordt 500px

<br><hr>

## 3.

    .image {
        height: 400px - 300px;
        width: auto;
    }

- <span style="background-color:green">JUIST</span>: height wordt 100px

<br><hr>

## 4.

    .image {
        height: 200px + 100px - 400px;
        width: auto;
    }

- <span style="background-color:green">JUIST</span>: height wordt -100px

<br><hr>

## 5.

    .image {
        height: 200px * 3;
        width: auto;
    }

- <span style="background-color:green">JUIST</span>: height wordt 600px

<br><hr>

## 6.

    .image {
        height: 750px * 1px;
        width: auto;
    }

- <span style="background-color:darkred">ONJUIST</span>: CSS ziet dit als '750px _ px'.
  als je '_ 2px' zou invullen zou CSS het zien als '1500px \* px'. Bij multiplication gebruikt CSS alleen het getal waarmee je vermenigvuldigd. Je kan niet vermenigvuldigen met alleen een eenheid.

    <br>

- De code voor height zou er zo moeten uitzien:

        height: 750px * 1;

    En aangezien 750 * 1 = 750, zou je je code nog bet zo kunnen schrijven:

        height: 750px;

<br><hr>

## 7.

    .image {
        height: 30px / 5px;
        width: 24px / 4;
    }

- <span style="background-color:darkred">ONJUIST</span>: Na de compiling blijft height '30px / 5px' en width '24px / 4', omdat de slash ( <span style="color:orange">/</span> ) in CSS werkt als een divider voor verschillende values. ('verticaal' / 'horizontaal') bijvoorbeeld bij de border-radius property.

    Ook net als bij vermenigvuldigen geldt dat het getal waardoor je wilt delen geen eenheid moet bevatten.

    <br>

- De juiste code voor height en width zou er zo moeten uitzien:

        height: (30px / 5);
        width: (24px / 4);

    De openings-/ en sluitingshaakjes ( <span style="color:orange">( )</span>  <span style="color:orange">parentheses</span> ) geven aan dat de inhoud een rekensom is en niet twee aparte values.


<br><hr>

## 8.

    .image {
        height: (30px / 5px);
        width: (24px / 4);
    }

- <span style="background-color:darkred">ONJUIST</span>: Er wordt bij height een eenheid gebruikt bij het getal waardoor er gedeeld wordt. De width is wel juist.

    <br>

De juiste code voor height en width zou er zo moeten uitzien: (width was al juist)

        height: (30px / 5);
        width: (24px / 4);


<br><hr>
