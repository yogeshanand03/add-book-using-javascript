var popupoverlay=document.querySelector(".popup-overlay")
var popbox=document.querySelector(".pop-box")

var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popbox.style.display="block"
})



var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){

        event.preventDefault()
        popupoverlay.style.display="none"
        popbox.style.display="none"
})


var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
      <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
     popbox.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}