<img src="../images/css_logo.png" alt="CSS logo" height="100" >

<br>

# Pseudo Elements

## 1. Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld.
<br>

*Ik heb er 16 gevonden.*

1. ## ::after (:after)
    Creëert een pseudo-element dat de laatste child is van een element. Wordt vooral gebruikt om cosmetishe content toe te voegen. Is standaard inline.

        a::after {
        content: "→";
        }
    <br><hr>

2. ## ::backdrop
    Het ::backdrop pseudo-element wordt gebruikt om alles onder een element te verbergen, te stylen of volledig te verbergen wanneer het de bovenste laag is

        dialog::backdrop {
        background: rgba(255,0,0,.25);
        }

    Backdrop wordt alleen zichtbaar als dialog is geopend met dialog.showModal()

    ::backdrop erft niet en wordt niet geërfd door andere elementen.
    <br><hr>

3. ## ::before (:before)
    Creëert een pseudo-element dat de laatste child is van een element. Wordt vooral gebruikt om cosmetishe content toe te voegen. Is standaard inline.

        a::before {
        content: "♥";
        }
    <br><hr>

4. ## ::cue
    Matcht [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)-cues binnen in een element. Dit kan worden gebruikt om captions en andere cues in media met VTT-tracks te stylen.

        ::cue {
        color: yellow;
        font-weight: bold;
        }

    background en zijn longhand properties werken alleen op de cue waarin ze staan.
    Voor de rest werken alle cues samen en worden de properties ook toegepast op alle andere cues.
    <br><hr>

5. ## ::cue-region
    Matcht [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)-cues binnen in een element. Dit kan worden gebruikt om captions en andere cues in media met VTT-tracks te stylen.

        ::cue-region {
        color: yellow;
        font-weight: bold;
        }

    background en zijn longhand properties werken alleen op de cue waarin ze staan.
    Voor de rest werken alle cues samen en worden de properties ook toegepast op alle andere cues.
    <br><hr>

6. ## ::first-letter (:first-letter)
    <br><hr>

7. ## ::first-line (first-line) 
    <br><hr>

8. ## ::file-selector-button
    <br><hr>

9. ## ::grammar-error
    <br><hr>

10. ## ::marker
    <br><hr>

11. ## ::part()
    <br><hr>

12. ## ::placeholder
    <br><hr>

13. ## ::selection
    <br><hr>

14. ## ::slotted()
    <br><hr>

15. ## ::spelling-error
    <br><hr>

16. ## ::target-text
    <br><hr>

## 2. [css_04_opdracht_02.html](css_04_opdracht_02.html)
<br>

## 3. [css_04_opdracht_03.html](css_04_opdracht_03.html)
<br>

## 4. [css_04_opdracht_04.html](css_04_opdracht_04.html)
<br>

## 5. [css_04_opdracht_05.html](css_04_opdracht_05.html)
<br>