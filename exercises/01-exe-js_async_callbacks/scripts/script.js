//Exercise 1: What is the expected output? And why?

/* function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
// EXPECTED OUTPUT 1 4 3 2

  print(); */
  
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second 
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 


  const h1Tag = document.getElementsByTagName("h1")[0];
  const h2Tag = document.getElementsByTagName("h2")[0];
  const h3Tag = document.getElementsByTagName("h3")[0];

  function blast(){

    for(let i = 0; i <= 15; i++){
      if(i % 15 == 0){
        console.log("BOOM BANG")
        h1Tag.innerText += "BOOM BANG" + ""
      }else if(i % 5 == 0){
        console.log("BANG ")
        h2Tag.innerText += "BANG" + ""
      }else if(i % 3 == 0){
        console.log("BOOM ")
        h3Tag.innerText += "BOOM" + ""
    }
  }
}

blast()
  
  
  
