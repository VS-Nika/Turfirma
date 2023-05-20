
const swiper = new Swiper('.swiper', {
	speed: 500,
	spaceBetween: 100,
	pagination: {
			el: '.swiper-pagination',
		},
	navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	effect: "fade",
	fadeEffect: {
			crossFade : true
	},
});