"use strict";
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
  
    $("#root").append(star);
  }



  let header=document.querySelector('.header');
  let container=document.querySelector('.container');
  let headerBg=document.querySelector('.header-bg');

  let headerRight=document.querySelector('.header__right');
  let headerRightBlockss = document.querySelector('.header__right-blocks');

  let headerRightBlocks = document.querySelectorAll('.header__right-block');
  let headerBgs=document.querySelectorAll('.header-bg');


  let headerRightBlocksLength = headerRightBlocks.length;
  let flagAn = 0;//кнопки не работают пока идет анимация
  headerRightBlocks[0].addEventListener('click',function headerRightBlocksFirst(){
    if (flagAn == 0){
      headerRightBlockWidth =  this.offsetWidth;
    this.style.width=0;
    this.style.marginRight=0;
    this.style.paddingLeft=0;
    headerRightBlockAnimatin(); 
    let idThisBlock = this.id;
    headerBgAnimation(0);
    contentChange(idThisBlock);
    removeBtns();
    newContent(this.id);
    setTimeout(function(){ 
      headerRightTransition();
      setTimeout(function(){ 
        headerRightBackAll(1);
        headerRightBlocks[headerRightBlocksLength-1].style.paddingLeft=0 + 'px';
        headerRightBlocks[headerRightBlocksLength-1].style.marginRight=0 + 'px';
        let thisBLock = document.getElementById(idThisBlock);
        thisBLock.style.width=headerRightBlockWidth+'px';
        thisBLock.style.marginRight=20+'px';
        thisBLock.style.paddingLeft=10+'px';
        let headerBg = headerRightBlocks[3].querySelector('.header-bg');
        headerBgFuncBack(headerBg);
        toggleId(1);
        setTimeout(function(){ 
          headerRightBlocks[3].style.height=headerRightBlockHeight+'px';
          headerRightTransition();
          headerBgFuncBack(headerBg);
          headerRightBlocks[1].style.height=headerRightBlockHeight + 'px';//не понял почему ломается где-то
          setTimeout(function(){ 
            addBtns();
          }, 100);
        }, 1000);
        
        
      }, 300);
    },200);
  }
  });

  headerRightBlocks[1].addEventListener('click',function headerRightBlocksSecond(){
    if (flagAn == 0){
      headerRightBlockWidth =  this.offsetWidth;
    this.style.width=0;
    this.style.marginRight=0;
    this.style.paddingLeft=0;
    headerRightBlockAnimatin(); 
    let idThisBlock = this.id;
    headerBgAnimation(1);
    contentChange(idThisBlock);
    removeBtns();
    newContent(this.id);
    setTimeout(function(){ 
      headerRightTransition();
      setTimeout(function(){ 
        headerRightBackAll(2);
        headerRightBlocks[headerRightBlocksLength-1].style.paddingLeft=0 + 'px';
        headerRightBlocks[headerRightBlocksLength-1].style.marginRight=0 + 'px';
        let thisBLock = document.getElementById(idThisBlock);
        thisBLock.style.width=headerRightBlockWidth+'px';
        thisBLock.style.marginRight=20+'px';
        thisBLock.style.paddingLeft=10+'px';
        let headerBg = headerRightBlocks[3].querySelector('.header-bg');
        headerBgFuncBack(headerBg);
        toggleId(2);
        setTimeout(function(){ 
          headerRightBlocks[3].style.height=headerRightBlockHeight+'px';
          headerRightTransition();
          headerBgFuncBack(headerBg);
          headerRightBlocks[1].style.height=headerRightBlockHeight + 'px';//не понял почему ломается где-то        
          setTimeout(function(){ 
            addBtns();
          }, 100);
        }, 1000);              
      }, 300);
    },200);
  }
  });

  headerRightBlocks[2].addEventListener('click',function headerRightBlocksThree(){
    if (flagAn == 0){
      headerRightBlockWidth =  this.offsetWidth;
    this.style.width=0;
    this.style.marginRight=0;
    this.style.paddingLeft=0;
    headerRightBlockAnimatin(); 
    let idThisBlock = this.id;
    headerBgAnimation(2);
    contentChange(idThisBlock);
    removeBtns();
    newContent(this.id);
    setTimeout(function(){ 
      headerRightTransition();
      setTimeout(function(){ 
        headerRightBackAll(3);
        headerRightBlocks[headerRightBlocksLength-1].style.paddingLeft=0 + 'px';
        headerRightBlocks[headerRightBlocksLength-1].style.marginRight=0 + 'px';
        let thisBLock = document.getElementById(idThisBlock);
        thisBLock.style.width=headerRightBlockWidth+'px';
        thisBLock.style.marginRight=20+'px';
        thisBLock.style.paddingLeft=10+'px';
        let headerBg = headerRightBlocks[3].querySelector('.header-bg');
        headerBgFuncBack(headerBg);
        toggleId(3);
        setTimeout(function(){ 
          headerRightBlocks[3].style.height=headerRightBlockHeight+'px';
          headerRightTransition();
          headerBgFuncBack(headerBg);
          headerRightBlocks[1].style.height=headerRightBlockHeight + 'px';//не понял почему ломается где-то
          setTimeout(function(){ 
            addBtns();
          }, 100);
        }, 1000);                
      }, 300);
    },200);
  }
  });

  let firstSections=document.querySelectorAll('.first');
  let secondSections=document.querySelectorAll('.second');
  let thirdSections=document.querySelectorAll('.third');
  let rootBlock = document.getElementById('root');
  let headerLeftEdupartner=document.querySelector('.header__left-edupartner');
  let headerLeftEduexp=document.querySelector('.header__left-eduexp');
  let headerRightTitle=document.querySelector('.header__right-title');
  let headerLeftSert = document.querySelector('.header__left-sert');
  let headerLeftCenter = document.querySelector('.header__left-center');

  function contentChange(str){
    rootBlock.style.display = 'none';
    headerLeftSert.classList.remove('header-show');
    headerLeftCenter.classList.remove('header-show');
    headerLeftEduexp.classList.remove('header-show');
    headerLeftEdupartner.classList.remove('header-show');
    headerRightTitle.classList.remove('header-show');
    headerLeftSert.style.display = 'none';
    headerLeftCenter.style.display = 'none';
    headerLeftEduexp.style.display = 'none';
    headerLeftEdupartner.style.display = 'none';
    headerRightTitle.style.display = 'none';
    rootHeight();
    if( str == 'header__right-platform'){
      firstSections.forEach(function(firstSection) {
        firstSection.style.display = 'block';
      });
      secondSections.forEach(function(secondSection) {
        secondSection.style.display = 'none';
      });
      thirdSections.forEach(function(thirdSection) {
        thirdSection.style.display = 'none';
      });
      
      headerLeftEduexp.style.transform = 'translateY(30%)';
      headerLeftEduexp.style.display = 'block';
      setTimeout(function(){ 
        headerLeftEduexp.style.transform = 'translateY(0%)';
        headerLeftEduexp.classList.add('header-show');
      }, 1000);

    }else 
    if( str == 'header__right-center'){
      firstSections.forEach(function(firstSection) {
        firstSection.style.display = 'none';
      });
      thirdSections.forEach(function(thirdSection) {
        thirdSection.style.display = 'none';
      });
      secondSections.forEach(function(secondSection) {
        secondSection.style.display = 'block';
      });
      headerLeftCenter.style.transform = 'translateY(30%)';
      headerLeftCenter.style.display = 'block';
      setTimeout(function(){ 
        headerLeftCenter.style.transform = 'translateY(0%)';
        headerLeftCenter.classList.add('header-show');
      }, 1000);
    }else 
    if( str == 'header__right-sert'){
      firstSections.forEach(function(firstSection) {
        firstSection.style.display = 'none';
      });
      secondSections.forEach(function(secondSection) {
        secondSection.style.display = 'none';
      });
      thirdSections.forEach(function(thirdSection) {
        thirdSection.style.display = 'block';
      });
      headerLeftSert.style.transform = 'translateY(30%)';
      headerLeftSert.style.display = 'block';
      setTimeout(function(){ 
        headerLeftSert.style.transform = 'translateY(0%)';
        headerLeftSert.classList.add('header-show');
      }, 1000);
    }else 
    if( str == 'header__right-main'){
      firstSections.forEach(function(firstSection) {
        firstSection.style.display = 'none';
      });
      secondSections.forEach(function(secondSection) {
        secondSection.style.display = 'none';
      });
      thirdSections.forEach(function(thirdSection) {
        thirdSection.style.display = 'none';
      });
      headerLeftEdupartner.style.transform = 'translateY(70%)';
      headerLeftEdupartner.style.display = 'block';
      headerRightTitle.style.transform = 'translateY(30%)';
      headerRightTitle.style.display = 'block';
      rootBlock.style.display = 'block';
      setTimeout(function(){ 
        headerLeftEdupartner.style.transform = 'translateY(0%)';
        headerLeftEdupartner.classList.add('header-show');
        headerRightTitle.style.transform = 'translateY(0%)';
        headerRightTitle.classList.add('header-show');
      }, 1000);
    }
  }

  function removeBtns(){
    flagAn = 1;
  }
  function addBtns(){
    flagAn = 0;
  }

  //смена id

  function toggleId(z){
    let flafId ='';
    if(z==1){
      flafId = headerRightBlocks[0].id;
      headerRightBlocks[0].id = headerRightBlocks[1].id;
      headerRightBlocks[1].id = headerRightBlocks[2].id;
    }
    else if(z==2){
      flafId = headerRightBlocks[1].id;
      headerRightBlocks[1].id = headerRightBlocks[2].id;
    }
    else if(z==3){
      flafId = headerRightBlocks[2].id;
    }
    for(let i = 2;i<headerRightBlocksLength-1;i++){
      headerRightBlocks[i].id = headerRightBlocks[i+1].id;
    }  
    console.log(flafId);
    headerRightBlocks[headerRightBlocksLength-1].id = flafId;
  }
  //четвертый блок увеличивается и выдвигается
  function headerRightBlockAnimatin(){
    headerRightBlocks[3].style.display = 'block';
    headerRightBlocks[3].style.opacity = '1';
    headerRightBlocks[3].style.width =  headerRightBlockWidth+'px';
    headerRightBlocks[3].style.marginRight = 20+'px';
    headerRightBlocks[3].style.paddingLeft = 10+'px';
    /* headerRightBlocks[1].style.paddingLeft=10 + 'px';
    headerRightBlocks[1].style.marginRight=20 + 'px'; *///не понял почему ломается где-то
  }
  //мгновенное изменение блока
  function headerRightTransition(){
    headerRightBlocks.forEach(function(headerRightBlock) {
      headerRightBlock.classList.toggle('transition_zero');
    });
  }
  //изменение контента в зависимости от id кнопки
  function newContent(content){
    if (content=='header__right-platform'){
    }else if (content=='header__right-center'){
    }else if (content=='header__right-sert'){
    }else if (content=='header__right-main'){
    }
  }

  //незаметный возврат\изменение контента + 
  function headerRightBackAll(z){
    let flagRightBlock ='';
    let flafId ='';
    if(z==1){
      var img = $( headerRightBlocks[0]).css('background-image');
      headerRightBlocks[0].style.backgroundImage = $( headerRightBlocks[1]).css('background-image');    
      headerRightBlocks[1].style.backgroundImage = $( headerRightBlocks[2]).css('background-image');
      flagRightBlock = headerRightBlocks[0].innerHTML;
      headerRightBlocks[0].innerHTML=headerRightBlocks[1].innerHTML;
      headerRightBlocks[1].innerHTML=headerRightBlocks[2].innerHTML;
    }
    else if(z==2){
      var img = $( headerRightBlocks[1]).css('background-image');
      headerRightBlocks[1].style.backgroundImage = $( headerRightBlocks[2]).css('background-image');
      flagRightBlock = headerRightBlocks[1].innerHTML;
      headerRightBlocks[1].innerHTML=headerRightBlocks[2].innerHTML;
    }
    else if(z==3){
      var img = $( headerRightBlocks[2]).css('background-image');
      flagRightBlock = headerRightBlocks[2].innerHTML;
    }
    for(let i = 2;i<headerRightBlocksLength-1;i++){
      headerRightBlocks[i].style.backgroundImage = $( headerRightBlocks[i+1]).css('background-image');
      headerRightBlocks[i].innerHTML=headerRightBlocks[i+1].innerHTML;

    }  
    headerRightBlocks[headerRightBlocksLength-1].style.backgroundImage = img;
    headerRightBlocks[headerRightBlocksLength-1].innerHTML=flagRightBlock;
    headerRightBlocks[3].style.marginRight=0 + 'px';
    
    headerRightBlocks[3].style.paddingLeft=0;
    headerRightBlocks[3].style.width = '0';
    headerRightBlocks[3].style.opacity = '0';
    for(let i = 0;i<3;i++){
      headerRightBlocks[i].style.paddingLeft=10 + 'px';
      headerRightBlocks[i].style.marginRight=20 + 'px';
    }  
    for(let i = 3;i<headerRightBlocksLength-1;i++){
      headerRightBlocks[i].style.paddingLeft=0 + 'px';
      headerRightBlocks[i].style.marginRight=0 + 'px';
    }  
  }

