<img src="../images/css_logo.png" alt="CSS logo" height="100" >

<br>

# CSS Selectors & Visual rules

## 1. Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud.

- ### Inline

    Inline CSS wordt gebruikt om een unieke stijl toe te passen op een specifiek HTML element.
    - Werkt door gebruik te maken van het <span style="color:orange;">style</span> attribuut binnen HTML elementen.

              <span style="color:red;">this text is red</span>

  <br>

- ### Internal

  Internal CSS wordt gebruikt om een stijl te definiëren voor een enkele HTML pagina.

  - Werkt door gebruik te maken van het <span style="color:orange;">< style ></span> element in de <span style="color:skyblue;">< head ></span> sectie van het HTML document.

          <!DOCTYPE html>
          <html>
          <head>
              <style>
                  body {background-color:gray}
                  h1   {color:blue}
                  p    {color:red}
              </style>
          </head>

<br>

- ### External

  External CSS wordt gebruikt om een stijl te definiëren voor meerdere HTML pagina's.

  - Werkt door gebruik te maken van het <span style="color:orange;">< link ></span> element om te linken naar een extern CSS bestand.

          <!DOCTYPE html>
          <html>
          <head>
              <link rel="stylesheet" href="styles.css">
          </head>
          <body>
          ...

    het CSS bestand ("styles.css" in dit geval) ziet er dan als volgt uit:

          body {
              background-color: powderblue;
          }
          h1 {
              color: blue;
          }
          p {
              color: red;
          }

<br><hr>

## 2. CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?

<br>

### De CSS syntax ziet er als volgt uit:

    h1 {color:blue; font-size:12px;}

- <span style="color:coral;">**h1**</span> is de selector

  - De selector kan elk element van een HTML bestand zijn. De selector bepaalt welk onderdeel van het HTML bestand wordt gestijld.

    <br>

- De inhoud tussen de accolades '{ }' worden <span style="color:orange;">declaraties</span> genoemd.

  - <span style="color:coral;">color:blue;</span> en <span style="color:coral;">font-size:12px;</span> zij in dit geval de **declaraties**.

    <br>

- Een declaratie bestaat uit een een <span style="color:orange;">property</span> en een <span style="color:orange;">value</span>.
  - <span style="color:coral;">color</span> en <span style="color:coral;">font-size</span> zijn in dit geval de **property**.  
    <span style="color:coral;">blue</span> en <span style="color:coral;">12px</span> zijn in dit geval de **value**.

<br>
In de standaard format van een CSS bestand ziet de syntax er als volgt uit:
    
    h1 {
        color: blue;
        font-size: 12px;
    }

Zo is het CSS overzichtelijk en makkelijk te lezen.

<br><hr>

## 3. Er zijn verschillende selectors. Maak van de ondergenoemde selectors voorbeelden. Geef in je antwoord ook aan wat de voordelen zijn van elke selector.

<br>

- ### Type selectors / element selectors:

  <span style="color:orange;">Selecteert alle elementen met dezelfde tag</span>. Je refereert hierbij naar een element doormiddel van zijn naam.

        element {
            background-color: blue;
        }

  Voorbeeld in gebruik:

        div {
            background-color: blue;
        }

  <br><hr>

- ### Class selectors:

  Selecteert<span style="color:orange;"> alle elementen met dezelfe class naam</span>. Je refereert hierbij naar een class door een punt '.' voor de class-naam te plaatsen.

            .class {
               background-color: blue;
            }

  <br><hr>

- ### ID selectors:

  Selecteert <span style="color:orange;">een element met een id attribuut</span>. Je refereert hierbij naar een unieke id door een hastag '#' voor de id-naam te plaatsen.

        #id {
            background-color: blue;
        }

  <br><hr>

- ### Descendant selectors:

  Selecteert <span style="color:orange;">specifieke soort child elementen van een element</span>.

        element child_element {
            background-color: blue;
        }

  Voorbeeld in gebruik:

        div p {
            background-color: blue;
        }

  Kan ook worden gebruikt voor children van classes en id's.

        .class p {
            background-color: blue;
        }

    <br>

        #id p {
                background-color: blue;
            }

[meer selectors](https://www.w3schools.com/cssref/css_selectors.asp)

<br><hr>


De opdrachten 4 t/m 7 zijn .html bestanden

<br><hr>

## 8. Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen.
<br>

- ### Cascade
    Css cascade betekent dat de volgorde van je code telt. wat onderin je CSS staat heeft prioriteit over wat erboven staat.

            * {
                background-color: yellow;
            }

            div {
                background-color: red;
            }         
    - De divs van de pagina zullen rood zijn, en niet geel net als alle andere elementen. Ondanks dat de asteriks alle elementen selecteert, worden alle divs rood omdat het onderaan de code staat.

- ### Inheritance
    CSS inhheritance betekent dat property values geërfd worden door child elementen van de parent die je selecteert om te stylen.

            body {
                font-size: 20px;
            }
    - Alle tekst op de pagina zullen 20px als font-size hebben. Of het nou in een paragraaf zit, een span of div etc. Om een specifieke tekst een andere grootte te geven, moet je er een aparte selector voor maken.

        zie voorbeeld:

            body {
                font-size: 20px;
            }

            span {
                font-size: 40px;
            }
        -   Alle tekst die in een span element zit zal 40px groot zijn. De rest blijft 20px