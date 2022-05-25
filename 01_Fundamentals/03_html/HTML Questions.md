# HTML Questions

1. Wat is <span style="color:orange">HTML</span>?
   HTML is een programmeer taal bestaande uit elementen, die kunnen worden toegepast op stukken text om die een andere betekenis te geven, een document in logische secties te verdelen en inhoud toe te voegen aan een pagina zoals afbeeldingen of video's.

<br>

2. Hoe ziet de <span style="color:orange">basis-structuur van HTML</span> eruit?
   - Een declaratie van de versie van HTML van het bestand.
   - Header
   - Body

<br>

3. Wat is een anchor tag?
   Een <span style="color:orange">anchor tag</span> is een aanklikbare text die een hyperlink bevat die verwijst naar een andere pagina, website, of deel van de pagina. Deze is standaard blauw en is onderstreept.

<br>

4. Noem een aantal nieuwe <span style="color:orange">functionaliteiten van HTML5</span>

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
     - Betere <a href="https://www.w3.org/html/wg/wiki/Guide/Syntax-Semantics#:~:text=Syntax%20is%20the%20arrangement%20of,the%20attributes%20of%20those%20elements." target="_blank" style="color=lightblue">syntax</a> dan de andere versies van HTML)

   [[top 10 nieuwe features van HTML5]](https://www.geeksforgeeks.org/top-10-new-features-of-html5/#:~:text=Audio%20and%20Video%20tags%20are,%2C%20transformations%2C%20and%20even%20animations.)

   [[HTML vs HTML5 en what's new]](https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-html-5-4ce9d62bf114)

<br>

5. Wat zijn HTML attributen?
   <span style="color:orange">HTML Attributen</span> zijn onderdelen van HTML code die informatie bevatten over de elementen die erin staan. De attribuut staat altijd in de start- en eindtag en is specifiek voor de functie die je wilt dat je code vervult.
   - <span style="color:blue">Voorbeeld: </span>Het href attribuut specificeert de URL waarnaar je verwezen wilt worden en heeft de &lt;a> tag (Anchor tag). deze definieert een hyperlink.
   - het href attribuut in een lijn code:
     &lt;a href:"https://github.com/ style="\_blank">Go to GitHub&lt;/a>

<br>

6. Wat is HTML semantics?
   <span style="color:orange">Semantic Elements</span> zijn beschrijvende elementen. deze elementen voegen (bijna) niks nieuws toe, behalve een duidelijke naam. Dat maakt dat ze een stukje accessibility met zich meebrengen en de code makkelijker te begrijpen maken voor andere programmeurs en computers.
   <span style="color:yellow">- Semantic elements worden gebruikt om de verschillende onderdelen van een webpagina aan te duiden.</span>

- De functionaliteit van Semantic elements is vooral de naamgeving. Je bent dus niet verplicht deze te gebruiken, maar het is wel een "good practise" om het wel te doen vanwege de volgende punten:
- Semantic elements hebben geen speciale standaard-CSS die ze in gebruik anders maken dan een div.

<br>

7. Waarvoor worden meta tags gebruikt?
   <span style="color:orange">Meta tags</span> worden gebruikt om metadata van een HTML bestand aan te geven (informatie geven over de data in het HTML bestand). - <span style="color:yellow">Metadata = data(informatie) over data</span>.

- de &lt;meta> tags gaan altijd in het &lt;head> element.
- meta tags specificeren meestal: character set, pagina beschrijving, sleutelwoorden(keywords), auteur van het document, viewport instellingen.

<br>

8. Wat is een nested element?
   Een <span style="color:orange">nested element</span> is een tag die in een ander tag zitten. Een nested element is het child element van een ander element.
   Een nested element kan ook parent element zijn van een ander child element. (zie voorbeeld 1)
   <span style="color:blue">- Voorbeeld 1:</span>
   &lt;div> <span style="color:green">&lt;!--parent van de ul--></span>
   &lt;ul> <span style="color:green">&lt;!--nested element in de div (child van div)--></span>
   &lt;li> <span style="color:green">&lt;!--nested element in de ul (child van ul)--></span>
   &lt;/li> <span style="color:green">&lt;!--closing tag--></span>
   &lt;/ul> <span style="color:green">&lt;!--closing tag--></span>
   &lt;/div> <span style="color:green">&lt;!--closing tag--></span> >
   <span style="color:blue">- Voorbeeld 2:</span>  
    &lt;p>This is &lt;em>Emphasize&lt;/em> Text&lt;/p> <span style="color:green">&lt;!--&lt;em> is het nested element van &lt;p>--></span>
   &lt;p>This is &lt;b>bold&lt;/b> text&lt;/p> <span style="color:green">&lt;!--&lt;b> is het nested element van &lt;p>--></span>
   <span style="color:yellow">- De &lt;p> is normaliter ook een nested element van een ander element zoals een div, section, article e.t.c.</span>

<br>

9. Wat is het verschil tussen inline- en blok-elementen?

- Een <span style="color:orange">Block(-level) Element</span> begint altijd op een nieuwe lijn en de browser voegt automatisch ruimte (margin) toe voor en na het element.

* <span style="color:blue">voorbeelden:</span>
  - &lt;p> definieert een paragraaf.
  - &lt;div> definieert een scheiding of sectie.

- <span style="color:orange">Inline Element</span> begint NIET op een nieuwe lijn en gebruikt alleen de breedte die nodig is

* <span style="color:blue">voorbeeld:</span>
  - &lt;span> is een onderdeel element van een paragraaf.

    [meer info + lijst van block- en inline elementen](https://www.w3schools.com/html/html_blocks.asp)

<br>

10. Wat is accessibility?
    <span style="color:orange">Accessibility</span> betekent <span style="color:orange">toegankelijkheid</span>.
    In HTML betekent accessibility dat je je code zo toegangkelijk mogelijk maakt voor zowel mensen en computers. Dat houdt in dat je in je code rekening houdt met dat het makkelijk is voor de consumenten(met beperkingen), andere programmeurs en computer om de website te gebruiken. Dit bereik je door zoveel mogelijk de juiste HTML elementen te gebruiken voor de functie die ze hebben. Ook berijk je dit door de [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) accessibility standaard te gebruiken in je code.

    [meer info over accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
