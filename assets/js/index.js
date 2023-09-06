

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

let t_shirt= document.querySelector(".t-shirt")

t_shirt.addEventListener("click" ,function(){
open("T-shirt.html","blank")
// location.assign("T-shirt.html")
})


let shoes_list= document.querySelector(".shoes_list")

shoes_list.addEventListener("click" ,function(){
open("shoes.html","blank")
})

  let cart = document.querySelector(".cart")
  cart.addEventListener("click" ,function(){
  // open("cart.html","blank")
  location.assign("cart.html")
  })
// ---------------------------------------------------------------------------
// form section 

let overlay = document.querySelector(".overlay")
let form = document.querySelector(".form")
let cancel = document.querySelector(".cancel")

let displyTimeout =   setTimeout(displayForm,2000)

function displayForm(){
  form.style.display = "block"
  overlay.style.display = "block"

}

cancel.addEventListener("click",function(){
  form.style.transform = "translate(200%,-20%)"
  overlay.style.display = "none"

})
let submit = document.querySelector(".submit")
let userIcon = document.querySelector(".second_navbar .user")
let icons = document.querySelector(".second_navbar .icons")
let iconSpan = document.querySelector(".second_navbar .icons .span")
let userName = document.querySelector(".form .userName")
let userEmail = document.querySelector(".form .email")
let userpassword = document.querySelector(".form .password")



submit.addEventListener("click" , (e)=>{
  e.preventDefault()
  let user = {
    userName :userName.value,
    userEmail:userEmail.value,
    userpassword :userpassword.value
  }
// console.log(user);
userIcon.style.display = "none"
iconSpan.style.display = "inline"
iconSpan.innerHTML = `${userName.value}`

})






// ----------------------------------------------------------------------------
// cards

// const shirts = [
//   {
//     id:1,
//     title:"بولين سادة",
//     price:"349 LE",
//     img:"315A5553_166f2dcd-e826-48aa-a6c0-282faa83c74f.jpg"
//   },
//   {
//     id:2,
//     title:"قميص مطبوع Lego اكمام قصير",
//     price:"314 LE",
//     img:"Short_Sleeves_Pocket_Shirt_Dark_Gray_6df83d28-e0ab-41c8-a655-68443ac5273c.jpg"
//   },  
//   {
//     id:3,
//     title:" اكمام قصيرة بجيب امامي",
//     price:"300 LE",
//     img:"315A2702_a62c7177-1be5-4591-8f6c-ae5ad9e1667e.jpg"
//   }, 
//   {
//     id:4,
//     title:" قميص مشجر اكمام قصيرة",
//     price:"314 LE",
//     img:"315A2845_2c77a617-acce-4223-b0de-102222fc287b.jpg"
//   }, 
//   {
//     id:5,
//     title:"قميص اكسفورد سادة اسود",
//     price:"454 LE",
//     img:"315A6599.jpg"
//   },
//   {
//     id:6,
//     title:"قميص اكسفورد سادة اكوا",
//     price:"454 LE",
//     img:"315A5568.jpg"
//   },
//  { 
//   id:7,
//   title:"قميص اكسفورد سادة Emerald",
//   price:"454 LE",
//   img:"315A5651.webp"
// },
// { 
//   id:8,
//   title:"قميص اكسفورد سادة  مسطردة",
//   price:"454 LE",
//   img:"315A2802.webp"
// },
// { 
//   id:9,
//   title:"قميص اكسفورد سادة  ازرق فاتح",
//   price:"454 LE",
//   img:"315A5601.webp"
// },
// { 
//   id:10,
//   title:"قميص ابوبلين مخطط بخط رفيع",
//   price:"314 LE",
//   img:"315A5496.webp"
// }
  
  
// ]

