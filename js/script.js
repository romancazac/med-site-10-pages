"use strict";
(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

	
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}

	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
		
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}


	dynamicAdapt();


	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}

	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}

	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}

	function customAdapt() {
		
	}
}());;

const icon = document.querySelector(".bottom-header__btn");
const search = document.querySelector(".bottom-header__searchb");
const body = document.querySelector('.baner');     
    icon.addEventListener("click", function (e) {
        e.preventDefault();
        search.classList.add('active');
        

    });
    if (body){
      body.addEventListener("click", function (e) {
      search.classList.remove('active');
    });
    }
    

$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}

var swiper1 = new Swiper('.baner__slide', {
  effect: 'flip',
    navigation: {
        nextEl: '.swiper-button-pre',
        prevEl: ' .swiper-button-nex',
      },
    pagination: {
      el: '.swiper-pagination',
    },
  });

var swiper2 = new Swiper('.section-doctors__slide', {
  
  spaceBetween: 20,
  slidesPerView: 1,
  
    navigation: {
        nextEl: '.swiper-button-pre',
        prevEl: '.swiper-button-nex ',
    },
    breakpoints: {
      '960': {
        slidesPerView: 2,
        
      },
      '1165': {
        slidesPerView: 4,
       
      },
      '1400': {
        slidesPerView: 5.06,
       
      },
    }
 
  });
  
  var swiper3 = new Swiper('.section-reviews__slide', {
    
    spaceBetween: 20,
    freeMode: false,
    navigation: {
        nextEl: '.swiper-button-pre',
        prevEl: '.swiper-button-nex ',
    },
    breakpoints: {
      '960': {
        slidesPerView: 1,
        
      },
      '1165': {
        slidesPerView: 2,
       
      },
      '1580': {
        slidesPerView: 3.03,
       
      },
    }
  });

  var swiper4 = new Swiper('.section-doc__slide', {
  
    spaceBetween: 20,
    slidesPerView: 1,
      navigation: {
          nextEl: '.swiper-button-pre',
          prevEl: '.swiper-button-nex ',
      },
      breakpoints: {
        '960': {
          slidesPerView: 2,
          
        },
        '1165': {
          slidesPerView: 4.04,
         
        },
       
      }
   
    });
const more = document.querySelector(".section-reviews__more");
const scrolll = document.querySelector(".section-reviews__scrolll");
 if (more) {
    more.addEventListener("click", function (e) {
            scrolll.classList.add('open');
    });
 }   



const headeBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.bottom-header__nav');
  
    
      headeBurger.addEventListener("click", function (e) {
        headeBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
});

      

//scrollTop

const offset = 500;
const scrollUp = document.querySelector('.scroll-top ');


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {};

// onscroll
window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add ('active');
  } else {
    scrollUp.classList.remove ('active');
  }

});


//click

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });


});




    let menuParents = document.querySelectorAll('.aside-nav__link');

    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
            menuParent.addEventListener("click", function (e){
            menuParent.classList.toggle('active');
       
            
        });
       
       
        
       
    }
    
    



    //tabs
    (function($) {
      $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
        });
      });
    })(jQuery);

//spoilers
    $('.tabs__name').click(function(event) {
      if($('.tabs__body').hasClass('one')){
        $('.tabs__name').not($(this)).removeClass('active');
        $('.tabs__items').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });



let checkBox = document.querySelectorAll('.checkbox__label');

for (let index = 0; index < checkBox.length; index++){
  const checkBoxx = checkBox[index];
  checkBoxx.addEventListener("change", function (e) {
    
    checkBoxx.classList.toggle('active');

    let checkActive = document.querySelectorAll(".checkbox__label .active");
    

    if ( checkActive.length > 0) {

      let serviceQantity = querySelector(".aside-service__qantity");
   
      const checkQantity = serviceQantity[index];
      checkQantity.innerHTML = checkActive.getAttribute('data-text') + checkActive.length; 
    }

  });
  
} 

const headerLink = document.querySelectorAll(".bottom-header__link");
for( let index = 0; index <  headerLink.length; index++ ) {
  const headerLinks =  headerLink[index];
  headerLinks.addEventListener("click", function (e){
    headerLinks.classList.add('_active');
    
  });
 
}
