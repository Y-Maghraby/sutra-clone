//  cards 

const shoes =[
  {
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
  }, 
  {
    id:5,
    title:" حذاء سترة كاجوال بتصميم مختلف ومميز - ابيض ",
    price:"384 LE",
    img:"shoe4.jpg"
  },
 { 
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
  title:" سترة سنيكرز كاجوال أسود ",
  price:"419 LE",
  img:"315A9819_98fe29d9-b96f-4f74-8679-b5e3f2d93f2e.webp"
}
]

let product = document.querySelector(".t_items")
displayCards ()

function displayCards (){
  
let item = ""

shoes.forEach((element)=>{
item +=` <div class="item">
<img src= "assets/imges/${element.img}" alt="oo">
<h5>Sutra</h5>
<h6>  ${element.title}</h6>
<p><span>${element.price}</span></p>
</div>`
})

product.innerHTML = item

}


