let top_container = document.querySelector("#main-product");

    fetch("Scripts/product.json")
    .then((responseObject)=>{
    return  responseObject.json();
  })
  .then((actualData)=>{
    TopBrandCard(actualData)
  })
  .catch((error)=>{
    console.log(error);
  })


function TopBrandCard(data){

data.forEach((element,index)=>{
      let card = document.createElement("div");

      let image = document.createElement("img");
      image.setAttribute("src",element.image);

      let name= document.createElement("h3");
        name.innerText =  element.name;
    
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART"
    
      let price = document.createElement("h4");
      price.innerText = "MRP:"+ element.price;

      card.append(image,name,price,btn);
        top_container.append(card);
})


}
