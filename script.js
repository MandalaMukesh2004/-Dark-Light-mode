let modebtn=document.querySelector("#mode");
let mode="dark";

modebtn.addEventListener("click",() =>{
    if(mode==="light")
    {
        mode="dark";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
      
    }else{
        mode="light";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
       
    }
    console.log(mode);
})
