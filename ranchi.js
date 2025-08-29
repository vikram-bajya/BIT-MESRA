

let btn=document.querySelector(".mode");
let currMod="light";

btn.addEventListener("click",()=>{
    if(currMod==="light"){
        currMod="dark";
        document.querySelector("body").style.backgroundColor="#3c330479";
      

    }else{
        currMod="light";
        document.querySelector("body").style.backgroundColor="white";
        
       
    }
    console.log(currMod);
});