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


window.addEventListener('DOMContentLoaded', () => { 
    // click to projects cards
    document.querySelectorAll('.header__right-block').forEach((item, i) => {
        item.addEventListener('click', () => {
            //event.preventDefault();
            switch(item.id) {
                case 'header__right-platform':
                    document.location.href = './platform.html';
                break;              
                case 'header__right-center':
                    document.location.href = './license.html';
                break;
                case 'header__right-sert':
                    document.location.href = './certification.html';
                break;            
                default:
                    document.location.href = './index.html';
                break;
              } 
            
        });
    });


// Мигание главных переключателей страницы при наведении

$('.header__right-block').hover(

  function(){ $(this).addClass('animated pulse infinite') },

  function(){ $(this).removeClass('animated pulse infinite') }

)



// анимация при скролле
const animItems = document.querySelectorAll(".opportunities__right")
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top; // значение сверху
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+ animItemHeight)) {
        animItem.classList.add('animated','fadeInRightBig');
      } else {
        animItem.classList.remove('animated', 'fadeInRightBig');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
} 



// карточки переключатель
let i = 1;
try {
  const cards = document.querySelectorAll('.tariffs-card');
  const right = document.querySelector('.tariffs-arrow-right');
  const left = document.querySelector('.tariffs-arrow-left');
  
  right.addEventListener('click', () => {
    i++
    removeClass()  
    if(i===3) {i = 0}
    cards[i].classList.add('active', 'animated', 'pulse')
  })

  left.addEventListener('click', () => {
    i--
    removeClass()  
    if(i===-1) {i = 2}
    cards[i].classList.add('active', 'animated', 'pulse')
  })

  function removeClass() {
    cards.forEach(card => {
      card.classList.remove('active', 'animated', 'pulse')  
    })
  }
} catch(e) {}

// карточки при наведении
try {
  const cards = document.querySelectorAll('.tariffs-card');
  cards.forEach((card, id) => {
    card.addEventListener('mouseover', () => {
      cards.forEach(item=> {
        item.classList.remove('active', 'animated', 'pulse')
      })
      card.classList.add('active', 'animated', 'pulse')
      i = id
    })
  })
} catch(e) {}

// Лицензии, аккредитации, соглашения, благодарственные письма при наведении
try {
  const licenseBtns = document.querySelectorAll('.docs_left-btn');
  const licenseImages = document.querySelectorAll('.docs_right-img');
  let numm = 0;
  licenseImages[numm].classList.add('active', 'animated', 'pulse');

  licenseBtns.forEach((licenseBtn, num) => {
    licenseBtn.addEventListener('mouseover', () => {
      licenseImages.forEach(item=> {
        item.classList.remove('active', 'animated', 'pulse')
      })
      numm = num
      licenseImages[numm].classList.add('active', 'animated', 'pulse')      
    })
  })
} catch(e) {}

// SLIDER!!!!!!!!

try {
  const slides = document.querySelectorAll('.diplom-block');
  const parent = document.querySelector('.diplom-inner');
  const rightBtn = document.querySelector('.diplom-arrow-right');
  const leftBtn = document.querySelector('.diplom-arrow-left');
  let slider = [];
  let first = 0,
      second = 1,
      third = 2;
  rightBtn.addEventListener('click', () => {
    first++
    second++
    third++
    if(third >= slides.length) {
      first = 0;
      second = 1;
      third = 2;
    }
    removeClass()  
  })
  leftBtn.addEventListener('click', () => {
    first--
    second--
    third--
    if(first < 0) {
      first = slides.length-3;
      second = slides.length-2;
      third = slides.length-1;
    }
    removeClass()
  })
  function removeClass() {
    slides.forEach(slide => {
      slide.classList.add('diplom-block-shadow')    
    })
    slides[first].classList.remove('diplom-block-shadow')
    slides[second].classList.remove('diplom-block-shadow')
    slides[third].classList.remove('diplom-block-shadow')
  }
} catch (e) {}


});