function headerBgAnimation(z){
  headerBgs=document.querySelectorAll('.header-bg');
  if(z==0){
    headerBgs[z].style.zIndex='2';
    headerRightBlockAnimatin();
    headerBgs[z].style.borderRadius='0';
    headerBgs[z].style.height=header.offsetHeight+"px";
    headerBgs[z].style.width=header.offsetWidth+"px";
    if(header.offsetWidth>1200){
      headerBgs[z].style.top='-356' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 -0+ 'px';};
    if(header.offsetWidth>1024&& header.offsetWidth<1201){
      headerBgs[z].style.top='-356' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2-20 + 'px';};
    if(header.offsetWidth>768&& header.offsetWidth<1025){
      headerBgs[z].style.top='-260' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2+10 + 'px';};
      if(header.offsetWidth>600&& header.offsetWidth<769){
        headerBgs[z].style.top='-280' + 'px';
        headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2+ 'px';};
        if(header.offsetWidth>480&& header.offsetWidth<601){
          headerBgs[z].style.top='-240' + 'px';
          headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2+ 'px';};
        if(header.offsetWidth<481){
          headerBgs[z].style.top='-240' + 'px';
          headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2+ 'px';};
    setTimeout(function(){ 
      headerBgs[z].style.display='none';
      header.style.backgroundImage = $( headerBgs[z]).css('background-image');
      headerBgs[z].style.display='block';
    }, 500);
  }
  else if(z==1){
    headerRightBlocks[0].style.zIndex=5;
    headerBgs[z].style.zIndex='2';
    headerRightBlockAnimatin();
    headerBgs[z].style.borderRadius='0';
    headerBgs[z].style.height=header.offsetHeight+"px";
    headerBgs[z].style.width=header.offsetWidth+"px";
    if(header.offsetWidth>1200){
      headerBgs[z].style.top='-356' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 -200+ 'px';};
    if(header.offsetWidth>1024&& header.offsetWidth<1201){
      headerBgs[z].style.top='-356' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 -160+ 'px';};
    if(header.offsetWidth>768&& header.offsetWidth<1025){
      headerBgs[z].style.top='-260' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2-120+ 'px';};
    if(header.offsetWidth>600&& header.offsetWidth<769){
      headerBgs[z].style.top='-280' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2-120+ 'px';};
      if(header.offsetWidth>480&& header.offsetWidth<601){
        headerBgs[z].style.top='-240' + 'px';
        headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2-120+ 'px';};
       if(header.offsetWidth<481){
          headerBgs[z].style.top='-240' + 'px';
          headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2-100+ 'px';};

        
    setTimeout(function(){ 
      headerBgs[z].style.display='none';
      header.style.backgroundImage = $( headerBgs[z]).css('background-image');
      headerBgs[z].style.display='block';
      headerRightBlocks[0].style.zIndex=4;
    }, 500);
  }
  else if(z==2){
    headerRightBlocks[0].style.zIndex=5;
    headerRightBlocks[1].style.zIndex=5;
    headerBgs[z].style.zIndex='2';
    headerRightBlockAnimatin();
    headerBgs[z].style.borderRadius='0';
    headerBgs[z].style.height=header.offsetHeight+"px";
    headerBgs[z].style.width=header.offsetWidth+"px";
    if(header.offsetWidth>1200){
      headerBgs[z].style.top='-356' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 -400+ 'px';};
    if(header.offsetWidth>1024&& header.offsetWidth<1201){
      headerBgs[z].style.top='-356' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 -300+ 'px';};
    if(header.offsetWidth>768&& header.offsetWidth<1025){
      headerBgs[z].style.top='-260' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2-240+ 'px';};
    if(header.offsetWidth>600&& header.offsetWidth<769){
      headerBgs[z].style.top='-280' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2-240+ 'px';};
    if(header.offsetWidth>480&& header.offsetWidth<601){
      headerBgs[z].style.top='-240' + 'px';
      headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2-240+ 'px';};
      if(header.offsetWidth<481){
        headerBgs[z].style.top='-240' + 'px';
        headerBgs[z].style.left=-(container.offsetWidth-headerRight.offsetWidth)/2-200+ 'px';};

    setTimeout(function(){ 
      headerBgs[z].style.display='none';
      header.style.backgroundImage = $( headerBgs[z]).css('background-image');
      headerBgs[z].style.display='block';
      headerRightBlocks[0].style.zIndex=4;
      headerRightBlocks[1].style.zIndex=4;
    }, 500);
  }
}

