const header = document.querySelector("header")

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 200)
})

let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.remove("open")
}

const fn = ScrollReveal({
    distance: "40px",
    duration: 2050,
    delay: 200,
    reset: true,
})

fn.reveal(".home-text", { origin: "top" })
fn.reveal(".about-text", { origin: "middle" })
fn.reveal(".about-img", { origin: "middle" })
