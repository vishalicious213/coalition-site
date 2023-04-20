const mountain = document.getElementById("mountain")
const mountain1 = document.getElementById("mtn-1")
const mountain2 = document.getElementById("mtn-2")
const mobileNav = document.getElementById("mobile-nav")
const mobileMenuItems = document.getElementById("mobile-menu-items")

mountain1.addEventListener("click", function() {
    mountain.src = `/img/background-3.jpg`
})

mountain2.addEventListener("click", function() {
    mountain.src = `/img/background-4.jpg`
})

mobileNav.addEventListener("click", function() {
    console.log("clicked")
    mobileMenuItems.classList.toggle("display-block")
})