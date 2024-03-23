window.addEventListener("DOMContentLoaded", () => {
    const sliderBar = document.querySelector(".slider__bar")
    const sliderToggle = sliderBar.querySelector(".slider__toggle")
    const imageBefore = document.querySelector(".slider__image-wrapper--before")
    const imageAfter = document.querySelector(".slider__image-wrapper--after")
    const labelBefore = document.querySelector(".slider__label--before")
    const labelAfter = document.querySelector(".slider__label--after")
    let widthContainer
    let itemsCurtsLeft
    let right
    let shiftX
    /**
     
Перемещаем  toggle
// @param  {Number} newLeft новая координата по X 
@param  {Number} right ширина свободного пространства
*/
    function moveToggle(newLeft, right) {
        if (newLeft < 0) {
            newLeft = 0
        }
        if (newLeft > right) {
            newLeft = right
        }
        let newWidth = Math.round(newLeft / right * 100)
        imageBefore.style.width = `calc(${newWidth}% + 40px)`
        imageAfter.style.width = 100 - newWidth + "%"
        if (newWidth == 0) {
            imageBefore.style.width = newWidth + "%"
            imageAfter.style.width = `calc(${100 - newWidth}% + 40px)`
        }
        sliderToggle.style.left = `${newWidth}%`
        console.log(imageAfter)
    }

    //slider для компов
    function sliderDesktop() {
        imageBefore.classList.add("slider__image-wrapper--active")
        imageAfter.classList.remove("slider__image-wrapper--active")
        if (widthContainer > 767) {
            let sliderClient = sliderBar.getBoundingClientRect()
            let sliderLeft = sliderClient.left + pageXOffset
            sliderToggle.onmousedown = function (event) {
                let itemClient = sliderToggle.getBoundingClientRect()
                itemsCurtsLeft = itemClient.left + window.scrollX
                right = sliderBar.offsetWidth - sliderToggle.offsetWidth
                shiftX = event.pageX - itemsCurtsLeft

                document.onmousemove = function (event) {
                    let newLeft = event.pageX - sliderLeft - shiftX
                    moveToggle(newLeft, right)
                    return false
                }
                document.onmouseup = function () {
                    document.onmousemove = document.onmouseup = null
                }
            }
            initLabel()
        }
        else {
            sliderMobile()
        }
    }

    function sliderTablet() {
        imageBefore.classList.add("slider__image-wrapper--active")
        imageAfter.classList.remove("slider__image-wrapper--active")
        if (widthContainer > 767) {
            let sliderClientCoords = sliderBar.getBoundingClientRect()
            let sliderLeft = sliderClientCoords.left + window.scrollX
            sliderToggle.ontouchstart = function (event) {
                let itemClientCoords = sliderToggle.getBoundingClientRect()
                itemsCurtsLeft = itemClientCoords.left + window.scrollX
                right = sliderBar.offsetWidth - sliderToggle.offsetWidth
                shiftX = event.touches[0].pageX - itemsCurtsLeft
                // const array = [1, 2, 3]
            }
            sliderToggle.ontouchmove = function (event) {
                let newLeft = event.targetTouches[0].pageX - sliderLeft - shiftX
                moveToggle(newLeft, right)
            }
            initLabel()
        }
        else {
            sliderMobile()
        }
    }

    function sliderMobile() {
        imageAfter.style = ""
        imageBefore.style = ""
        sliderToggle.style = ""
        document.onmousedown = null
        sliderToggle.onclick = function () {
            if (parseInt(getComputedStyle(sliderToggle).marginLeft) > 6) {
                before()
            }
        }
        labelAfter.onclick = function () {
            before()
        }
        labelBefore.onclick = function () {
            after()
        }
        function before() {
            sliderToggle.style.marginRight = "auto"
            sliderToggle.style.marginLeft = ""
            imageBefore.classList.add("slider__image-wrapper--active")
            imageAfter.classList.remove("slider__image-wrapper--active")
        }
        function after() {
            sliderToggle.style.marginRight = ""
            sliderToggle.style.marginLeft = "auto"
            imageBefore.classList.remove("slider__image-wrapper--active")
            imageAfter.classList.add("slider__image-wrapper--active")
        }
    }

    //обрабатывает кнопки Было Стало
    function initLabel() {
        right = sliderBar.offsetWidth - sliderToggle.offsetWidth
        labelAfter.onclick = function (event) {
            imageBefore.style.width = 0
            imageAfter.style.width = `100%`
            sliderToggle.style.left = `0%`
        }
        labelBefore.onclick = function (event) {
            imageBefore.style.width = `100%`
            imageAfter.style.width = 0
            sliderToggle.style.left = `100%`
        }
    }

    /**
создаем slider
*/
    function initSlider() {
        widthContainer = document.querySelector(".container").offsetWidth
        console.log(getComputedStyle(sliderToggle))
        if (/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent)) {
            if (widthContainer > 767) {
                // вызывается функция для планшетов
                sliderTablet()
            }
            else {
                // вызывается функция для мобилок
                sliderMobile()
            }
        }
        else {
            sliderDesktop()
        }
    }

    initSlider()
    window.onresize = initSlider
})