// const T_shirts =[
//   {
//     id:1,
//     title:" بولو سادة احمر ",
//     price:"279 LE",
//     img:"Slim_Fit_Polo_Basic_Red-M_1.webp"
//   },
//   {
//     id:2,
//     title:" تيشرت سادة برقبةدائرية ",
//     price:"139 LE",
//     img:"315A8961.webp"
//   },  
//   {
//     id:3,
//     title:" بولو سادة اسود ",
//     price:"279 LE",
//     img:"Slim_Fit_Polo_Basic_Black-M_1.jpg"
//   }, 
//   {
//     id:4,
//     title:" تيشرت مطبوع ستار ابيض",
//     price:"244 LE",
//     img:"Over_Size_PR-Star_White-M.webp"
//   }, 
//   {
//     id:5,
//     title:"تيشرت مطبوع فلور فلكلور",
//     price:"244 LE",
//     img:"Over_Size_PR-Folklore_Flower-M_1.webp"
//   },
//   {
//     id:6,
//     title:"تيشرت مطبوع طائرة ورقية",
//     price:"244 LE",
//     img:"315A5235_eda82227-7382-4d5b-8dff-a7a526bdcdc0.webp"
//   },
//  { 
//   id:7,
//   title:" تيشرت مطبوع علوم حاسب ",
//   price:"244 LE",
//   img:"315A2889_a30b0777-257a-4443-b29e-5fe7c49caf1a.jpg"
// },
// { 
//   id:8,
//   title:"تيشرت اوفر سايز مخطط",
//   price:"244 LE",
//   img:"315A5344.jpg"
// },
// { 
//   id:9,
//   title:" تيشرت مطبوع مقاتل ",
//   price:"244 LE",
//   img:"315A3567.webp"
// },
// { 
//   id:10,
//   title:" تيشرت مطبوع wings اسود",
//   price:"244 LE",
//   img:"315A2734 (1).webp"
// }
// ]

// const sweetPants = [
//   {
//     id:1,
//     title:" بنتلون سويت بانتس  ميلتون رمادى غامق",
//     price:"349 LE",
//     img:"G42A2424_1.jpg"
//   },
//   {
//     id:2,
//     title:" بنطلون سويت بانتس ميلتون سادة ابيض ",
//     price:"314 LE",
//     img:"Milton_Basic_Sweatpants_White-M_2.jpg"
//   },  
//   {
//     id:3,
//     title:" سويت بانس وتر بروف ",
//     price:"265 LE",
//     img:"315A9781.webp"
//   }, 
//   {
//     id:4,
//     title:" سويت بانتس مطبوع سترة - رمادي غامق ",
//     price:"265 LE",
//     img:"315A9794.webp"
//   }, 
//   {
//     id:5,
//     title:"سويت بانتس بيكا - نبيتي ",
//     price:"349 LE",
//     img:"315A0613.jpg"
//   },
//   {
//     id:6,
//     title:"سوفت سويت بانتس تلبيس متناسب مع الجسم - فضي",
//     price:"349 LE",
//     img:"Soft_Sweatpants_Silver-M_3.webp"
//   },
//  { 
//   id:7,
//   title:" بنطلون شروال ليجن - زيتي ",
//   price:"489 LE",
//   img:"315A7658.webp"
// },
// { 
//   id:8,
//   title:"بنطلون شروال ليجن بجيوب - اسود",
//   price:"559 LE",
//   img:"315A7661.webp"
// },
// { 
//   id:9,
//   title:"بنطلون شروال ليجن - أزرق غامق ",
//   price:"489 LE",
//   img:"315A7672.webp"
// },
// { 
//   id:10,
//   title:" بنطلون شروال ليجن - أبيض",
//   price:"489 LE",
//   img:"315A7752.webp"
// }
// ]

// const shoes =[
//   {
//     id:1,
//     title:"  سنيكرز كاجوال أبيض&أسود",
//     price:"419 LE",
//     img:"shoe2.jpg"
//   },
//   {
//     id:2,
//     title:"  سنيكرز كاجوال أبيض&رمادى",
//     price:"419 LE",
//     img:"shoe7.jpg"
//   },  
//   {
//     id:3,
//     title:" حذاء سترة الكاجوال للرجال ازرق غامق ",
//     price:"454 LE",
//     img:"shoe10.jpg"
//   }, 
//   {
//     id:4,
//     title:" حذاء سترة الكاجوال كحلى&رمادى",
//     price:"454 LE",
//     img:"shoe5.jpg"
//   }, 
//   {
//     id:5,
//     title:" حذاء سترة كاجوال بتصميم مختلف ومميز - ابيض ",
//     price:"384 LE",
//     img:"shoe4.jpg"
//   },
//   {
//     id:6,
//     title:"سوفت سويت بانتس تلبيس متناسب مع الجسم - فضي",
//     price:"349 LE",
//     img:"Soft_Sweatpants_Silver-M_3.webp"
//   },
//  { 
//   id:7,
//   title:" حذاء سترة الكاجوال رمادي ",
//   price:"454 LE",
//   img:"315A9832_26c4055e-5222-4b57-9b4a-44c53147d024.webp"
// },
// { 
//   id:8,
//   title:" حذاء سترة الكاجوال - أبيض ",
//   price:"454 LE",
//   img:"315A9758_bb43d045-6fa3-47db-9872-303bfec25051.webp"
// },
// { 
//   id:9,
//   title:" سترة سنيكرز كاجوال أسود ",
//   price:"419 LE",
//   img:"315A9819_98fe29d9-b96f-4f74-8679-b5e3f2d93f2e.webp"
// }
// ]

