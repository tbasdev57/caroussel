let art = document.querySelectorAll('article')
let compteur = 0
let menuRond = document.createElement("div")
let tabRond = []
menuRond.style.height = "20px"
menuRond.style.width = (art.length * 20) + "px"
menuRond.style.position = "absolute"
menuRond.style.bottom = "20px"
menuRond.style.left = "0px"
menuRond.style.right = "0px"
menuRond.style.margin = "auto"
menuRond.style.display = "flex"
menuRond.style.justifyContent = "space-between"
menuRond.style.alignItems = "center"
document.querySelector('section').appendChild(menuRond)
for (let i = 0; i < art.length; i++) {
    let rond = document.createElement("div")
    rond.style.border = "1px solid black"
    rond.style.width = "10px"
    rond.style.height = "10px"
    rond.style.borderRadius = "50%"
    rond.style.backgroundColor = "white"
    rond.addEventListener('click', () => {
        compteur = i
        deplaceCarr()
    })
    rond.addEventListener('mouseover', () => {
        rond.style.cursor = "pointer"
    })
    tabRond.push(rond)
    menuRond.appendChild(rond)
}
function deplaceCarr() {
    if (compteur >= art.length) {
        compteur = 0
    }
    if (compteur < 0) {
        compteur = art.length - 1
    }
    for (let i = 0; i < art.length; i++) {
        art[i].style.left = ((i - compteur) * window.innerWidth * 0.8) + "px"
        tabRond[i].style.backgroundColor = (i == compteur) ? "gray" : "white"
    }
    compteur++

}
setInterval(deplaceCarr, 5000)

document.querySelector('.btnG').addEventListener('click', () => {
    compteur -= 2
    deplaceCarr()
})
document.querySelector('.btnD').addEventListener('click', () => {
    deplaceCarr()
})