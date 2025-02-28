//default import
import multiply from "./MathModule.mjs";

console.log(multiply(2,3));

//named imports
import {add, subtract} from "./MathModule.mjs";
console.log(add(2,3));
console.log(subtract(2,3));