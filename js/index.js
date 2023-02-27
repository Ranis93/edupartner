// *********stars**********
const params = {
    amount: 200,
    size: {
      min: 1,
      max: 5,
      giant: 9
    },
    duration: {
      min: 5,
      max: 25,
    }
  }
  const randomBetween = (a, b) => {
    return (a + (Math.random() * (b - a)));
  }
  
  for (let i = 0; i < params.amount; i++) {
    let star = $("<div></div>");
    let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
    star.css({
      "width": size + "px",
      "height": size + "px",
      "left": randomBetween(0, 100) + "%",
      "top": randomBetween(0, 100) + "%",
      "box-shadow": "0 0 " + size + "px " + size / 2 + "px #043668",
      "animation-duration": randomBetween(params.duration.min, params.duration.max) + "s"
    });
  
    $(".stars").append(star);
  }




// Мигание главных переключателей страницы при наведении

$('.projects__right-block').hover(

  function(){ $(this).addClass('animated pulse') },

  function(){ $(this).removeClass('animated pulse') }

)
// Drag-n-Drop SLIDER  with arrows-buttons
function dragDropSliderArr(windowParent, window, slideItemsTrack, slideItem, arrowsParent, slidesLength){
  let slider = document.querySelector(windowParent),
  sliderList = slider.querySelector(window),
  sliderTrack = slider.querySelector(slideItemsTrack),
  slides = slider.querySelectorAll(slideItem),
  arrows = document.querySelector(arrowsParent),
  prev = arrows.children[0],
  next = arrows.children[2],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = (slidesLength-1) * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  getEvent = function() {
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
      if (transition) {
      sliderTrack.style.transition = 'transform .5s';
      }
      sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

      prev.classList.toggle('disabled', slideIndex === 0);
      next.classList.toggle('disabled', slideIndex === (slidesLength-1));
  },
  swipeStart = function() {
      let evt = getEvent();

      if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
      }
  },
  swipeAction = function() {

      let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;

      posY2 = posY1 - evt.clientY;
      posY1 = evt.clientY;

      // определение действия свайп или скролл
      if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
          isScroll = true;
          allowSwipe = false;
      } else if (posY < 7) {
          isSwipe = true;
      }
      }

      if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
          if (posInit < posX1) {
          setTransform(transform, 0);
          return;
          } else {
          allowSwipe = true;
          }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === (slidesLength-1)) {
          if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
          } else {
          allowSwipe = true;
          }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
          reachEdge();
          return;
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
      }

  },
  swipeEnd = function() {
      posFinal = posInit - posX1;

      isScroll = false;
      isSwipe = false;

      document.removeEventListener('touchmove', swipeAction);
      document.removeEventListener('mousemove', swipeAction);
      document.removeEventListener('touchend', swipeEnd);
      document.removeEventListener('mouseup', swipeEnd);

      sliderList.classList.add('grab');
      sliderList.classList.remove('grabbing');

      if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
          if (posInit < posX1) {
          slideIndex--;
          } else if (posInit > posX1) {
          slideIndex++;
          }
      }

      if (posInit !== posX1) {
          allowSwipe = false;
          slide();
      } else {
          allowSwipe = true;
      }

      } else {
      allowSwipe = true;
      }

  },
  setTransform = function(transform, comapreTransform) {
      if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
          sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
      }
      allowSwipe = false;
  },
  reachEdge = function() {
      transition = false;
      swipeEnd();
      allowSwipe = true;
  };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  sliderList.classList.add('grab');

  sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);

  arrows.addEventListener('click', function() {
  let target = event.target;

  if (target.classList.contains('next')) {
      slideIndex++;
  } else if (target.classList.contains('prev')) {
      slideIndex--;
  } else {
      return;
  }
  slide();
  });
}
// Slider
function dragDropSlider(windowParent, window, slideItemsTrack, slideItem, arrowsParent){
    let slider = document.querySelector(windowParent),
    sliderList = slider.querySelector(window),
    sliderTrack = slider.querySelector(slideItemsTrack),
    slides = slider.querySelectorAll(slideItem),
    arrows = document.querySelector(arrowsParent),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    lastTrf = --slides.length * slideWidth,
    posThreshold = slides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    getEvent = function() {
        return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function() {
        if (transition) {
        sliderTrack.style.transition = 'transform .5s';
        }
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
  
        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === --slides.length);
    },
    swipeStart = function() {
        let evt = getEvent();
  
        if (allowSwipe) {
  
        transition = true;
  
        nextTrf = (slideIndex + 1) * -slideWidth;
        prevTrf = (slideIndex - 1) * -slideWidth;
  
        posInit = posX1 = evt.clientX;
        posY1 = evt.clientY;
  
        sliderTrack.style.transition = '';
  
        document.addEventListener('touchmove', swipeAction);
        document.addEventListener('mousemove', swipeAction);
        document.addEventListener('touchend', swipeEnd);
        document.addEventListener('mouseup', swipeEnd);
  
        sliderList.classList.remove('grab');
        sliderList.classList.add('grabbing');
        }
    },
    swipeAction = function() {
  
        let evt = getEvent(),
        style = sliderTrack.style.transform,
        transform = +style.match(trfRegExp)[0];
  
        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;
  
        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;
  
        // определение действия свайп или скролл
        if (!isSwipe && !isScroll) {
        let posY = Math.abs(posY2);
        if (posY > 7 || posX2 === 0) {
            isScroll = true;
            allowSwipe = false;
        } else if (posY < 7) {
            isSwipe = true;
        }
        }
  
        if (isSwipe) {
        // запрет ухода влево на первом слайде
        if (slideIndex === 0) {
            if (posInit < posX1) {
            setTransform(transform, 0);
            return;
            } else {
            allowSwipe = true;
            }
        }
  
        // запрет ухода вправо на последнем слайде
        if (slideIndex === --slides.length) {
            if (posInit > posX1) {
            setTransform(transform, lastTrf);
            return;
            } else {
            allowSwipe = true;
            }
        }
  
        // запрет протаскивания дальше одного слайда
        if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
            reachEdge();
            return;
        }
  
        // двигаем слайд
        sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
        }
  
    },
    swipeEnd = function() {
        posFinal = posInit - posX1;
  
        isScroll = false;
        isSwipe = false;
  
        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('mousemove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
        document.removeEventListener('mouseup', swipeEnd);
  
        sliderList.classList.add('grab');
        sliderList.classList.remove('grabbing');
  
        if (allowSwipe) {
        if (Math.abs(posFinal) > posThreshold) {
            if (posInit < posX1) {
            slideIndex--;
            } else if (posInit > posX1) {
            slideIndex++;
            }
        }
  
        if (posInit !== posX1) {
            allowSwipe = false;
            slide();
        } else {
            allowSwipe = true;
        }
  
        } else {
        allowSwipe = true;
        }
  
    },
    setTransform = function(transform, comapreTransform) {
        if (transform >= comapreTransform) {
        if (transform > comapreTransform) {
            sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
        }
        }
        allowSwipe = false;
    },
    reachEdge = function() {
        transition = false;
        swipeEnd();
        allowSwipe = true;
    };
  
    sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
    sliderList.classList.add('grab');
  
    sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
    slider.addEventListener('touchstart', swipeStart);
    slider.addEventListener('mousedown', swipeStart);
  
    arrows.addEventListener('click', function() {
    let target = event.target;
  
    if (target.classList.contains('next')) {
        slideIndex++;
    } else if (target.classList.contains('prev')) {
        slideIndex--;
    } else {
        return;
    }
  
    slide();
    });
  
  }

