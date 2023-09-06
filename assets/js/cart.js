

let carts =  JSON.parse(localStorage.getItem("cart"))
let total = document.querySelector(".total h2")
let removeALL = document.querySelector(".removeALL")

let productnum = document.querySelector(".header .cart span")
let card_cart =document.querySelector(".card_cart .content")

displayCards ()

function displayCards (){
    let element = ""
    carts.forEach((item)=>{
        element +=`<div class="card w-25 " data-id = "${item.id}">
        <img class="w-100" src="assets/imges/${item.img}" alt="">
        <div class="card-body">
          <h4>${item.title}</h4>
          <p> عددالقطع : ${item.quantity} </p>
          <p>${item.price}</p>
          <button> حذف القطعة</button>
        </div>
      </div>`
    })
    card_cart.innerHTML = element
    calcPrice ()
    removeItem ()
}

function removeItem (){
    let btn = document.querySelectorAll(".card_cart button")
    btn.forEach((btns)=>{
        btns.addEventListener("click" , ()=>{
            let prent = btns.closest(".card")
            // console.log(btns);
            let id = prent.dataset.id
            crt = carts.filter(product=>product.id != id)
            prent.remove()
            localStorage.setItem("cart" , JSON.stringify(crt))
            calcPrice ()
        })
    })
}

function calcPrice (){
let totalCalc = carts.reduce((acc, prod)=>{
    return acc + (prod.quantity * parseInt(prod.price))
},0)


total.textContent =  "  اجمالى المشتريات : " + totalCalc
}

removeALL.addEventListener("click" , ()=>{
    carts = []
    
    card_cart.innerHTML = `<h2> لا يوجد منتجات</h2>`
    localStorage.setItem("cart" , JSON.stringify(carts))
     calcPrice ()
})

productnum.textContent = carts.length

