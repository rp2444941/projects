const toggleButton=document.getElementByIg('theme-toggle');

toggleButton.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

//Initialize the theme
document.body.classList.add('light-mode');