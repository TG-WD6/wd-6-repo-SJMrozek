<img src="../../images/javascript_logo.png" alt="Sass logo" height="100" >

<br>

# JavaScript Arrays & Loops
De Javascript codes vindt je in [main.js](./main.js)
<hr>

## 6.1

### 1. Maak meerdere objects Pet met een naam en een soort. Maak een ander dier met elk van de 5 soorten constructor uit de voorbeelden en log deze in de console. Kijk bij elke ook naar de prototype - kan je een verschil ontdekken?
<br>

- Het verschil dat mij opvalt is dat bij de **Function**, **Singleton** en **Class-based** duidelijke en specifieke constructors staan in het prototype. Van wat ik zie geldt dit dus alleen voor de Constructors die een functie of class gebruiken met een constructor erin met haakjes voor parameters. Als er parameters in staan worden die ook weergegeven in de constructor in het prototype.

    Bij de **Object** en **Literal** constructors Staat er dus niet staandaard een duidelijke constructor in het prototype.

- Waarom ik denk dat dit gebeurt, is omdat de **Object** en **Literal** constructors alleen een definitie zijn van een variabel. Terwijl de **Function**, **Singleton** en **Class-based** constructorsals het ware 'templates' gebruiken. Deze templates zijn uiteindelijk de constructors die je ziet staan in het protype.

<br><hr>

### 2. Gebruik Object.create() om een Object aan te maken. Doe dit voor elke Pet die je in de vorige opdracht hebt gemaakt, en log ze in de console. Valt er iets op aan de prototype?
<br>

- Nu staat er geen 'constructor' in het prototype, maar wel de template die ik heb gemaakt met de oorspronkelijke waardes.

<br><hr>