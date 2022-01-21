document.querySelectorAll(".play").forEach(play => {
    play.addEventListener("click", () => {
        play.classList.toggle("fa-play-circle")
        play.classList.toggle("fa-pause-circle")
        navigator.vibrate(200);
    })
})

const feitico = document.getElementById("feitico")
const playFeitico = document.getElementById("playFeitico")
var count = 0;

playFeitico.addEventListener("click", Feitico)

function Feitico() {
    if (count == 0) {
        count = 1
        feitico.play();
    } else {
        count = 0
        feitico.pause();
    }
}