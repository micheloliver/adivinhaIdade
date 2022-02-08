const nu0 = document.querySelector('.minhaDiv0');
const nu1 = document.querySelector('.minhaDiv1');
const nu2 = document.querySelector('.minhaDiv2');
const nu3 = document.querySelector('.minhaDiv3');
const nu4 = document.querySelector('.minhaDiv4');
const nu5 = document.querySelector('.minhaDiv5');
const re=document.querySelector('.resultado');

const botENT=document.querySelector('.botENT');
const botSN=document.querySelector('.botSN');

const btn = document.querySelector('.btn');
const btnN=document.querySelector('.buttonN');

const p1=document.querySelector('.p1');
const p2=document.querySelector('.p2');

var b=0     
var somatotal=0;
nu0.classList.add("active");
botSN.classList.add('active');



botENT.addEventListener('click',()=>{

    re.classList.remove('active');
    botENT.classList.remove('active');
    botSN.classList.add('active');
    nu0.classList.add('active')
    b=0
    }

)
 



btn.addEventListener('click',()=>{
    
    
    somatotal=(somatotal+Math.pow(2,b))
    console.log(somatotal)
    b++;
    if (b==6){
        re.innerHTML=somatotal;
        re.classList.add('active');
        nu5.classList.remove('active')
        botENT.classList.add('active');
        botSN.classList.remove("active")
        
        somatotal=0
    }


switch(b){

case 0:
    nu0.classList.add('active');

break;


case 1:

    nu1.classList.add('active')
    nu0.classList.remove('active')
    break;
case 2:


    nu2.classList.add('active')
    nu1.classList.remove('active')

break;

case 3:
  nu3.classList.add('active')
  nu2.classList.remove('active')

break;

case 4:
nu4.classList.add('active')
nu3.classList.remove('active')

break;

case 5:
nu5.classList.add('active')
nu4.classList.remove('active')

break;

}


})   

                
btnN.addEventListener('click',()=>{
    
    
   
    console.log(somatotal)
    b++;
    if (b==6){
        re.innerHTML=somatotal;
        re.classList.add('active');
        nu5.classList.remove('active')
        botENT.classList.add('active');
        botSN.classList.remove("active")
        
        somatotal=0
    }


switch(b){

case 0:
    nu0.classList.add('active');

break;


case 1:

    nu1.classList.add('active')
    nu0.classList.remove('active')
    break;
case 2:


    nu2.classList.add('active')
    nu1.classList.remove('active')

break;

case 3:
  nu3.classList.add('active')
  nu2.classList.remove('active')

break;

case 4:
nu4.classList.add('active')
nu3.classList.remove('active')

break;

case 5:
nu5.classList.add('active')
nu4.classList.remove('active')

break;

}


})   

      
