# pythagora
javascript library solving the Pythagorean theorem

# Installation :

```bash 
npm i pythagore
```

# Use :

```javascript
const Pythagore = require('pythagore'); 

let pythagore; 
let hypotenuse;
let side_a;
let side_b;
let is_rectangle;

pythagore = new Pythagore();

console.log("--- Author Information ---");
pythagore.Author(); 


console.log("\n--- Right triangle verification ---");
side_a = 3;
side_b = 4;
hypotenuse = 5; 

is_rectangle = pythagore.IsRectangle(hypotenuse, side_a, side_b);
console.log(`The triangle with sides ${hypotenuse}, ${side_a}, ${side_b} is it rectangle ? ${is_rectangle}`); 


side_a = 2;
side_b = 3;
hypotenuse = 4;
is_rectangle = pythagore.IsRectangle(hypotenuse, side_a, side_b); 
console.log(`The triangle with sides ${hypotenuse}, ${side_a}, ${side_b} is it rectangle ? ${is_rectangle}`); 


console.log("\n--- Calculation of an adjacent side ---");

hypotenuse = 10;
side_b = 6;
side_a = pythagore.AdjacentSide(hypotenuse, side_b);
console.log(`If the hypotenuse is ${hypotenuse} and one side is ${side_b}, the missing side is : ${side_a}`); 


console.log("\n--- Calculation of the hypotenuse ---");

side_a = 7;
side_b = 24;
hypotenuse = pythagore.Hypotenus(side_a, side_b);
console.log(`If the sides are ${side_a} and ${side_b}, the hypotenuse is : ${hypotenuse}`); 

console.log("\n\n");

// ------------------------------------------------

side_a = 7;
side_b = 8;
hypotenuse = null;
pythagore = new Pythagore(side_a, side_b);


try {
    hypotenuse = pythagore.Hypotenus();
    is_rectangle = pythagore.IsRectangle(hypotenuse); 
    console.log(`The triangle is it rectangle ? ${is_rectangle}`);

    if(pythagore.AdjacentSide(hypotenuse, side_a) === side_b){
        console.log('sucess');
    }


}catch (err){
    console.error("Error checking right triangle :", err.message);
}

console.log("\n\n");

// -------------------------------------------

side_a = null; // 3
side_b = 4; // 4
hypotenuse = 5; // 5

pythagore = new Pythagore(side_a, side_b, hypotenuse);


try {
    side_a = pythagore.AdjacentSide()
    hypotenuse = pythagore.Hypotenus(side_a, side_b);
    is_rectangle = pythagore.IsRectangle(hypotenuse, side_a, side_b); 
    console.log(`The triangle is it rectangle ? ${is_rectangle}`);

    if(pythagore.AdjacentSide(hypotenuse, side_a) === side_b){
        console.log('sucess');
    }

    
}catch (err){
    console.error("Error checking right triangle :", err.message);
}
console.log("\n\n");
// -------------------------------------------



side_a = 3; // 3
side_b = 4; // 4
hypotenuse = 5; // 5

pythagore = new Pythagore(side_a, side_b, hypotenuse);


try {

    hypotenuse = pythagore.Hypotenus();
    is_rectangle = pythagore.IsRectangle(); 
    console.log(`The triangle is it rectangle ? ${is_rectangle}`);

    if(pythagore.AdjacentSide(hypotenuse, side_a) === side_b){
        console.log('sucess');
    }

    
}catch (err){
    console.error("Error checking right triangle :", err.message);
}
```