// --------------------------------------------------------

// new collection 

let slide_1 = document.querySelector(".new_collection .slide_1")
let slide_2 = document.querySelector(".new_collection .slide_2")
let slide_3 = document.querySelector(".new_collection .slide_3")

let newShirts=[{
  id:1,
  title:"بولين سادة",
  price:"349 LE",
  img:"315A5553_166f2dcd-e826-48aa-a6c0-282faa83c74f (1).jpg"
},
  {
    id:2,
    title:"قميص مطبوع Lego اكمام قصير",
    price:"314 LE",
    img:"Short_Sleeves_Pocket_Shirt_Dark_Gray_6df83d28-e0ab-41c8-a655-68443ac5273c.jpg"
  },  
  {
    id:3,
    title:" اكمام قصيرة بجيب امامي",
    price:"300 LE",
    img:"315A2702_a62c7177-1be5-4591-8f6c-ae5ad9e1667e.jpg"
  }, 
  {
    id:4,
    title:" قميص مشجر اكمام قصيرة",
    price:"314 LE",
    img:"315A2845_2c77a617-acce-4223-b0de-102222fc287b.jpg"
  }]

let newT_shirts = [{
  id:1,
  title:" بولو سادة احمر ",
  price:"279 LE",
  img:"Slim_Fit_Polo_Basic_Red-M_1.webp"
},
  {
    id:2,
    title:" تيشرت سادة برقبةدائرية ",
    price:"139 LE",
    img:"315A8961.webp"
  },  
  {
    id:3,
    title:" بولو سادة اسود ",
    price:"279 LE",
    img:"Slim_Fit_Polo_Basic_Black-M_1.jpg"
  }, 
  {
    id:4,
    title:" تيشرت مطبوع ستار ابيض",
    price:"244 LE",
    img:"Over_Size_PR-Star_White-M.webp"
  }]

let newShoe = [{
  id:1,
  title:"  سنيكرز كاجوال أبيض&أسود",
  price:"419 LE",
  img:"shoe2.jpg"
},
  {
    id:2,
    title:"  سنيكرز كاجوال أبيض&رمادى",
    price:"419 LE",
    img:"shoe7.jpg"
  },  
  {
    id:3,
    title:" حذاء سترة الكاجوال للرجال ازرق غامق ",
    price:"454 LE",
    img:"shoe10.jpg"
  }, 
  {
    id:4,
    title:" حذاء سترة الكاجوال كحلى&رمادى",
    price:"454 LE",
    img:"shoe5.jpg"
  }]

displyShirts ()
function displyShirts (){
let item = ""

newShirts.forEach((element)=>{
item +=`<div class="card" style="width: 18rem;">
<img src="assets/imges/${element.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${element.title}</h5>
  <p class="card-text">${element.price}</p>
  <a href="#" class="btn btn-primary">اضف للسلة</a>
</div>
</div>`
})
slide_1.innerHTML = item
}


displayTshirts ()
function displayTshirts (){
  let item = ""
  newT_shirts.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    slide_2.innerHTML = item
}


displayShoes ()
function displayShoes (){
  let item = ""
  newShoe.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    slide_3.innerHTML = item
}

// ----------------------------------------------------------------------------

// best_selections 

let bestSlide_1 = document.querySelector(".best_selections .best_slide_1")
let bestSlide_2 = document.querySelector(".best_selections .best_slide_2")
let bestSlide_3 = document.querySelector(".best_selections .best_slide_3")




let bestShirts=[ { 
  id:7,
  title:"قميص اكسفورد سادة Emerald",
  price:"454 LE",
  img:"315A5651.webp"
},
{ 
  id:8,
  title:"قميص اكسفورد سادة  مسطردة",
  price:"454 LE",
  img:"315A2802.webp"
},
{ 
  id:9,
  title:"قميص اكسفورد سادة  ازرق فاتح",
  price:"454 LE",
  img:"315A5601.webp"
},
{ 
  id:10,
  title:"قميص ابوبلين مخطط بخط رفيع",
  price:"314 LE",
  img:"315A5496.webp"
}]

