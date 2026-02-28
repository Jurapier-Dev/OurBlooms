let hamburgerDom = document.getElementById('humburger')
let menuDom = document.getElementById('menu')

hamburgerDom.addEventListener('click', () => {
    menuDom.classList.toggle('active')
    hamburgerDom.classList.toggle('active')
})
