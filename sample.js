
const name ="Arrow function"
let me = { 
 name: "Regular function", 
 thisInArrow:() => { 
   console.log("Example of " + this.name); //no 'this' binding here 
 }, 
 thisInRegular(){ 
   console.log("Example of " + this.name); //'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();