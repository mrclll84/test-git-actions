const templatesNav = `            <img class="animate" src="./img/logo-desktop.png" alt="logo">
<ul class="header-list">
    <li class="header-list__item index cursor-pointer">
        <a href="./index.html">Главная</a>
    </li>
    <li class="header-list__item catalog cursor-pointer">
        <a href="./catalog.html">Каталог продукции</a>
    </li>
    <li class="header-list__item form cursor-pointer">
        <a href="./form.html">Подбор программы</a>
    </li>
</ul>
<div class="hamburger hamburger--collapse">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>`
const templatesNavMobile = `<ul class="header-list__mobile">
<li class="header-list__item index cursor-pointer">
    <a href="./index.html">Главная</a>
</li>
<li class="header-list__item catalog cursor-pointer">
    <a href="./catalog.html">Каталог продукции</a>
</li>
<li class="header-list__item form cursor-pointer">
    <a href="./form.html">Подбор программы</a>
</li>
</ul>`
window.addEventListener("DOMContentLoaded", () => {
    let widthContainer = 0
    const footerLogo = document.querySelector(".footer-academy img")
    function getWidth() {
        widthContainer = document.querySelector("body").offsetWidth
        console.log(window.location)
        if (footerLogo) {
            if (widthContainer > 768) {
                footerLogo.src = "../img/logo-footer.png"
            }
            else {
                footerLogo.src = "../img/htmlAcademyMobile.png"
            }
        }
    }
    getWidth()
    window.onresize = getWidth
    let pathName = window.location.pathname
    let html = document.querySelector("html")
    let mobileNav = document.querySelector(".mobile-nav")
    let desktopNav = document.querySelector(".desktop-nav")
    mobileNav.innerHTML = templatesNavMobile
    desktopNav.innerHTML = templatesNav
    let hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function () {
        mobileNav.classList.toggle("is-active")
        hamburger.classList.toggle("is-active")
        if (hamburger.classList.contains("is-active")) {
            html.style.overflow = "hidden"
        }
        else {
            html.style.overflow = ""
        }
    }

    if (pathName.includes("index")) {
        desktopNav.querySelector(".index").classList.add("header-list__item--active")
        mobileNav.querySelector(".index").classList.add("header-list__item--active")
    }
    else if (pathName.includes("form")) {
        console.log(desktopNav.querySelector(".form"))
        desktopNav.querySelector(".form").classList.add("header-list__item--active")
        mobileNav.querySelector(".form").classList.add("header-list__item--active")
    }
    else if (pathName.includes("catalog")) {
        desktopNav.querySelector(".catalog").classList.add("header-list__item--active")
        mobileNav.querySelector(".catalog").classList.add("header-list__item--active")
    }
    if (pathName.includes("catalog") || pathName.includes("form")) {
        desktopNav.querySelector(".index").classList.add("text-black")
        desktopNav.querySelector(".form").classList.add("text-black")
        desktopNav.querySelector(".catalog").classList.add("text-black")
    }

    let catalogList = document.querySelector(".catalog-list")
    let catalog = [
        {
            name: " Cat Energy PRO 500 г",
            image: "../img/chicken-small-desktop@1x.png",
            weight: "500 г",
            taste: "Курица",
            price: "700 Р."
        },
        {
            name: " Cat Energy PRO 1000 г",
            image: "../img/chicken-small-desktop@1x.png",
            weight: "1000 г",
            taste: "Курица",
            price: "1000 Р."
        },
        {
            name: " Cat Energy PRO 500 г",
            image: "../img/fish-small-desktop@1x.png",
            weight: "500 г",
            taste: "Рыба",
            price: "700 Р."
        },
        {
            name: " Cat Energy PRO 1000 г",
            image: "../img/fish-small-desktop@1x.png",
            weight: "1000 г",
            taste: "Рыба",
            price: "1000 Р."
        },
        {
            name: " Cat Energy PRO 500 г",
            image: "../img/buckwheat-small-desktop@1x.png",
            weight: "500 г",
            taste: "Гречка",
            price: "400 Р."
        },
        {
            name: " Cat Energy PRO 1000 г",
            image: "../img/buckwheat-small-desktop@1x.png",
            weight: "1000 г",
            taste: "Гречка",
            price: "700 Р."
        },
        {
            name: " Cat Energy PRO 500 г",
            image: "../img/rice-small-desktop@1x.png",
            weight: "500 г",
            taste: "Рис",
            price: "500 Р."
        },
    ]
    window.addEventListener("click",(event) =>{
        if (event.target.classList.contains("show-all")){
            for (const item of catalog) {
                if (!catalogList) {
                    break
                }
                let isBig = parseInt(item.weight) > 700
                const card = `<div class="catalog-list-card ${isBig ? "isbig" : ""}">
                <div class="catalog-list-body">
                    <img src="${item.image}" alt="chicken small">
                    <div class="catalog-list-params">
                        <p class="catalog-list-name">
                            ${item.name}
                        </p>
                        <p class="catalog-list-weight">
                            <span class="params-name">Масса</span>
                            <span class="params-value">${item.weight}</span>
                        </p>
                        <p class="catalog-list-taste">
                            <span class="params-name">Вкус</span>
                            <span class="params-value">${item.taste}</span>
                        </p>
                        <p class="catalog-list-price">
                            <span class="params-name">Цена</span>
                            <span class="params-value">${item.price}</span>
                        </p>
                    </div>
                </div>
                <div class="catalog-list-actions">
                    <button class="button-default">Заказать</button>
                </div>
            </div>`
                catalogList.innerHTML += card
            }
        }
    })
    for (const item of catalog) {
        if (!catalogList) {
            break
        }
        let isBig = parseInt(item.weight) > 700
        const card = `<div class="catalog-list-card ${isBig ? "isbig" : ""}">
        <div class="catalog-list-body">
            <img src="${item.image}" alt="chicken small">
            <div class="catalog-list-params">
                <p class="catalog-list-name">
                    ${item.name}
                </p>
                <p class="catalog-list-weight">
                    <span class="params-name">Масса</span>
                    <span class="params-value">${item.weight}</span>
                </p>
                <p class="catalog-list-taste">
                    <span class="params-name">Вкус</span>
                    <span class="params-value">${item.taste}</span>
                </p>
                <p class="catalog-list-price">
                    <span class="params-name">Цена</span>
                    <span class="params-value">${item.price}</span>
                </p>
            </div>
        </div>
        <div class="catalog-list-actions">
            <button class="button-default">Заказать</button>
        </div>
    </div>`
        catalogList.innerHTML += card
    }
})