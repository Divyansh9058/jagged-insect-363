let myform = document.querySelector("form");
let msg = document.getElementById("msg");
let success = document.createElement("h1");


    let signin = JSON.parse(localStorage.getItem("account-data"))
    
    myform.addEventListener("submit",(e)=>{
        e.preventDefault();
       
      if(myform.email.value=="" || myform.psw.value==""){
        
            success.innerText="Please Enter Your Details"
      }
      else{ 
        signin.forEach(function (element,index) {
              if(element.Email==myform.email.value && element.Password == myform.psw.value){
                success.innerText="Sign in Successful";
              }else{
                success.innerText="Wrong Credentials";
              }
        });


      }
      msg.append(success);
    })