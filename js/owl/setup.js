$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1.10
        },
        600:{
            items:3.5
        },
        1000:{
            items:5.5
        }
    }
})
function redirecionar(link){
    switch(link) {
        case 'dio':
            window.open("https://digitalinnovation.one/")
        break;
        case 'perfil':
            window.open("https://github.com/ucasmota")
        break;
        case 'tmdb' :
            window.open("https://www.themoviedb.org/")
        break;
        default: 'yt';
            window.open("https://www.youtube.com/")
    }
}

alert ("teste todos os botôes roxos")
