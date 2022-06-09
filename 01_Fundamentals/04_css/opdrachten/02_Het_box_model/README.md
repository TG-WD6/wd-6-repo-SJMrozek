<img src="../images/css_logo.png" alt="CSS logo" height="100" >

<br>

# CSS Het Box Model

## 1.Wat zijn de eigenschappen van block boxes en inline boxes?
<br>

- ### Block boxes
    Een block element pakt de hele horizontale ruimte die beschikbaar is. Dit zorgt ervoor dat het volgende element van de pagina automatisch naar een nieuwe rij wordt verplaatst.

- ### Inline boxes
    pakt precies genoeg horizontale ruimte om zijn inhoud weer te geven.
    Dit betekent dat er nog ruite overblijft voor de volgende elementen met een inline box. Zo kun je elementen naast elkaar plaatsen.

<br><hr>

## 2.  [css_02_opdracht_02.html](css_02_opdracht_02.html)

<br><hr>

## 3. Wat gebeurt er als je een width en een height toevoegt aan de span tag ( &lt;span> ) van vorige opdracht?
<br>

Er gebeurt dan helemaal niets.

<br><hr>

## 4. Leg uit wat de volgende termen betekenen: content, padding, margin en border.
<br>

![box_model](/01_Fundamentals/04_css/images/image11.png)

- ### Content:
    Content is de inhoud van de box. dit is gewoonlijk text of een afbeelding.

- ### Padding:
    Padding is de ruimte tussen de content en de border van de box. deze is niet "zichtbaar". met padding kan je ervoor zorgen dat de inhoud niet direct contact maakt met de randen van je box.

- ### Margin:
    Margin is de ruimte die de box om zich heen vrij laat. deze is niet zichtbaar.
    andere boxen houden automatisch de hoogste marge waarde aan van de naastliggende box om afstand van elakar te houden.

- ### Border:
    Border is de rand van je box. Deze kan je een kleur geven en zit om de padding heen.

<br><hr>

## 5. Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.
<br>

In dit geval gebruik je de <span style="color:orange">padding property</span>. zie voorbeeld:

    .box {
        padding: 10px;
    }

<br><hr>

## 6. Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.
<br>

In dit geval gebruik je de <span style="color:orange">margin property</span>. zie voorbeeld:

    .box {
        margin: 50px;
    }

<br><hr>

## 7. Maak nu een blok met width: 100px, height: 100px, margin: 5px, padding 5px en border-width: 5px. [css_02_opdracht_07.html](css_02_opdracht_07.html)
<br>

- ### Hoe breed is de box?
    120 pixels

- ### Hoe hoog is de box?
    120 pixels

- ### Wat merk je op met width en height?
    De width/height gelden alleen voor de content. de padding en border worden erbij opgeteld.

<br><hr>

## 8. Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?
<br>

Daarvoor gebruik je de <span style="color:orange">box-sizing property</span>  met de <span style="color:orange">border-box value</span>. zie voorbeeld:

    .box {
        width: 100px;
        height: 100px;
        margin: 5px;
        padding: 5px;
        border: 5px solid ;
        box-sizing: border-box;         <---------
    }
box-sizing: border-box;
<br><hr>