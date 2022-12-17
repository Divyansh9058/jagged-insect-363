let top_container = document.querySelector("#main-product");

let foundation = document.getElementById("foundation");

let kajal = document.getElementById("kajal");


    fetch("Scripts/product.json")
    .then((responseObject)=>{
    return  responseObject.json();
  })
  .then((actualData)=>{
    fetchedData = actualData;
    arr = actualData;
    TopBrandCard(actualData)
  })
  .catch((error)=>{
    console.log(error);
  })


function TopBrandCard(data){
  top_container.innerHTML = null;
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



let fetchedData = [];

    foundation.addEventListener("click",()=>{

      let filters = fetchedData.filter((element)=>{
            if(element.type === foundation.value){
              return true;
            }
            else{
              false;
            }
      });
         TopBrandCard(filters)
    });

    kajal.addEventListener("click",()=>{

      let filters = fetchedData.filter((element)=>{
            if(element.type === kajal.value){
              return true;
            }
            else{
              false;
            }
      });
         TopBrandCard(filters)
    });

let arr=[];

document.getElementById("h2l").addEventListener("click", (e) => {
    let sortBy = e.target.value;
    if (sortBy === "h2l") {
      // sort in desc
      let newData = arr.sort((a, b) => +b.price - +a.price);
      TopBrandCard(newData);
    }
  });


  document.getElementById("l2h").addEventListener("click", (e) => {
    let sortBy = e.target.value;
    if (sortBy === "l2h") {
      // sort in desc
      let newData = arr.sort((a, b) => +a.price - +b.price);
      TopBrandCard(newData);
    }
  });
