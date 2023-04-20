const mountain = document.getElementById("mountain")
const mountain1 = document.getElementById("mtn-1")
const mountain2 = document.getElementById("mtn-2")

mountain1.addEventListener("click", function() {
    mountain.src = `/img/background-3.jpg`
})

mountain2.addEventListener("click", function() {
    mountain.src = `/img/background-4.jpg`
})