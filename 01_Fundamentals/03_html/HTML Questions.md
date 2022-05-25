# HTML Questions Answered



## 1. Wat is HTML?

HTML is een programmeer taal bestaande uit elementen, die kunnen worden toegepast op stukken text om die een andere betekenis te geven, een document in logische secties te verdelen en inhoud toe te voegen aan een pagina zoals afbeeldingen of video's.

<br><hr>





## 2. Hoe ziet de basis-structuur van HTML eruit?

- Een declaratie van de versie van HTML van het bestand.
- Header
- Body

<br><hr>





## 3. Wat is een anchor tag?

Een anchor tag is een aanklikbare text die een hyperlink bevat die verwijst naar een andere pagina, website, of deel van de pagina. Deze is standaard blauw en is onderstreept.

<br><hr>





## 4. Noem een aantal nieuwe functionaliteiten van HTML5
De top 10:
- Audio en Video tags
- Vector graphics
- Header en Footer
- Figure en Figcaption
- Nav tag
- Progress tag
- Placeholder attribuut
- Email attribuut
- Opslag
  - HTML5 gebruikt Application cache, web SQL, web storage i.p.v. alleen de browser
- HTML5 is Makkelijker in gebruik.
  - Betere [syntax](https://www.w3.org/html/wg/wiki/Guide/Syntax-Semantics#:~:text=Syntax%20is%20the%20arrangement%20of,the%20attributes%20of%20those%20elements.) dan de andere versies van HTML

<br>

[Top 10 nieuwe features van HTML5](https://www.geeksforgeeks.org/top-10-new-features-of-html5/#:~:text=Audio%20and%20Video%20tags%20are,%2C%20transformations%2C%20and%20even%20animations.)

[HTML vs HTML5 en wat is er nieuw](https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-html-5-4ce9d62bf114)

<br><hr>





## 5. Wat zijn HTML attributen?

HTML Attributen zijn onderdelen van de HTML code, die informatie geven aan de elementen waarin ze staan. Het attribuut staat altijd in de starttag en is specifiek voor de functie die je wilt dat je code vervult.

- Voorbeeld met het href attribuut:

Met het **href** attribuut specificeert de URL waarnaar je verwezen wilt worden als je bijvoorbeeld ergens op klikt.
Maar om verwezen te worden heb je eerst een tag nodig die je gaat doorverwijzen naar dat URL. In dit geval de &lt;a> tag (Anchor tag) nodig om de . deze definieert een hyperlink.

- Code zonder attribuut:

        <a>hier</a>
    - Output:
    <a>zonder attribuut</a>. Als je hierop klikt gebeurt er niks, omdat het href attribuut niet aanwezig is. Er is dus geen URL om naar te verwijzen.

<br>

- Code met attribuut:

        <a href="https://Github.com">met attribuut</a>
    - Output:
    <a href="https://Github.com">met attribuut</a>. Als je hierop klikt word je verwezen naar het URL dat is aan aangegeven met het href attribuut.

Zo zijn er nog veel andere attributen die weer voor iets anders gebruikt worden, zoals de hoogte en breedte van een afbeelding aanpassen.

<br>

[Meer over HTML attributen](https://www.w3schools.com/html/html_attributes.asp)



<br><hr>





## 6. Wat is HTML semantics?

Semantic Elements zijn beschrijvende elementen. deze elementen voegen (bijna) niks nieuws toe, behalve een duidelijke naam. Dat maakt dat ze een stukje accessibility met zich meebrengen en de code makkelijker te begrijpen maken voor andere programmeurs en computers.

- Semantic elements worden gebruikt om de verschillende onderdelen van een webpagina aan te duiden.
- De functionaliteit van Semantic elements zit vooral in de naamgeving. Je bent dus niet verplicht deze te gebruiken, maar het is wel een "good practise" om het wel te doen vanwege de volgende punten:
- Semantic elements hebben geen speciale standaard-CSS die ze in gebruik anders maken dan een div.

<br><hr>





## 7. Waarvoor worden meta tags gebruikt?

Meta tags worden gebruikt om metadata van een HTML bestand aan te geven (informatie geven over de data in het HTML bestand). - Metadata = data(informatie) over data.

- de &lt;meta> tags gaan altijd in het &lt;head> element.
- meta tags specificeren meestal: character set, pagina beschrijving, sleutelwoorden(keywords), auteur van het document, viewport instellingen.

<br><hr>





## 8. Wat is een nested element?

Een nested element is een tag die in een ander tag zit. Het is het child element van de parent element.
Een nested element kan ook parent element zijn van een ander child element. (zie voorbeeld 1)

- Voorbeeld 1:

         <div>               =   parent van "ul"
             <ul>            =   nested element in de "div" en parent van "li"
                 <li></li>
                 <li></li>   =   3 nested elements in "ul"
                 <li></li>
             </ul>           =   closing tag
         </div>              =   closing tag

    <br>

- Voorbeeld 2:

         <p>This is <em>Emphasize</em> Text<p>

  &lt;em> is het nested element van &lt;p>

         <p>This is <b>bold</b> text</p>

  &lt;b> is het nested element van &lt;p></p>

<br>
    - De &lt;p> is normaliter ook een nested element van een ander element zoals een div, section, article e.t.c.

<br><hr>





## 9. Wat is het verschil tussen inline- en blok-elementen?

- ### **Block(-level) Element:**

  Begint altijd op een nieuwe lijn en de browser voegt automatisch ruimte (margin) toe voor en na het element.

  voorbeeld:

  - &lt;p> definieert een paragraaf.
  - &lt;div> definieert een scheiding of sectie.

<br>

- ### **Inline Element:**

  Begint NIET op een nieuwe lijn en gebruikt alleen de breedte die nodig is

  voorbeeld:

  - &lt;span> is een onderdeel element van een paragraaf.

    <br>

[Meer over block- en inline elementen](https://www.w3schools.com/html/html_blocks.asp)

<br><hr>





## 10. Wat is accessibility?

Accessibility betekent toegankelijkheid.
In HTML betekent accessibility dat je je code zo toegangkelijk mogelijk maakt voor zowel mensen en computers.
Dat houdt in dat je in je code rekening houdt met dat het makkelijk is voor de consumenten(met beperkingen), andere programmeurs en computer om de website te gebruiken.

Je kan je web pagina accessible maken door zoveel mogelijk de juiste HTML elementen te gebruiken voor de functie die ze vervullen.

Ook kan je dit doen door de [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) accessibility standaard te gebruiken in je code.

<br>

[Meer over accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

<br><hr>