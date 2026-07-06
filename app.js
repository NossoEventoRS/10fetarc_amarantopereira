
let i=0;
const s=document.querySelectorAll('.slide');
setInterval(()=>{s[i].classList.remove('active');i=(i+1)%s.length;s[i].classList.add('active');},5000);
