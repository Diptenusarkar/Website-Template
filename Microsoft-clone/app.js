document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

document.querySelector('.search').addEventListener('click', function (event){
    event.preventDefault();
    var searchInput = document.getElementById('searchInput');
    var searchIcon = document.getElementById('searchIcon');
    if(searchInput.style.display == 'none'){
        searchInput.style.display = 'block';
        searchIcon.style.display = 'none';
    } else {
        searchInput.style.display = 'none';
    }
})