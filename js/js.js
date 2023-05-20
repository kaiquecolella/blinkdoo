
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

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open');
  menuToggle.classList.toggle('open');
});


// troca de icon menu sanduiche
const menuIcon = document.querySelector('.menu-icon');
const svgPath = 'img/close.png';

menuToggle.addEventListener('click', function () {
  menuIcon.classList.toggle('open');

  if (menuIcon.classList.contains('open')) {
    menuIcon.innerHTML = `<img src="${svgPath}" alt="">`;
  } else {
    menuIcon.innerHTML = `<img src="img/menu.png" alt="">`;
  }
});

// animações na ancoragem dos links
// Selecione todos os links que apontam para uma âncora
const links = document.querySelectorAll('a[href^="#"]');

// Adicione um evento de clique a cada link
links.forEach(link => {
  link.addEventListener('click', event => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Obter o destino da âncora a partir do atributo href
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    // Verifique se o elemento de destino existe
    if (targetElement) {
      // Calcule a posição de rolagem do elemento de destino
      const targetOffset = targetElement.offsetTop;

      // Rolar suavemente para a posição do elemento de destino
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  });
});