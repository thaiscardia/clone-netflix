$('.owl-carousel').owlCarousel({
    loop:true, //se ativado, fica o loop eterno. Se desativar, para quando chegar ao fim.
    margin:12,
    nav:false, //menu de navegação
    responsive:{ //responsividade por itens - a quantidade de itens é mostrada de acordo com o tamanho da janela em pixels
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
