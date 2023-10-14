const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', (e) => {
    if(e.target.className == 'thumb'){

        //mengganti img onclick
        jumbo.src = e.target.src;

        //set flash/ FadIn selama 5 detik
        jumbo.classList.add('fade'); //animasi dari css
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500)

        
        //non-active
        thumbs.forEach((thumb) => {
            thumb.className = 'thumb';
        });
        
        //active
        e.target.classList.add('active');
    }
});