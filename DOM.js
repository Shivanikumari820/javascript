// document.getElementById('text')
// document.getElementsByClassName('text2')
// document.querySelector('#text[if id uthaya], .text2[if class uthaya')   -> it is a best method to access those part rather than above two method

function okk(){
    let show = document.querySelector('#text')     //Uses the DOM to select the element with id="text" and stores it in the variable show.
    show.innerHTML = "shivani"                     // innerHtml = Replaces the content inside that element with the text "shivani".
}