# pythagora
javascript library solving the Pythagorean theorem

# Installation :

```bash 
npm i pythagore
```

# Use :

```javascript
const Pythagore = require('pythagore'); 


const calculPythagore = new Pythagore();


console.log("--- Author Information ---");
calculPythagore.Author(); 


console.log("\n--- Right triangle verification ---");
let cote1 = 3;
let cote2 = 4;
let hypotenusePotentielle = 5; 

let estRectangle = calculPythagore.IsRectangle(hypotenusePotentielle, cote1, cote2);
console.log(`The triangle with sides ${hypotenusePotentielle}, ${cote1}, ${cote2} is it rectangle ? ${estRectangle}`); 

let coteA = 2;
let coteB = 3;
let coteC = 4;
let estRectangle2 = calculPythagore.IsRectangle(coteC, coteA, coteB); 
console.log(`The triangle with sides ${coteC}, ${coteA}, ${coteB} is it rectangle ? ${estRectangle2}`); 


console.log("\n--- Calculation of an adjacent side ---");
let hypotenuseConnue = 10;
let autreCoteConnu = 6;
let coteManquant = calculPythagore.AdjacentSide(hypotenuseConnue, autreCoteConnu);
console.log(`If the hypotenuse is ${hypotenuseConnue} and one side is ${autreCoteConnu}, the missing side is : ${coteManquant}`); 


console.log("\n--- Calculation of the hypotenuse ---");
let cateteA = 7;
let cateteB = 24;
let hypotenuseCalculee = calculPythagore.Hypotenus(cateteA, cateteB);
console.log(`If the sides are ${cateteA} and ${cateteB}, the hypotenuse is : ${hypotenuseCalculee}`); 
```