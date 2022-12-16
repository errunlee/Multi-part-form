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
        card_error.style.display='initial';
        steps[2].classList.remove('active-step');
    }
   }
   if(currentStep===3){
    if(option1.checked===true ||option2.checked===true || option3.checked===true ){
     document.querySelectorAll('.card_error')[0].style.display='none'
     step1.style.translate='-3000px';
     step2.style.translate='-2600px';
     step3.style.translate='-2200px';        
     step4.style.translate='-1800px'; 
    steps[2].classList.add('active-step');
    setTimeout(()=>{
      currentStep++;      
    },100)
     step3summary(); 
     renderTotal.innerHTML=totalAmount;
    }
    else{
      document.querySelectorAll('.card_error')[0].style.display='initial';
    steps[2].classList.remove('active-step');
    }
   }
   if(currentStep===4){
    steps[3].classList.add('active-step');
    document.querySelector('.form-parent').innerHTML=`  <div class="form-fill p-3 me-5 mt-2 d-flex flex-column justify-content-center align-items-center" id="finishup">
    <img class='mb-3' src="assets/images/icon-thank-you.svg">
     <div class="mt-3" style="width:28rem;letter-spacing:2px;font-size:1.2rem">
       <h3 class="text-center" style="font-family:'oswald bold'; color:rgb(9, 9, 80)">Thank you!</h3><h5 class='text-center' style="color:rgb(141, 131, 131);font-family: 'oswald'; font-size:15px; letter-spacing:0.5px;">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.ccom</h5>
       </div>
 </div> `
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

//switch year or month
let choosePackage=document.querySelector('#switch')
choosePackage.addEventListener('click',()=>{
  let priceItems=document.querySelectorAll('.mOrY')
  let yearormonth=document.querySelectorAll('.yearormonth')
  if(choosePackage.checked===true){
    priceItems.forEach((element=>{
      element.innerHTML=eval(element.innerHTML*10)
    }))
    yearormonth.forEach((element=>{
      element.innerHTML='/yr'
    }))
    totalSum.innerHTML='Total (per year)'
    finalmory.innerHTML='/yr'
  }
  else{
    priceItems.forEach((element=>{
      element.innerHTML=eval(element.innerHTML/10)
    }))
    yearormonth.forEach((element=>{
      element.innerHTML='/mo'
    }))
    totalSum.innerHTML='Total (per month)'
    finalmory.innerHTML='/mo'
  }
})

let step3Selection=document.querySelectorAll('.bg-class')
step3Selection.forEach((element=>{
  element.addEventListener('click',()=>{
    element.parentElement.parentElement.classList.toggle('new-bg')
    console.log('clicked')
  })
}))
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

