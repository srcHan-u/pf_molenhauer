const btnPrev = document.querySelector(".reviews-slider__buttons > swiper-buttons-box__button-prev")
const btnNext = document.querySelector(".reviews-slider__buttons > swiper-buttons-box__button-next")

const slides = Array.from(document.querySelectorAll(".reviews-slider__slide"));

const pagination = document.querySelector(".reviews-slider__swiper-pagination");



function createPaginationItem(cb){
   let counter = slides.length;
   let element = document.createElement('div');
   element.classList.add("reviews-slider-swiper-pagination__item");
   let a = "";
   for (let index = 0; index < counter; index++) {
      if (index === cb()) {
         a += '<div class="reviews-slider-swiper-pagination__item" data-active="true"></div>'
         element.setAttribute("data-active", "true")
         // pagination.append(element);
      }else{
         a += '<div class="reviews-slider-swiper-pagination__item"></div>'
      }
   }
   pagination.innerHTML = a;

}

createPaginationItem(checkActive);


function checkActive(){
   return slides.findIndex(e => e.hasAttribute("data-active"))
}


// let index = slides.findIndex(e => e.hasAttribute("data-active"));
// console.log(index);