function headerBgFuncBack(headerBg){
  headerRightBlocks.forEach(function(headerRightBlock) {});
  headerBg.style.zIndex='-1';
  headerBg.style.zIndex='-1';
  headerBg.style.height=0+"px";
  headerBg.style.width=0+"px";
  headerBg.style.top=0+ 'px';
  headerBg.style.left=0+ 'px';
  headerBg.style.borderRadius=20+ 'px';
}
  let headerRightBlockWidth =  headerRightBlocks[1].offsetWidth;
  let headerRightBlockHeight =  headerRightBlocks[1].offsetHeight;
  window.addEventListener('resize',function(){
    if(header.offsetWidth>1200){
      headerRightBlockWidth = 180 + 'px';
      headerRightBlockHeight =  280+'px';
      sliderBlocksWidth = 380 + 'px';
      diplomBlocksWidth= 380 + 'px';
    }else if(header.offsetWidth>1024&& header.offsetWidth<1201){
      headerRightBlockWidth =  120 + 'px';
      headerRightBlockHeight =  187+'px'
      sliderBlocksWidth = 300 + 'px';
      diplomBlocksWidth= 300 + 'px';
    }else if(header.offsetWidth>768&& header.offsetWidth<1025){
      headerRightBlockWidth =  110 + 'px';
      headerRightBlockHeight =  187+'px';
      sliderBlocksWidth = 200 + 'px';
      diplomBlocksWidth= 240 + 'px';
    }else if(header.offsetWidth>600&& header.offsetWidth<769){
      headerRightBlockWidth =  110 + 'px';
      headerRightBlockHeight =  187+'px';
      sliderBlocksWidth = 160 + 'px';
      diplomBlocksWidth= 180 + 'px';
    }else if(header.offsetWidth>480&& header.offsetWidth<601){
      headerRightBlockWidth =  110 + 'px';
      headerRightBlockHeight =  187+'px';
      sliderBlocksWidth = 120 + 'px';
      diplomBlocksWidth= 145 + 'px';
    }else if(header.offsetWidth<481){
      headerRightBlockWidth =  82 + 'px';
      headerRightBlockHeight =  150+'px';
      sliderBlocksWidth = 30 + '%';
      diplomBlocksWidth= 100 + 'px';};

      
    sliderBlocks = document.querySelectorAll('.slider-block');
    diplomBlocks = document.querySelectorAll('.diplom-block');
    sliderBlocks[0].style.width=0;
    sliderBlocks[3].style.width=sliderBlocksWidth;
    diplomBlocks[3].style.width=diplomBlocksWidth;
    sliderBlocks[1].style.width=sliderBlocksWidth;
    diplomBlocks[1].style.width=diplomBlocksWidth;
    sliderBlocks[2].style.width=sliderBlocksWidth;
    diplomBlocks[2].style.width=diplomBlocksWidth;
      rootHeight();
      headerRightBlocks[0].style.width = headerRightBlockWidth;
      headerRightBlocks[0].style.height = headerRightBlockHeight;
      headerRightBlocks[1].style.width = headerRightBlockWidth;
      headerRightBlocks[1].style.height = headerRightBlockHeight;
      headerRightBlocks[2].style.width = headerRightBlockWidth;
      headerRightBlocks[2].style.height = headerRightBlockHeight;
      headerRightBlocks[3].style.height = headerRightBlockHeight;
      console.log(headerRightBlockWidth);
  });

  //звезды высотой родительского блока
  let root=document.querySelector('.root');
  function rootHeight(){
  root.style.height=header.offsetHeight +'px';
}
  rootHeight();



