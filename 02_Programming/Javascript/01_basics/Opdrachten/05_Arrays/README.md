<img src="../../images/javascript_logo.png" alt="Sass logo" height="100" >

<br>

# JavaScript Arrays & Loops
De Javascript codes vindt je in [main.js](./main.js)
<hr>

## 5.4

### Onderzoek de volgende array methods en maak voor elke een voorbeeld:
<br>

- filter()

     Creëert een nieuw array gevuld met elementen die door een test functie zijn gekomen in een functie, filter() executeert de functie niet voor lege elementen. Deze method past de originelle array niet aan.

    ```js
    const numbers = [11, 26, 32, 43, 58, 61, 70];

    // filtreert alle elementen uit die niet meer dan 4 zijn
    const result = array.filter(element => element > 4);

    console.log(result);
    ```
    console:
    > (3) [58, 61, 70]

    <br><hr>

- find()
     Geeft het eerste element van een array terug dat wordt gevonden door een test functie. Als er geen waarde gevonden wordt. Wordt er undefined teruggegeven.

    ```js
    const array = [11, 26, 32, 43, 58, 61, 70];

    // Zoekt het eerste element met een waarde boven 50
    const result = array.find(element => element > 50);
    
    console.log(result);
    ```
    console:
    > 58

    <br>

- some()
    Test of tenminste één element in het array door de test functie komt. Geeft **true** terug als er in het array een element zit waarvoor de returnwaarde van de functie true is. Andes geeft het **false** terug. some() past het array niet aan.

    ```js
    const array = [1, 2, 3, 4, 5];

    // Checkt of een element een even waarde heeft
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
    ```
    console:
    > true

    <br>

- every()
    Test of alle elementen van het array door te test komen die in de functie staan en geeft een Boolean waarde terug.

    ```js

    ```

- includes()
