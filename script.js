let next=document.querySelectorAll('.next-step')
let back=document.querySelectorAll('.goback');
let currentStep=1;
let gotoNextStep=true;
let cardChosen=false;
let inputs=document.querySelectorAll('.user-input')
let warnMsg=document.querySelectorAll('.warn-msg');
let steps=document.getElementsByClassName('step-number')
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
    step2.style.translate='-1500px';
    step3.style.translate='-1200px';
    card_error.style.display='none';
    steps[1].classList.add('active-step');
   currentStep++;
    }
    else{
        console.log('no card chosen')
        card_error.style.display='initial'
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
   }
   if(currentStep===3){
    step1.style.translate='-1000px';
    step2.style.translate='-600px';
    step3.style.translate='600px';
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

