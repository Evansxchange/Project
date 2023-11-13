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