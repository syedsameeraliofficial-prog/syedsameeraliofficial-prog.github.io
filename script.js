// Fade-in animations
const items=document.querySelectorAll('.fade-in');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});});
items.forEach(item=>observer.observe(item));

// Dark/Light mode
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');});

// Loader
window.addEventListener('load',()=>{document.getElementById('loader').style.display='none';});

// Mobile hamburger menu
const hamburger=document.getElementById('hamburger');
const sidebar=document.getElementById('sidebar');
hamburger.addEventListener('click',()=>{sidebar.classList.toggle('active');});