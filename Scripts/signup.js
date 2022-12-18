 let myForm = document.querySelector("form");
 let msg = document.getElementById("pass-msg")
  myForm.addEventListener("submit",(e)=>{

      e.preventDefault();

      let obj={
        Name:myForm.name.value,
        Email:myForm.email.value,
        Password:myForm.psw.value,
        Rpassword:myForm.repeat.value
      }

      let signup = JSON.parse(localStorage.getItem("account-data")) || [];

      if(obj.Password === obj.Rpassword)
      {
      signup.push(obj);
      localStorage.setItem("account-data",JSON.stringify(signup));
      // window.location.reload();
      msg.innerText="Signup Successfully"
      }
      else{
        msg.innerText="Retype password not match"
      }

  })
