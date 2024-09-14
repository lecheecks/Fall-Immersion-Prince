function counter() {
    // W rite your code below. Hint: you can finish it in about 3-5 lines.
    
    // data types: intigers, float, string, boolean
    // variable = a storage container for data 

    // create a varible to store the tag we want to change
    counter_number = document.getElementById('counter-number');

   // change the text of the tag we have stored in the varianble 
   counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1;
}
