 let myForm = document.querySelector("form");

  myForm.addEventListener("submit",(e)=>{

      e.preventDefault();

      let obj={
        Name:myForm.name.value,
        Email:myForm.email.value,
        Password:myForm.psw.value,
        Rpassword:myForm.repeat.value
      }

      let signup = JSON.parse(localStorage.getItem("account-data")) || [];

      // if(signup == null){
      //   signup=[];
      // }

      signup.push(obj);

      localStorage.setItem("account-data",JSON.stringify(signup));
      window.location.reload();
  })