//прыжки стрелок

  let videoArrowRights = document.querySelectorAll('.video-arrow-right');
  let videoArrowLeft = document.querySelector('.video-arrow-left');
  arrowRightJump(videoArrowRights[0]);
  arrowRightJump(videoArrowRights[1]);
  arrowRightJumpBack(videoArrowLeft);
  function arrowRightJump(arrow){
    if(header.offsetWidth>1200){
      arrow.style.marginRight=20+'px';
      arrow.style.marginLeft=115+'px';
    }
    else if(header.offsetWidth>768){
      arrow.style.marginRight=10+'px';
      arrow.style.marginLeft=30+'px';
    }
    else{
      arrow.style.marginRight=5+'px';
      arrow.style.marginLeft=20+'px';

    }
    setTimeout(function(){ 
      arrowRightJumpBack(arrow);
    }, 1500);
  };
  function arrowRightJumpBack(arrow){
    arrow.style.marginLeft=20+'px';
    if(header.offsetWidth>1200){
      arrow.style.marginRight=20+'px';
      arrow.style.marginRight=115+'px';
    }
    else if (header.offsetWidth>768){
      arrow.style.marginRight=10+'px';
      arrow.style.marginRight=30+'px';      
    }
    else{
      arrow.style.marginLeft=5+'px';
      
      arrow.style.marginRight=20+'px';     
    }
    setTimeout(function(){ 
      arrowRightJump(arrow);
    }, 1500);
  };
  //слайдер

