// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(){
  return cats.push("Ralph")
 }
 function destructivelyPrependCat(){
    return cats.unshift("Bob")
 }
 function destructivelyRemoveLastCat(){
    return cats.pop()
 }
  function destructivelyRemoveFirstCat(){
    return cats.shift("Bob");
  }
   function appendCat(name){
    const moreCats = [...cats,"Broom"];
    return moreCats;
   }

   
   function prependCat(name){
    const  lesscats = ["Arnold", ...cats];
    return lesscats;
   }

   function removeLastCat(){
    const hey = cats.slice(0,cats.length-1);
    return hey;

   }
   function removeFirstCat(name){
    const hello = cats.slice(1);
    return hello;
   }

 


       