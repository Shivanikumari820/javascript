
let Btn = document.querySelector("#Btn")
Btn.addEventListener('click' , () => {              //element.addEventListener(event, function, useCapture);
    alert("Welcome")
})



let Inp = document.querySelector("#inp")
Inp.addEventListener('keydown', (e) => {
       console.log(e.key)                  // isse ek ek krke print hota h eksath nhi
  });


/*   Add an input event listener to the input field ---->> eksath dikhe keydown ki trh ek ek alg nhi like s , sd kiya to s or d ek sath dikhe

 let Inp = document.querySelector("#inp")
 Inp.addEventListener('input', (e) => {
    // Update the content of the 'show' div with the current value of the input field
    show.innerHTML = Inp.value;
  });  
  
  */




/*
NOTES:--
addEventListener Method:
Syntax => element.addEventListener(event, function, useCapture);

-> Allows you to attach multiple event handlers to a single element without overwriting existing handlers.
-> Provides better separation of HTML and JavaScript, enhancing code maintainability.  */

