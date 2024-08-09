const sections=document.querySelectorAll('.section');
const secBtns=document.querySelectorAll('.controlls');
const secBtn=document.querySelectorAll('.control');
const allsecions=document.querySelector('.main-content');

function pageTransitions(){
    for(let i =0; i<secBtn.length;i++ ){
        secBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className= currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn'
        })
    }
    //section active class
    allsecions.addEventListener('click',(e)=>{
       const id=e.target.dataset.id;
       if(id){
        //..resmove selected from the other btns
         secBtns.forEach((btn)=>{
            btn.classList.remove('active')
         })
         e.target.classList.add('active')
         
         sections.forEach((section)=>{
            section.classList.remove('active')


          })
          const element =document.getElementById(id);
          element.classList.add('active');
       }
    })
}
pageTransitions()