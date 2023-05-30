let userContainer=document.getElementById("products")
const getProducts=()=>{
   return fetch('https://dummyjson.com/products?limit= 8')
    .then(response =>response.json())
    .then(response=>response)
    .catch(error=>error.message)
}
const displayProducts= async()=>{
const products= await getProducts()
console.log(products.products)
products.products.map(item=>{
    let div=document.createElement("div");
    div.className='gadgets'
    
    let img=document.createElement("img");
    let name=document.createElement("h2");
    let price=document.createElement("p");

    img.src=item.image
    name.innerHTML=`${item.name}`;
    price.innerHTML=item.price;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    userContainer.appendChild(div)
} 

)
}
displayProducts()
