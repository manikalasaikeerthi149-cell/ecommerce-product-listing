const products=[

{
name:"Wireless Headphones",
category:"Electronics",
price:79,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
name:"Running Shoes",
category:"Shoes",
price:99,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
name:"Smart Watch",
category:"Electronics",
price:149,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
name:"Casual T-Shirt",
category:"Fashion",
price:29,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},

{
name:"Sneakers",
category:"Shoes",
price:89,
image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
},

{
name:"Denim Jacket",
category:"Fashion",
price:65,
image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
}

];

const container=document.getElementById("products");

function display(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<div class="content">

<div class="category">${product.category}</div>

<h2>${product.name}</h2>

<div class="price">$${product.price}</div>

<button>Add to Cart</button>

</div>

</div>

`;

});

}

display(products);

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=products.filter(item=>

item.name.toLowerCase().includes(value)

);

display(filtered);

});

document.getElementById("category").addEventListener("change",function(){

const cat=this.value;

if(cat==="all"){

display(products);

return;

}

display(products.filter(item=>item.category===cat));

});

document.getElementById("sort").addEventListener("change",function(){

let sorted=[...products];

if(this.value==="low"){

sorted.sort((a,b)=>a.price-b.price);

}

if(this.value==="high"){

sorted.sort((a,b)=>b.price-a.price);

}

display(sorted);

});