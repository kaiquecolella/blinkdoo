
// carrossel de imagens

$(function() {
    $('.galeria').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        prevArrow: $(".seta-esquerda"),
        nextArrow: $(".seta-direita"),
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      });
})

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('open');
  menuToggle.classList.toggle('open');
});


