let mince = document.getElementById("mince");
let plus = document.getElementById("plus");
let bodyEle = document.getElementById("bodyEle");
let ThumpImages = document.querySelectorAll(".Thump img")
let img_primary = document.querySelector(".Thump img.active")
let img_prim = document.getElementById("img_prim")

ThumpImages.forEach((ele) => {
    ele.addEventListener("click", (img) => {
        ThumpImages.forEach((ele) => {
            ele.classList.remove("active")
        })
        img.currentTarget.classList.add("active")   
        console.log(img.currentTarget.src)
    })
})

plus.addEventListener("click", () => {
    count.innerText = parseInt(count.innerText) + 1
    console.log(count.innerHTML)
})
mince.addEventListener("click", () => {
    if (parseInt(count.innerText) > 1) {
        count.innerText = parseInt(count.innerText) - 1
    }
    else {
        count.innerHTML = 1
    }
    console.log(count.innerHTML)
})
let count_notif = document.getElementById("count_notif")
let addToCart = document.getElementById("addToCart")
let content = document.getElementById("content")
let title = document.getElementById("title");
let price = document.getElementById("price");
let descount = document.getElementById("descount");
let or_sale = document.getElementById("or_sale");
let count = document.getElementById("count");
let imgPrim = document.getElementById("img");
let empty = document.getElementById("empty")
let menu = document.getElementById("menu")
let cartMenu = document.getElementById("cartMenu")
let removeEle = document.getElementById("removeEle")
cartMenu.addEventListener("click", () => {
    menu.classList.toggle("none")
})


addToCart.addEventListener("click", () => {
    empty.classList.add("none")
    content.classList.remove("none")
    content.innerHTML += `
    
    <div class="item flex flex-row items-center gap-6">
            <img src=${img.src} class="w-[55px] h-[55px] rounded-md" alt="">
            <div class="info flex flex-col items-start gap-1">
                <span class="title_cart_item">${title.innerText}</span>
                <span class="price_cart_item">${price.innerText} x ${count.textContent} <span class="total_price"> = $${parseInt(price.innerText) * parseInt(count.textContent)}</span></span>
            </div>
            <i class="material-icons removeItem" id="deleteTask">close</i>
    </div>
    `
    count_notif.innerHTML = parseInt(count_notif.innerHTML) + 1
})


const observe = new IntersectionObserver((observ) => {
    observ.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})
const heddinelements = document.querySelectorAll(".heddin");
heddinelements.forEach((el) => observe.observe(el));

ThumpImages.forEach((ele) => {
    ele.addEventListener("click", (img) => {
        imgPrim.src = img.currentTarget.src
    })
})
let checkout = document.getElementById("checkout")

checkout.addEventListener("click", () => {
    menu.classList.add("none")
})
let deleteTask = document.getElementById("deleteTask")
let menuIcon = document.getElementById("menuIcon")
let MenuLinks = document.getElementById("menu_left_links")
let closeicon = document.getElementById("closeicon")
menuIcon.addEventListener("click", () => {
    MenuLinks.classList.remove("none")
})
closeicon.addEventListener("click", () => {
    MenuLinks.classList.add("none")
})

let imagesObj = [

    {
        src: "images/image-product-1.jpg",
        alt: "image-product-1",
        id : 1
    },
    {
        src: "images/image-product-2.jpg",
        alt: "image-product-2",
        id : 2
    },
    {
        src: "images/image-product-3.jpg",
        alt: "image-product-3",
        id : 3
    },
    {
        src: "images/image-product-4.jpg",
        alt: "image-product-4",
        id : 4
    }
]
let img = document.getElementById("img")
let arrow_right = document.querySelector(".arrow_right")
let arrow_left = document.querySelector(".arrow_left")

id = 1
arrow_right.addEventListener("click", () => {
    if (id < 4) {
        id = id + 1
    }
    else {
        id = 1
    }
    img.src = imagesObj[id - 1].src
})
// id = 1
arrow_left.addEventListener("click", () => {
    if (id > 1) {
        id = id - 1
    }
    else {
        id = 4
    }
    img.src = imagesObj[id - 1].src
})