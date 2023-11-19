let nav = document.querySelector('.nav_lg')
let toggle = document.querySelector('.toggle')

function menu(){
 nav.classList.add('active');
 toggle.style.display = 'none';
 document.querySelector('.close').style.display = 'block';
};

function clos(){
 nav.classList.remove('active');
 document.querySelector('.close').style.display = 'none';
 toggle.style.display = 'flex';
}

 let count = 0;
 let count1 = 0;
 let count2 = 0;
 let time = setInterval(
  function coun(){
   ++count
   ++count1
   ++count2
   document.querySelector('.count_1').innerText = count;
   document.querySelector('.count_2').innerText = count1;
   document.querySelector('.count_3').innerText = count2;
   if(count >= 559){
    count= 559;
    
   };

   if(count1 >= 1059){
    count1= 1059;
    
   }

   if(count2 >= 359){
    count2= 359;
    
   }
  }
 )