let sliderArrowLeft = document.querySelector('.slider-arrow-left');
let sliderArrowRight = document.querySelector('.slider-arrow-right');
let sliderBlocks = document.querySelectorAll('.slider-block');
let sliderInner = document.querySelector('.slider-inner');

sliderBlocks[0].style.width=0 + 'px';
sliderBlocks[4].style.width=0 + 'px';

let sliderArrowsSvgs = document.querySelectorAll('.slider-arrows-svg path');
console.log(sliderArrowsSvgs);
sliderArrowRight.addEventListener('hover',function(){
  sliderArrowsSvgs[1].style.stroke='#FAFF00';
});
let sliderBlocksWidth = 0;
if(header.offsetWidth>1200){
  sliderBlocksWidth = 380 + 'px';}
else if(header.offsetWidth>1024&& header.offsetWidth<1201){
  sliderBlocksWidth = 300 + 'px';}
else if(header.offsetWidth>768&& header.offsetWidth<1025){
  sliderBlocksWidth = 200 + 'px';}
else if(header.offsetWidth>600&& header.offsetWidth<769){
  sliderBlocksWidth = 160 + 'px';}
else if(header.offsetWidth>480&& header.offsetWidth<601){
  sliderBlocksWidth = 120 + 'px';}
else if(header.offsetWidth<481){
  sliderBlocksWidth = 30 + '%';};

