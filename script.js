let ct=document.querySelector("#count");
let dec=document.querySelector("#dec");
let inc=document.querySelector("#inc");
let clear=document.querySelector("#clear");
let error=document.querySelector("#error");

dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);
clear.addEventListener("click", setZero);


function decrement(eventDtails ){
      let newCount=+ct.innerHTML;
         
      if(newCount==0){
        error.innerHTML="Error : Cannot go below 0";
        error.style.color="red";
     }

      if(newCount==1){
        clear.style.display="none";
      }

      if(newCount>=1){
        newCount=newCount-1;
        ct.innerHTML=newCount
       console.log(typeof newCount+" "+ct.innerHTML);
      }
       
      
}

function increment(eventDtails ){
    clear.style.display="inline";
    error.innerHTML="";
    let newCount=+ct.innerHTML;
     newCount=newCount+1;
     ct.innerHTML=newCount
    console.log(typeof newCount+" "+ct.innerHTML);
}

function setZero(eventDtails ){
    ct.innerHTML=0;
    console.log(ct.innerHTML);
}