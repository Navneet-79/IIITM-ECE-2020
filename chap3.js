console.log("Welcome at Chapter 3");

let but=document.querySelector('#c1')
 but.addEventListener('click',()=>{
    q2=document.forms['ch1']["q1"].value;
    q1=document.forms['ch1']["q2"].value;
    q3=document.forms['ch1']["q3"].value;
   console.log(q1*q2*q3);
   temp=document.getElementById("span1").innerText="J = "+q1*q2*q3+" J";
 } )