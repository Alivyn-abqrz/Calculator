const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialchar=["%", "*","/","-","+","="];
let output="";

const calculate= (btnValue)=>{
   if(btnValue === "="&& output !== ""){
   output=eval(output.replace("%","/100"))
    display.value=output;
   }else if(btnValue==="AC"){
    output=""
    
   }else if(btnValue==="DEL"){
    output=output.toString().slice(0, -1);
   
}else{
    if(output ===""&& specialchar.includes(btnValue))return;
    output+=btnValue;
}
display.value=output;
}
buttons.forEach((button)=>{
    button.addEventListener("click",e => calculate(e.target.dataset.value))
}
)
