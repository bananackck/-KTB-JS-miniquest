// import {add} from './math.js';
import {add, subtract} from './operations.js'
import {default as user} from './userProfile.js'

// console.log(add(2,3));

const jiji= new user("jiji","8");
console.log(jiji.name+" is "+jiji.age+" years old.")
console.log(add(subtract(3,2),subtract(9,5)))
