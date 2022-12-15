

let top_container = document.querySelector("#top-brand");




    fetch("Scripts/top_brands.json")
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

      let head = document.createElement("h3");
        head.innerText = element.head;
    

      let subHead = document.createElement("h4");
      subHead.innerText = element.subhead;

      card.append(image,head,subHead);
        top_container.append(card);
})


}



// only at nykka
let only_container = document.querySelector("#only-nyka");

fetch("Scripts/onlyatnyka.json")
    .then((responseObject)=>{
    return  responseObject.json();
  })
  .then((actualData)=>{
    OnlyatCard(actualData)
  })
  .catch((error)=>{
    console.log(error);
  })


  function OnlyatCard(data){

    data.forEach((element,index)=>{
          let card = document.createElement("div");
    
          let image = document.createElement("img");
          image.setAttribute("src",element.image);
    
          let head = document.createElement("h3");
            head.innerText = element.head;
        
    
          let subHead = document.createElement("h4");
          subHead.innerText = element.subhead;
    
          card.append(image,head,subHead);
            only_container.append(card);
    })
    
    
    }