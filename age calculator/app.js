let date=document.getElementById('date');
let btn= document.getElementById('btn');
let result= document.getElementById("result");

function calculate(){
    let value=date.value;
    if(value ===""){
        alert("please enter your dateofbirth!")
    }else{
        let age= getAge(value);
        result.innerText=`${age} ${age>1 ? "years" :"year"} old`
        
    }
}
function getAge(value){
     let currentDate=new Date();
     let dateDate= new Date(value) ;
     let age=currentDate.getFullYear()-dateDate.getFullYear();
     let month=currentDate.getMonth()- dateDate.getMonth();


     if(
        month < 0 || 
        (month === 0 &&  currentDate.getdate()< dateDate.getDate())
      
     ){  
        age--;   // age = age -1 ;
     }
     return age;
     
}