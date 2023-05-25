
// carrossel de imagens

$(function () {
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
});



// menu sanduiche
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const svgPath = 'img/close.png';
const defaultImagePath = menuIcon.querySelector('img').getAttribute('src');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open');
  menuToggle.classList.toggle('open');
  
  if (menu.classList.contains('open')) {
    menuIcon.querySelector('img').setAttribute('src', svgPath);
  } else {
    menuIcon.querySelector('img').setAttribute('src', defaultImagePath);
  }
});

// Fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuIcon.querySelector('img').setAttribute('src', defaultImagePath);
  });
});




// animações na ancoragem dos links

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      let recuo = 150; // Valor padrão de recuo

      // Verifique se o elemento de destino possui uma classe ou um ID específico
      if (targetElement.classList.contains('recuo-mobile')) 
        recuo = 80; // Defina o valor de recuo desejado para a classe 'recuar-elemento'


      const targetOffset = targetElement.offsetTop - recuo;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  });
});