console.log(sliderBlocksWidth);
    sliderArrowRight.addEventListener('click', function (){
    sliderBlocks = document.querySelectorAll('.slider-block');
    sliderBlocks[0].style.width=sliderBlocksWidth;
    sliderBlocks[3].style.width=0 + 'px';
    sliderBlocks[1].classList.add('slider-block-mid');
    sliderBlocks[2].classList.remove('slider-block-mid');
    sliderBlocks[4].innerHTML=sliderBlocks[3].innerHTML;
    setTimeout(function(){
      let clone = sliderBlocks[4].cloneNode(true);
      sliderBlocks[4].remove();
      sliderBlocks = document.querySelectorAll('.slider-block');
      sliderInner.insertBefore(clone, sliderBlocks[0]);
  }, 10);

/*   sliderArrowRight.removeEventListener('click',sliderArrowLeftFunction()); */
  });

  sliderArrowLeft.addEventListener('click',function /* sliderArrowLeftFunction */(){
    sliderBlocks = document.querySelectorAll('.slider-block');
    sliderBlocks[4].style.width=sliderBlocksWidth;
    sliderBlocks[1].style.width=0 + 'px';
    sliderBlocks[3].classList.add('slider-block-mid');
    sliderBlocks[2].classList.remove('slider-block-mid');
    sliderBlocks[0].innerHTML=sliderBlocks[1].innerHTML;
    setTimeout(function(){
      let clone = sliderBlocks[0].cloneNode(true);
      sliderBlocks[0].remove();
      sliderInner.appendChild(clone); 
      sliderBlocks = document.querySelectorAll('.slider-block');
    }, 10);

  });





