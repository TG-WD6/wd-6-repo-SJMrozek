# HTML Questions

1. Wat is HTML?
   HTML is een programmeer taal bestaande uit elementen, die kunnen worden toegepast op stukken text om die een andere betekenis te geven, een document in logische secties te verdelen en inhoud toe te voegen aan een pagina zoals afbeeldingen of video's.


<br>


2. Hoe ziet de basis-structuur van HTML eruit?
   - Een declaratie van de versie van HTML van het bestand.
   - Header
   - Body


<br>


3. Wat is een anchor tag?
   Een anchor tag is een aanklikbare text die een hyperlink bevat die verwijst naar een andere pagina, website, of deel van de pagina. Deze is standaard blauw en is onderstreept.


<br>


4. Noem een aantal nieuwe functionaliteiten van HTML5

   - Audio en Video tags
   - Vector graphics
   - Header en Footer
   - Figure en Figcaption
   - Nav tag
   - Progress tag
   - Placeholder attribuut
   - Email attribuut
   - Opslag
     - HTML gebruikt Application cache, web SQL, web storage i.p.v. alleen de browser
   - HTML5 is Makkelijker in gebruik.
     - Betere [syntax](https://www.w3.org/html/wg/wiki/Guide/Syntax-Semantics#:~:text=Syntax%20is%20the%20arrangement%20of,the%20attributes%20of%20those%20elements.) dan de andere versies van HTML)

   [top 10 nieuwe features van HTML5](https://www.geeksforgeeks.org/top-10-new-features-of-html5/#:~:text=Audio%20and%20Video%20tags%20are,%2C%20transformations%2C%20and%20even%20animations.)

   [HTML vs HTML5 en what's new](https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-html-5-4ce9d62bf114)


<br>


5. Wat zijn HTML attributen?
   HTML Attributen zijn onderdelen van HTML code die informatie bevatten over de elementen die erin staan. De attribuut staat altijd in de start- en eindtag en is specifiek voor de functie die je wilt dat je code vervult.
   - Voorbeeld: Het href attribuut specificeert de URL waarnaar je verwezen wilt worden en heeft de &lt;a> tag (Anchor tag). deze definieert een hyperlink.
   - het href attribuut in een lijn code:
     &lt;a href:"https://github.com/ style="\_blank">Go to GitHub&lt;/a>


<br>


6. Wat is HTML semantics?
   Semantic Elements zijn beschrijvende elementen. deze elementen voegen (bijna) niks nieuws toe, behalve een duidelijke naam. Dat maakt dat ze een stukje accessibility met zich meebrengen en de code makkelijker te begrijpen maken voor andere programmeurs en computers.
   - Semantic elements worden gebruikt om de verschillende onderdelen van een webpagina aan te duiden.

    - De functionaliteit van Semantic elements is vooral de naamgeving. Je bent dus niet verplicht deze te gebruiken, maar het is wel een "good practise" om het wel te doen vanwege de volgende punten:
    - Semantic elements hebben geen speciale standaard-CSS die ze in gebruik anders maken dan een div.


<br>


7. Waarvoor worden meta tags gebruikt?
   Meta tags worden gebruikt om metadata van een HTML bestand aan te geven (informatie geven over de data in het HTML bestand). - Metadata = data(informatie) over data.

- de &lt;meta> tags gaan altijd in het &lt;head> element.
- meta tags specificeren meestal: character set, pagina beschrijving, sleutelwoorden(keywords), auteur van het document, viewport instellingen.


<br>


8. Wat is een nested element?
   Een nested element is een tag die in een ander tag zitten. Een nested element is het child element van een ander element.
   Een nested element kan ook parent element zijn van een ander child element. (zie voorbeeld 1)
   - Voorbeeld 1:

   <p>&lt;div>     <--parent van de ul</p>
    | <p>&lt;ul>      <--nested element in de div (child van div)</p>
    |  <p>&lt;li>      <--nested element in de ul (child van ul)</p>
    |  <p>&lt;/li>         <--closing tag</p>
    | <p>&lt;/ul>         <--closing tag</p>
   <p>&lt;/div>        <--closing tag</p>

   - Voorbeeld 2:  
    &lt;p>This is &lt;em>Emphasize&lt;/em> Text&lt;/p>      <--&lt;em> is het nested element van &lt;p>

   &lt;p>This is &lt;b>bold&lt;/b> text&lt;/p>      <--&lt;b> is het nested element van &lt;p>
   - De &lt;p> is normaliter ook een nested element van een ander element zoals een div, section, article e.t.c.


<br>


9. Wat is het verschil tussen inline- en blok-elementen?

- Een Block(-level) Element begint altijd op een nieuwe lijn en de browser voegt automatisch ruimte (margin) toe voor en na het element.

* voorbeelden:
  - &lt;p> definieert een paragraaf.
  - &lt;div> definieert een scheiding of sectie.

- Inline Element begint NIET op een nieuwe lijn en gebruikt alleen de breedte die nodig is

* voorbeeld:
  - &lt;span> is een onderdeel element van een paragraaf.

    [meer info + lijst van block- en inline elementen](https://www.w3schools.com/html/html_blocks.asp)


<br>


10. Wat is accessibility?
    Accessibility betekent toegankelijkheid.
    In HTML betekent accessibility dat je je code zo toegangkelijk mogelijk maakt voor zowel mensen en computers. Dat houdt in dat je in je code rekening houdt met dat het makkelijk is voor de consumenten(met beperkingen), andere programmeurs en computer om de website te gebruiken. Dit bereik je door zoveel mogelijk de juiste HTML elementen te gebruiken voor de functie die ze hebben. Ook berijk je dit door de [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) accessibility standaard te gebruiken in je code.

    [meer info over accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
