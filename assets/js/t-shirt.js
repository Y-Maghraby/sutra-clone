

// menu list 

let title = document.querySelectorAll(".main_menu .title")
let menu = document.querySelectorAll(".list .menu")

title.forEach((ele)=>{
ele.addEventListener("click" , ()=>{
  let title_id = ele.getAttribute("id")
  menu.forEach((elem)=>{
    let data__id = elem.getAttribute("data-id")
    if(data__id == title_id){
      hidden ()
      elem.classList.add("show")
    }
  })
  removemMenMenu()
})
})
  
 function hidden (){
      menu.forEach((x)=>{
              x.classList.remove("show")
          })
        }

        function removemMenMenu(){
          men.style.display = "none"
        }
        function menMenu (){
          men.style.display = "flex"
        }

let men = document.querySelector(".men")    
let menClothes = document.querySelector(".menClothes")  

menClothes.addEventListener("click" , ()=>{
  hidden()
  menMenu ()
})
// -----------------------------------------------------

// pages --------

let homePage = document.querySelector(".secondNav .img")
homePage.addEventListener("click" , function(){
  open("index.html" , "blank")
})


let t_shirt= document.querySelector(".t-shirt")

t_shirt.addEventListener("click" ,function(){
open("T-shirt.html","blank")
// location.assign("T-shirt.html")
})


let shoes_list= document.querySelector(".shoes_list")

shoes_list.addEventListener("click" ,function(){
open("shoes.html","blank")
})

  let Cart = document.querySelector(".cart")
  Cart.addEventListener("click" ,function(){
  // open("cart.html","blank")
  location.assign("cart.html")
  })
// ---------------------------------------------------------------------------
// ----------------------------------------------------------------------
// cards

const Tshirts =[
  {
    id:1,
    title:" بولو سادة احمر ",
    price:"279 ",
    img:"Slim_Fit_Polo_Basic_Red-M_1.webp"
  },
  {
    id:2,
    title:" تيشرت سادة برقبةدائرية ",
    price:"139 ",
    img:"315A8961.webp"
  },  
  {
    id:3,
    title:" بولو سادة اسود ",
    price:"279 ",
    img:"Slim_Fit_Polo_Basic_Black-M_1.jpg"
  }, 
  {
    id:4,
    title:" تيشرت مطبوع ستار ابيض",
    price:"244 ",
    img:"Over_Size_PR-Star_White-M.webp"
  }, 
  {
    id:5,
    title:"تيشرت مطبوع فلور فلكلور",
    price:"244 ",
    img:"Over_Size_PR-Folklore_Flower-M_1.webp"
  },
  {
    id:6,
    title:"تيشرت مطبوع طائرة ورقية",
    price:"244 ",
    img:"315A5235_eda82227-7382-4d5b-8dff-a7a526bdcdc0.webp"
  },
 { 
  id:7,
  title:" تيشرت مطبوع علوم حاسب ",
  price:"244 ",
  img:"315A2889_a30b0777-257a-4443-b29e-5fe7c49caf1a.jpg"
},
{ 
  id:8,
  title:"تيشرت اوفر سايز مخطط",
  price:"244 ",
  img:"315A5344.jpg"
},
{ 
  id:9,
  title:" تيشرت مطبوع مقاتل ",
  price:"244 ",
  img:"315A3567.webp"
},
{ 
  id:10,
  title:" تيشرت مطبوع wings اسود",
  price:"244 ",
  img:"315A2734 (1).webp"
}
]

let product = document.querySelector(".t_items")
displayCards ()
let cart = JSON.parse(localStorage.getItem("cart"))
function displayCards (){
  
let item = ""

Tshirts.forEach((element)=>{
item +=` <div class="item" data-id="${element.id}">
<img class="imgs" src= "assets/imges/${element.img}" alt="oo">
<h5>Sutra</h5>
<h6>  ${element.title}</h6>
<p><span>${element.price}</span> <p>
<button class="btn btn-primary addCard"> اضف للسله</button>
</div>`
})
product.innerHTML = item
addEventTo()
}

function addEventTo(){
let addCard = document.querySelectorAll(".addCard")
addCard.forEach((prduct)=>{
  prduct.addEventListener("click" , ()=>{
    let parent = prduct.closest(".item")
    let id = parent.dataset.id
    let obj = Tshirts.find(prduct=>prduct.id == id)
    let cartObj = cart.find(prduct=>prduct.id == id)
    if(cartObj==undefined){
        cart.push({...obj , quantity:1})
    }else{
      cartObj.quantity ++
    }
      localStorage.setItem("cart" , JSON.stringify(cart))
   
  
  })
})
}




// --------------------------------------------------

// question section 
let icon = document.querySelectorAll(".question i")
let desc = document.querySelectorAll(".question p")


icon.forEach((ele)=>{
    ele.addEventListener("click" , ()=>{
      let title_id = ele.getAttribute("id")
      desc.forEach((elem)=>{
        let data__id = elem.getAttribute("data-id")
        if(data__id == title_id){
          hidden ()
          elem.classList.toggle("show")
        }
      
      })
    })
    })
      
     function hidden (){
        desc.forEach((x)=>{
            x.classList.remove("show")
              })
            }
    
        
