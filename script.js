let next=document.querySelectorAll('.next-step')
let back=document.querySelectorAll('.goback');
let currentStep=1;
let gotoNextStep=true;
let cardChosen=false;
let inputs=document.querySelectorAll('.user-input')
let warnMsg=document.querySelectorAll('.warn-msg');
let steps=document.getElementsByClassName('step-number')
let step3info=document.querySelectorAll('.step3info');
let totalAmount=0;
let price;
function checkIfFilled(){
    console.log(inputs)
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value===''){
            inputs[i].classList.add('warning')
            warnMsg[i].style.display='initial'
            gotoNextStep=false;
        }
        else{
            gotoNextStep=true;
            warnMsg[i].style.display='none'
            inputs[i].classList.remove('warning')
        }
    }
}
next.forEach(element=>{
    element.addEventListener('click',(e)=>{
  e.preventDefault();
  checkIfFilled();
   if(currentStep===1){
     if(gotoNextStep===true){
        step1.style.translate='-1000px';
        step2.style.translate='-600px';
        step3.style.translate='-600px';
        step4.style.translate='-1200px';
        steps[0].classList.add('active-step')
        setTimeout(()=>{
        currentStep++;
        },100)
     }  
     else{
        console.log('please input all fields')
    }  
   }
   if(currentStep===2){
    if(cardChosen===true){
    step1.style.translate='-2000px';
    step2.style.translate='-1600px';
    step3.style.translate='-1200px';
    step4.style.translate='-1200px';
    card_error.style.display='none';
    steps[1].classList.add('active-step');
    setTimeout(()=>{
        currentStep++;
    },100)
   step2info.innerHTML=document.querySelector('.card-option h5').innerHTML;
   step2price.innerHTML=document.querySelector('.card-option p').innerHTML;
    price=document.querySelector('.card-option p span').innerHTML;
   totalAmount=Number.parseInt(price);
    }
    else{
        console.log('no card chosen')
        card_error.style.display='initial'
    }
   }
   if(currentStep===3){
    if(option1.checked===true ||option2.checked===true || option3.checked===true ){
     step1.style.translate='-3000px';
     step2.style.translate='-2600px';
     step3.style.translate='-2200px';        
     step4.style.translate='-1800px'; 
    steps[2].classList.add('active-step');
     currentStep++;      
     step3summary(); 
     renderTotal.innerHTML=totalAmount;
    }
   }
})
})



back.forEach(element=>{
    element.addEventListener('click',(e)=>{
      console.log('clicked')
  e.preventDefault();
   if(currentStep===2){
    step1.style.translate='0px';
    step2.style.translate='1500px';
    step3.style.translate='1800px';
    step4.style.translate='1800px';
   }
   if(currentStep===3){
    step1.style.translate='-1000px';
    step2.style.translate='-600px';
    step3.style.translate='-600px';
    step4.style.translate='-600px';
   }
   if(currentStep===4){
    step1.style.translate='-2000px';
    step2.style.translate='-1600px';
    step3.style.translate='-1200px';
    step4.style.translate='-1200px';
   }
   currentStep--;
})
})


let cards=document.querySelectorAll('.card')
Array.from(cards).forEach(element=>{
    element.addEventListener('click',()=>{
        removePrevOpt();
        element.classList.add('card-option');
        cardChosen=true;
    })
})

function removePrevOpt(){
    Array.from(cards).forEach(element=>{
        element.classList.remove('card-option')
    })
}

function step3summary(){
    price=document.querySelector('.card-option p span').innerHTML;
    totalAmount=Number.parseInt(price);
    if(option1.checked===true){
      step3info[0].classList.add('extraInfo')
      totalAmount=totalAmount+10
    }
    else{
      step3info[0].classList.remove('extraInfo')
    }
    if(option2.checked===true){
      step3info[1].classList.add('extraInfo')
      totalAmount=totalAmount+20
    }
    else{
      step3info[1].classList.remove('extraInfo')
    }
    if(option3.checked===true){
      step3info[2].classList.add('extraInfo')
      totalAmount=totalAmount+20
    }
    else{
      step3info[2].classList.remove('extraInfo')
    }
}