let bestT_shirts = [ { 
  id:7,
  title:" تيشرت مطبوع علوم حاسب ",
  price:"244 LE",
  img:"Over_Size_PR-Folklore_Flower-M_1.webp"
},
{ 
  id:8,
  title:"تيشرت اوفر سايز مخطط",
  price:"244 LE",
  img:"315A5344.jpg"
},
{ 
  id:9,
  title:" تيشرت مطبوع مقاتل ",
  price:"244 LE",
  img:"315A3567.webp"
},
{ 
  id:10,
  title:" تيشرت مطبوع wings اسود",
  price:"244 LE",
  img:"315A2734 (1).webp"
}]



displybestShirts ()
function displybestShirts (){
let item = ""

bestShirts.forEach((element)=>{
item +=`<div class="card" style="width: 18rem;">
<img src="assets/imges/${element.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${element.title}</h5>
  <p class="card-text">${element.price}</p>
  <a href="#" class="btn btn-primary">اضف للسلة</a>
</div>
</div>`
})
bestSlide_1.innerHTML = item
}


displybesShirts ()
function displybesShirts (){
  let item = ""
  bestT_shirts.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    bestSlide_2.innerHTML = item
}


displaybestShoes ()
function displaybestShoes (){
  let item = ""
  newShoe.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    bestSlide_3.innerHTML = item
}


// ------------------------------------------------------------------------------------------

// slider shirt section -----------------

let slides =  document.querySelector(".shirts .slides")
let right = document.querySelector(".shirts .right")
let left = document.querySelector(".shirts .left")


let shirt_slide = document.querySelector(".shirts .shirt_slide")


let slide = []

   slide[0] = `  <div class="slide"><div class="card" style="width: 18rem;">
   <img src="assets/imges/315A2845_2c77a617-acce-4223-b0de-102222fc287b (1).jpg" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title"></h5>
     <p class="card-text"></p>
     <a href="#" class="btn btn-primary">اضف للسلة</a>
   </div>
   </div>
   <div class="card" style="width: 18rem;">
     <img src="assets/imges/Short_Sleeves_Pocket_Shirt_Dark_Gray_6df83d28-e0ab-41c8-a655-68443ac5273c.jpg" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title"></h5>
       <p class="card-text"></p>
       <a href="#" class="btn btn-primary">اضف للسلة</a>
     </div>
     </div>
     <div class="card" style="width: 18rem;">
       <img src="assets/imges/315A2802.webp" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title"></h5>
         <p class="card-text"></p>
         <a href="#" class="btn btn-primary">اضف للسلة</a>
       </div>
       </div>
       <div class="card" style="width: 18rem;">
         <img src="assets/imges/315A2702_a62c7177-1be5-4591-8f6c-ae5ad9e1667e.jpg" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title"></h5>
           <p class="card-text"></p>
           <a href="#" class="btn btn-primary">اضف للسلة</a>
         </div>
         </div></div>`


   slide[1] = `  <div class="slide">  <div class="card" style="width: 18rem;">
   <img src="assets/imges/315A5553_166f2dcd-e826-48aa-a6c0-282faa83c74f (1).jpg" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title"></h5>
     <p class="card-text"></p>
     <a href="#" class="btn btn-primary">اضف للسلة</a>
   </div>
   </div>
   <div class="card" style="width: 18rem;">
     <img src="assets/imges/315A5601.webp" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title"></h5>
       <p class="card-text"></p>
       <a href="#" class="btn btn-primary">اضف للسلة</a>
     </div>
     </div>
     <div class="card" style="width: 18rem;">
       <img src="assets/imges/315A5568.jpg" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title"></h5>
         <p class="card-text"></p>
         <a href="#" class="btn btn-primary">اضف للسلة</a>
       </div>
       </div>
       <div class="card" style="width: 18rem;">
         <img src="assets/imges/315A6594.jpg" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title"></h5>
           <p class="card-text"></p>
           <a href="#" class="btn btn-primary">اضف للسلة</a>
         </div>
         </div>
</div>`
   

   
index = 0

function nextfunc (){
    index ++
    if(index > slide.length-1){
        
    index = 0
    }
    slides.innerHTML= `${slide[index]}`
}

function prevfunc(){
    index --
    if(index < 0){
        
    index =  slide.length-1
    }
    slides.innerHTML= `${slide[index]}`
}

