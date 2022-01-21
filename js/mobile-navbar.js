function navlistActive() {
    let navbar = document.getElementById("redes")
    let navLink = document.querySelectorAll(".navLink")

    navbar.classList.toggle("feito")

    navLink.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
    navigator.vibrate(100);
}



document.getElementById("menuMobile").addEventListener("click", navlistActive)
document.getElementById("menuMobile").addEventListener("click", () => {
    document.getElementById("menuMobile").classList.toggle("feito")
})
