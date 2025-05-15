function shivani() {

//BOM = Browser Object Model --->> alert() , confirm(), and prompt()
    // window.alert("ok, I got it")
    // window.confirm("Are you ok")
    // window.prompt("How old are you", " ")


//  Example
let confirmans = window.alert("Are you ok")
console.log(confirmans)



// prompt ko kese bhi call kro --->>
let promptans =   window.prompt("How old are you", " ")
//  ------------------- isko ham kese bhi call kr skte h ----------------
console.log(promptans)           
window.alert (promptans)
window.confirm (promptans)
}
shivani()








// we can also write this without window
// BOM = including alert() (displays a message box), confirm() (shows a dialog with OK/Cancel), and prompt() (asks for user input with a textbox).



//Other method ---->>
// 🔹 3. location Object   ------------------------------------>>>  
// The location object contains information about the current URL and allows navigation to different URLs.

// location.href : Gets or sets the current URL

console.log(location.href);
location.href = "https://www.google.com";

// location.reload(): Reloads the current page.
location.reload();


// location.assign(url): Loads a new document.
location.assign("https://www.example.com");


// location.replace(url): Replaces the current document with a new one.
location.replace("https://www.example.com");