//смена картинок где лицензия
let docsRightImg = document.querySelector('.docs_right-img');
let docsLeftBtn = document.querySelectorAll('.docs_left-btn');

docsLeftBtn[0].addEventListener('click',function(){
  docsRightImg.src='https://eduexp.ru/wp-content/uploads/2021/09/lic_center.png'
});
docsLeftBtn[1].addEventListener('click',function(){
  docsRightImg.src='https://eduexp.ru/wp-content/uploads/2021/09/diplom-slider-1.png'
});

docsLeftBtn[2].addEventListener('click',function(){
  docsRightImg.src='https://eduexp.ru/wp-content/uploads/2021/09/diplom-slider-2.png'
});







//слайдер дипломов

  
let diplomArrowLeft = document.querySelector('.diplom-arrow-left');
let diplomArrowRight = document.querySelector('.diplom-arrow-right');
let diplomBlocks = document.querySelectorAll('.diplom-block');
let diplomInner = document.querySelector('.diplom-inner');


diplomBlocks[0].style.width=0 + 'px';
diplomBlocks[4].style.width=0 + 'px';/* 
diplomBlocks[6].style.width=0 + 'px'; */
diplomBlocks[5].style.width=0 + 'px';

let diplomArrowsSvgs = document.querySelectorAll('.diplom-arrows-svg path');

diplomArrowRight.addEventListener('hover',function(){
  diplomArrowsSvgs[1].style.stroke='#FAFF00';
  console.log('click')
});



let diplomBlocksWidth = 0;
if(header.offsetWidth>1200){
  diplomBlocksWidth = 380 + 'px';}
else if(header.offsetWidth>1024&& header.offsetWidth<1201){
  diplomBlocksWidth = 300 + 'px';}
else if(header.offsetWidth>768&& header.offsetWidth<1025){
  diplomBlocksWidth = 240 + 'px';}
else if(header.offsetWidth>600&& header.offsetWidth<769){
  diplomBlocksWidth = 180 + 'px';}
else if(header.offsetWidth>480&& header.offsetWidth<601){
  diplomBlocksWidth = 145 + 'px';}
else if(header.offsetWidth<481){
  diplomBlocksWidth = 100 + 'px';};

  
let diplomBlocksLength = diplomBlocks.length;
diplomArrowRight.addEventListener('click', function (){
    diplomBlocks = document.querySelectorAll('.diplom-block');

    diplomBlocks[diplomBlocksLength-1].style.display ='block';
    diplomBlocks[0].style.width=diplomBlocksWidth;
    diplomBlocks[3].style.width=0 + 'px';
    diplomBlocks[1].classList.add('diplom-block-mid');
    diplomBlocks[2].classList.remove('diplom-block-mid');
    diplomBlocks[4].style.display ='none';

    setTimeout(function(){
      diplomBlocks[diplomBlocksLength-1].id="last_slide";
      diplomBlocks[0].id="first_slide";

      let clone = diplomBlocks[diplomBlocksLength-1].cloneNode(true);
      diplomBlocks[diplomBlocksLength-1].remove();

      diplomBlocks = document.querySelectorAll('.diplom-block');
      diplomInner.insertBefore(clone, diplomBlocks[0]);
  }, 10);

  });

  diplomArrowLeft.addEventListener('click',function (){
    diplomBlocks = document.querySelectorAll('.diplom-block');

    diplomBlocks[diplomBlocksLength-1].style.display ='block';
    diplomBlocks[4].style.width=diplomBlocksWidth;
    diplomBlocks[1].style.width=0 + 'px';
    diplomBlocks[3].classList.add('diplom-block-mid');
    diplomBlocks[2].classList.remove('diplom-block-mid');
    diplomBlocks[0].style.display ='none';

    setTimeout(function(){
      diplomBlocks[0].id="first_slide";
      diplomBlocks[diplomBlocksLength-1].id="last_slide";

      let clone = diplomBlocks[0].cloneNode(true);
      diplomInner.append(clone);
      diplomBlocks[0].remove();

      diplomInner.appendChild(clone); 
      diplomBlocks = document.querySelectorAll('.diplom-block');
    }, 10);

  });