<img src="../images/css_logo.png" alt="CSS logo" height="100" >

<br>

# Display & Positioning

## 1. De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen.
<br>

- ### Static
    Het element wordt gepositioneerd volgens de flow van het document.
    
    - De top, right, bottom, left, en z-index properties werken niet bij static position.

    <br>

- ### Relative
    Het element wordt gepositioneerd volgens de flow van het document, maar je kan daarna een 'offset' toepassen op het element door de top, right, bottom, en left properties te gebruiken.
    
    Het 'offsetten' van het elemente heeft geen invloed op de posititie van andere elementen. Het element gedragd zich als een static element, maar je kan hem nog verplaatsen vanaf dat punt.

    - De offset wordt bepaald door de top, right, bottom, en left properties

<br>

- ### Absolute
    Het element wordt verwijderd uit de standaardflow van het document en wordt er geen ruimte meer gemaakt voor het element in de layout van de pagina. Het element wordt relatief tot zijn dichstbijzijnde voorouder als die er zijn. Anders wordt het geplaatst relatief tot de Initiële [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block).

    - De positie wordt bepaald door de top, right, bottom, en left properties.
    - De marges van een absolute en andere positions werken niet samen.
    - De absolute position creëert een nieuwe [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) als de z-index waarde niet 'auto' is.


<br>

- ### Fixed
    Het element wordt verwijderd uit de standaardflow van het document en wordt er geen ruimte meer gemaakt voor het element in de layout van de pagina. Het element wordt geplaatst relatief tot zijn Initiële [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) opgezet door [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport), tenzij een van zijn voorouders de transform, perspective, of filter propertie heeft waarvan de value niet "none" is. In dat geval is de voorouder de containing block.

    - De positie wordt bepaald door de top, right, bottom, en left properties.
    - De sticky position creëert een nieuwe [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). Op een geprint document zal het fixed element op elke pagine op dezelfde positie staan.

<br>

- ### Sticky
    Het element wordt gepositioneert volgens de standaardflow van het document, en krijgt een offset relatief tot zijn *dichtsbijzijnde scrolling ancestor*, [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) en table elementen. De offset heeft geen invloed op de positie van andere elementen.

    - De positie wordt bepaald door de top, right, bottom, en left properties.
    - De sticky position creëert een nieuwe [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
    - bindt zich aan de dichtsbijzijnde voorouder die een "scrolling mechanisme" heeft, ook als het niet echt de dichtsbijzijnde echt scrollende voorouder is.

<br>

Voorbeelden:

        position: static;
        position: relative;
        position: absolute;
        position: fixed;
        position: sticky;

[zie bron](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

<br><hr>

## De onderstaande opdrachten zijn praktijkopdrachten.
<br>

## 2. [css_03_opdracht_02.html](css_03_opdracht_02.html) 
<br>

## 3. [css_03_opdracht_03.html](css_03_opdracht_03.html)
<br>

## 4. [css_03_opdracht_04.html](css_03_opdracht_04.html)
<br>

## 5. [css_03_opdracht_05.html](css_03_opdracht_05.html)
<br>

## 6. [css_03_opdracht_06.html](css_03_opdracht_06.html)
<br>

## 7. [css_03_opdracht_07.html](css_03_opdracht_07.html)
<br>

## 8. [css_03_opdracht_08.html](css_03_opdracht_08.html)

<br><hr>