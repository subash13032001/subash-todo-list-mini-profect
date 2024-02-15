var ul = document.getElementById("list")
var input=document.getElementById("inputbox")

function add() {
    var li = document.createElement("li")
    li.innerHTML = input.value + "<button onclick='deleteitem(event)' id='btn3'>Delete</button>"
    ul.append(li)
}
function deleteitem(event) {
    event.target.parentElement.remove()
}