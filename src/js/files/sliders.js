// Документация слайдера: https://swiperjs.com/

import Swiper, { Navigation, Pagination, Parallax} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

function initSliders() {
	if (document.querySelector('.slider-partners') ) { 
		new Swiper('.slider-partners', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 0,
			autoHeight: false,
			speed: 1200,
            grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-partners__swiper-button-prev',
				nextEl: '.slider-partners__swiper-button-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			/*
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.slider-case') && window.innerWidth <= 1728) {
		new Swiper('.slider-case', { 
            modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 0,
			autoHeight: true,
			speed: 1200,
            preloadImages: false,
			lazy: true,
			simulateTouch: true,
            pagination: {
				el: '.slider-case__swiper-pagination',
				clickable: true,
			},
            breakpoints: {
                320: {
					slidesPerView: 1,
                    spaceBetween: 20,
                },
				625: {
					slidesPerView: 2,
				},
				920: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1240: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1580: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},
        })
    }
	if (document.querySelector('.slider-review')) {
        new Swiper(".slider-review", {
            modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 1200,
            preloadImages: false,
			lazy: true,
			simulateTouch: false,
            centeredSlides: true,
            roundLengths: true,
			simulateTouch: true,
            grabCursor: true,
            pagination: {
				el: '.slider-review-pagination',
				clickable: true,
			},
            navigation: {
				prevEl: '.swiper-buttons-box__button-prev',
				nextEl: '.swiper-buttons-box__button-next',
			},
             
        })
    }

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});