right.addEventListener("click" ,nextfunc)



left.addEventListener("click" ,prevfunc)


// ------------------------------------------------------------



// shoes section -------

let right_shoes = document.querySelector(".shoes .right")
let left_shoes = document.querySelector(".shoes .left")

let slides_shoes = document.querySelectorAll(".shoes .slide")

let shoeSlide_1 = document.querySelector(".shoes .slide_1")
let shoeSlide_2 = document.querySelector(".shoes .slide_2")
let shoeSlide_3 = document.querySelector(".shoes .slide_3")



const slideShoe_1 = [ {
  id:1,
  title:"  سنيكرز كاجوال أبيض&أسود",
  price:"419 LE",
  img:"shoe2.jpg"
},
  {
    id:2,
    title:"  سنيكرز كاجوال أبيض&رمادى",
    price:"419 LE",
    img:"shoe7.jpg"
  },  
  {
    id:3,
    title:" حذاء سترة الكاجوال للرجال ازرق غامق ",
    price:"454 LE",
    img:"shoe10.jpg"
  }]

const slideShoe_2 = [ {
      id:4,
      title:" حذاء سترة الكاجوال كحلى&رمادى",
      price:"454 LE",
      img:"shoe5.jpg"
    }, 
    {
      id:5,
      title:" حذاء سترة كاجوال بتصميم مختلف ومميز - ابيض ",
      price:"384 LE",
      img:"shoe4.jpg"
    },
    {
      id:6,
      title:" حذاء سترة الكاجوال كحلى&رمادى",
      price:"454 LE",
      img:"shoe5.jpg"
    }]

const slideShoe_3 = [ { 
    id:7,
    title:" حذاء سترة الكاجوال رمادي ",
    price:"454 LE",
    img:"315A9832_26c4055e-5222-4b57-9b4a-44c53147d024.webp"
  },
  { 
    id:8,
    title:" حذاء سترة الكاجوال - أبيض ",
    price:"454 LE",
    img:"315A9758_bb43d045-6fa3-47db-9872-303bfec25051.webp"
  },
  { 
    id:9,
    title:" حذاء سترة الكاجوال رمادي ",
    price:"454 LE",
    img:"315A9832_26c4055e-5222-4b57-9b4a-44c53147d024.webp"
  }]

displaybestShoe_1 ()
function displaybestShoe_1 (){
  let item = ""
  slideShoe_1.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    shoeSlide_1.innerHTML = item
}

displaybestShoe_2 ()
function displaybestShoe_2 (){
  let item = ""
  slideShoe_2.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    shoeSlide_2.innerHTML = item
}

displaybestShoe_3 ()
function displaybestShoe_3 (){
  let item = ""
  slideShoe_3.forEach((element)=>{
    item +=`<div class="card" style="width: 18rem;">
    <img src="assets/imges/${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">اضف للسلة</a>
    </div>
    </div>`
    })
    shoeSlide_3.innerHTML = item
}


let counter = 1;
slidefun(counter);

function plusSlides(n) {
	counter += n;
	slidefun(counter);
}
function slidefun(n) {

	for( let i = 0;i<slides_shoes.length;i++){
		slides_shoes[i].style.display = "none";
	}
	
	if(n > slides_shoes.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = slides_shoes.length;
	   }
     slides_shoes[counter -1 ].style.display = "flex";
}

left_shoes.addEventListener("click" ,function(){
	plusSlides(-1)
})

right_shoes.addEventListener("click" ,function(){
	plusSlides(1)
})

// -----------------------------------------------------------------------------------------------------------------

// testimonals section 

let right_testimonals = document.querySelector(".testimonals .right")
let left_testimonals = document.querySelector(".testimonals .left")
let slides_testimonals = document.querySelectorAll(".testimonals .slide")



let indexx = 1;
slidefu(indexx);

function plusSlide(n) {
	indexx += n;
	slidefu(indexx);
}
function slidefu(n) {

	for( let i = 0;i<slides_testimonals.length;i++){
		slides_testimonals[i].style.display = "none";
	}
	
	if(n > slides_testimonals.length){
	   indexx = 1;
	   }
	if(n < 1){
	   indexx = slides_testimonals.length;
	   }
     slides_testimonals[indexx -1 ].style.display = "block";
}

left_testimonals.addEventListener("click" ,function(){
	plusSlide(-1)
})

right_testimonals.addEventListener("click" ,function(){
	plusSlide(1)
})
// ---------------------------------------------------------------------