dragDropSlider('.projects__slider', '.projects__list', '.projects__right-blocks', '.projects__right-block', '.projects__arrows');
try {
  dragDropSliderArr(
    '.slider',
    '.slider-list',
    '.slider-track',
    '.slide',
    '.reviews__slider',
    3
  )
} catch (error) {
  console.log(error)
}

window.addEventListener('DOMContentLoaded', () => { 
    // click to projects cards
    document.querySelectorAll('.projects__right-block').forEach((item, i) => {
        item.addEventListener('click', () => {
            //event.preventDefault();
            switch(item.id) {
                case 'projects__right-platform':
                    document.location.href = '../platform/';
                break;              
                case 'projects__right-center':
                    document.location.href = '../license/';
                break;
                case 'projects__right-sert':
                    document.location.href = '../certification/';
                break;            
                default:
                    document.location.href = '../';
                break;
              } 
            
        });
    });


// Scroll down/up on main-page

    // function scrollPageToTop(){
    //     btttn.classList.remove('hide');
    //     window.scrollBy({
    //     top: -Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    //         document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ),
    //     behavior: 'smooth'
    //     })
    // }
    // function scrollPageToDown(){
    //     btttn.classList.add('hide');
    //     window.scrollBy({
    //         top: Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    //             document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ),
    //         behavior: 'smooth'
    //     })
    // }
    
    // const btttn = document.querySelector('.scroll__down');
    // btttn.addEventListener('click', scrollPageToDown);
    // scrollPageToTop();

    

    // //Slider c приближением и отдалением
    // function nextPage(idx) {
    //     console.log('Индкекс на входе', idx)
    //     if (idx != 0) {
    //         firstBlocks[idx - 1].classList.add('zoomIn', 'slower');
    //         firstBlocks[idx - 1].classList.remove('zoomInPic');
    //     }
    //     if(idx !== firstBlocks.length - 2) {
    //         // если это не последний слайд
    //         firstBlocks[idx].classList.remove('zoomIn', 'slower');
    //         firstBlocks[idx].classList.add('zoomInPic');
    //         setTimeout( () => {firstBlocks[idx].classList.remove('show');}, 700);        
    //         firstBlocks[idx + 1].classList.add('zoomIn', 'slower', 'show');
    //         setTimeout( () => {firstBlocks[idx].classList.add('show');}, 200); 
    //         setTimeout( () => {firstBlocks[idx].classList.remove('zoomIn', 'slower');}, 300);

            
    //     } else {
    //         // если это ПРЕДПОСЛЕДНИЙ слайд
    //         // Последний всегда должен быль пустым
            
    //         firstBlocks[firstBlocks.length - 2].classList.add('zoomInPic');
    //         setTimeout( () => {firstBlocks[firstBlocks.length - 2].classList.remove('show');}, 1000);    
    //         setTimeout( () => {firstBlocks[0].classList.add('show');}, 700);  
    //         setTimeout( () => {firstBlocks[firstBlocks.length - 2].classList.remove('zoomInPic');}, 3000);            
    //     }
        
    // }
    // const firstBlocks = document.querySelectorAll('.first-block__inner');
    // firstBlocks.forEach((slide, idx) => {
    //     if( idx == firstBlocks.length - 1) {
    //         idx = 0
    //     }
    //     slide.addEventListener('click', () => nextPage(idx, slide))
    // })


    // //Слежение за курсором мыши
    // const followWindow = document.querySelector('.first-block');
    // const followCursor = () => { // объявляем функцию followCursor
    //     const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    //     followWindow.addEventListener('mouseenter', () => {el.style.display = "block"})
    //     followWindow.addEventListener('mouseleave', () => {el.style.display = "none"})
        
    //     followWindow.addEventListener('mousemove', e => { // при движении курсора
            
    //         const target = e.target // определяем, где находится курсор
    //         if (!target) return

    //         if (target.closest('.first-block__text')) { // если курсор наведён на ссылку
    //         el.classList.add('follow-cursor_active') // элементу добавляем активный класс
    //         } else { // иначе
    //         el.classList.remove('follow-cursor_active') // удаляем активный класс
    //         }
            
    //         el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
    //         el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    //     })
    // }
    
    // followCursor() // вызываем функцию followCursor

})