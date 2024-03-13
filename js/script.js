// Initializing the Swiper slider:
const swiper = new Swiper('.swiper', {

  // Basic settings:
  direction: 'horizontal',
  loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Pagination:
	pagination: {
    el: '.swiper-pagination',	
	  clickable: true, 
  },
	  slidesPerView: 1,
});