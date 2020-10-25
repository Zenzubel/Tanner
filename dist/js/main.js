$(function () {
//================== menu-burger===========================
	$('.menu-burger__icon').click(function(event) {
		$('.menu-burger__list, .menu-burger__icon, .menu-burger__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__menu-item--1').click(function(event) {
		$('.drop__area-1, .drop__col-1').toggleClass('active');
		$('.drop__area-2, .drop__col-2').removeClass('active');
		$('.drop__area-3, .drop__col-3').removeClass('active');
		$('.drop__area-4, .drop__col-4').removeClass('active');
		$('.drop__area-5, .drop__col-5').removeClass('active');
		if ($(".header__menu-item--2, .header__menu-item--3, .header__menu-item--4, .header__menu-item--5").hasClass("active")) {
			$('.drop__item-1, .drop__col-1').removeClass('active');
		}
	});
	$('.header__menu-item--2').click(function(event) {
		$('.drop__area-1, .drop__col-1').removeClass('active');
		$('.drop__area-2, .drop__col-2').toggleClass('active');
		$('.drop__area-3, .drop__col-3').removeClass('active');
		$('.drop__area-4, .drop__col-4').removeClass('active');
		$('.drop__area-5, .drop__col-5').removeClass('active');
		if ($(".header__menu-item--1, .header__menu-item--3, .header__menu-item--4, .header__menu-item--5").hasClass("active")) {
			$('.drop__item-2, .drop__col-2').removeClass('active');
		}
	});
	$('.header__menu-item--3').click(function(event) {
		$('.drop__area-1, .drop__col-1').removeClass('active');
		$('.drop__area-2, .drop__col-2').removeClass('active');
		$('.drop__area-3, .drop__col-3').toggleClass('active');
		$('.drop__area-4, .drop__col-4').removeClass('active');
		$('.drop__area-5, .drop__col-5').removeClass('active');
		if ($(".header__menu-item--1, .header__menu-item--2, .header__menu-item--4, .header__menu-item--5").hasClass("active")) {
			$('.drop__item-3, .drop__col-3').removeClass('active');
		}
	});
	$('.header__menu-item--4').click(function(event) {
		$('.drop__area-1, .drop__col-1').removeClass('active');
		$('.drop__area-2, .drop__col-2').removeClass('active');
		$('.drop__area-3, .drop__col-3').removeClass('active');
		$('.drop__area-4, .drop__col-4').toggleClass('active');
		$('.drop__area-5, .drop__col-5').removeClass('active');
		if ($(".header__menu-item--1, .header__menu-item--2, .header__menu-item--3, .header__menu-item--5").hasClass("active")) {
			$('.drop__item-4, .drop__col-4').removeClass('active');
		}
	});
/////////////////////////start-salt-item////////////////////////
	$('.menu-burger__svg-box--1').click(function(event) {
		$('.menu-burger__salt-item--1, .menu-burger__salt-item--2, .menu-burger__salt-item--3, .menu-burger__salt-item--4, .menu-burger__svg--1').toggleClass('active');

		$('.menu-burger__belts-list, .menu-burger__belts-link, .menu-burger__circle--1').removeClass('active');
		$('.menu-burger__vallets-list, .menu-burger__vallets-link, .menu-burger__circle--2').removeClass('active');
		$('.menu-burger__bags-list, .menu-burger__bags-link, .menu-burger__circle--3').removeClass('active');
		$('.menu-burger__accessories-list, .menu-burger__accessories-link, .menu-burger__circle--4').removeClass('active');
	});

	$('.menu-burger__circle--1').click(function(event) {
		$('.menu-burger__belts-list, .menu-burger__belts-link, .menu-burger__circle--1').toggleClass('active');
	});
	$('.menu-burger__circle--2').click(function(event) {
		$('.menu-burger__vallets-list, .menu-burger__vallets-link, .menu-burger__circle--2').toggleClass('active');
	});
	$('.menu-burger__circle--3').click(function(event) {
		$('.menu-burger__bags-list, .menu-burger__bags-link, .menu-burger__circle--3').toggleClass('active');
	});
	$('.menu-burger__circle--4').click(function(event) {
		$('.menu-burger__accessories-list, .menu-burger__accessories-link, .menu-burger__circle--4').toggleClass('active');
	});
/////////////////////////end-salt-item////////////////////////
/////////////////////////start-voyager-item////////////////////////
	$('.menu-burger__svg-box--2').click(function(event) {
		$('.menu-burger__voyager-item--1, .menu-burger__voyager-item--2, .menu-burger__voyager-list, .menu-burger__svg--2').toggleClass('active');
		$('.menu-burger__glass-list, .menu-burger__glass-link, .menu-burger__circle--5').removeClass('active');
		$('.menu-burger__tablet-list, .menu-burger__tablet-link, .menu-burger__circle--6').removeClass('active');

	});
	$('.menu-burger__circle--5').click(function(event) {
		$('.menu-burger__glass-list, .menu-burger__glass-link, .menu-burger__circle--5').toggleClass('active');
	});
	$('.menu-burger__circle--6').click(function(event) {
		$('.menu-burger__tablet-list, .menu-burger__tablet-link, .menu-burger__circle--6').toggleClass('active');
	});
/////////////////////////end-voyager-item////////////////////////
/////////////////////////start-drifter-item////////////////////////

	$('.menu-burger__svg-box--3').click(function(event) {
		$('.menu-burger__drifter-item--1, .menu-burger__drifter-item--2, .menu-burger__drifter-item--3, .menu-burger__drifter-item--4, .menu-burger__drifter-list, .menu-burger__svg--3').toggleClass('active');
			$('.menu-burger__top-list, .menu-burger__top-link, .menu-burger__circle--7').removeClass('active');

		$('.menu-burger__bottoms-list, .menu-burger__bottoms-link, .menu-burger__circle--8').removeClass('active');

		$('.menu-burger__tips-list, .menu-burger__tips-link, .menu-burger__circle--9').removeClass('active');

		$('.menu-burger__wood-list, .menu-burger__wood-link, .menu-burger__circle--10').removeClass('active');

	});
	$('.menu-burger__circle--7').click(function(event) {
		$('.menu-burger__top-list, .menu-burger__top-link, .menu-burger__circle--7').toggleClass('active');
	});
	$('.menu-burger__circle--8').click(function(event) {
		$('.menu-burger__bottoms-list, .menu-burger__bottoms-link, .menu-burger__circle--8').toggleClass('active');
	});
	$('.menu-burger__circle--9').click(function(event) {
		$('.menu-burger__tips-list, .menu-burger__tips-link, .menu-burger__circle--9').toggleClass('active');
	});
	$('.menu-burger__circle--10').click(function(event) {
		$('.menu-burger__wood-list, .menu-burger__wood-link, .menu-burger__circle--10').toggleClass('active');
	});

/////////////////////////end-drifter-item////////////////////////
/////////////////////////start-collection-item////////////////////////

	$('.menu-burger__svg-box--4').click(function(event) {
		$('.menu-burger__collection-item--1, .menu-burger__collection-item--2, .menu-burger__collection-item--3, .menu-burger__collection-item--4, .menu-burger__collection-list, .menu-burger__svg--4').toggleClass('active');
		$('.menu-burger__new-list, .menu-burger__new-link, .menu-burger__circle--11').removeClass('active');

		$('.menu-burger__essential-list, .menu-burger__essential-link, .menu-burger__circle--12').removeClass('active');

		$('.menu-burger__best-list, .menu-burger__best-link, .menu-burger__circle--13').removeClass('active');

		$('.menu-burger__home-list, .menu-burger__home-link, .menu-burger__circle--14').removeClass('active');

	});
	$('.menu-burger__circle--11').click(function(event) {
	$('.menu-burger__new-list, .menu-burger__new-link, .menu-burger__circle--11').toggleClass('active');
	});
	$('.menu-burger__circle--12').click(function(event) {
	$('.menu-burger__essential-list, .menu-burger__essential-link, .menu-burger__circle--12').toggleClass('active');
	});
	$('.menu-burger__circle--13').click(function(event) {
	$('.menu-burger__best-list, .menu-burger__best-link, .menu-burger__circle--13').toggleClass('active');
	});
	$('.menu-burger__circle--14').click(function(event) {
	$('.menu-burger__home-list, .menu-burger__home-link, .menu-burger__circle--14').toggleClass('active');
	});
/////////////////////////end-collection-item////////////////////////
//==========================================================
//==========================================================
//==========================================================
//=================smooth scroll=============================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 0;
		// const topOffset = document.querySelector('.scrollto').offsetHeight;
		// const topOffset = 0; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});
//==========================================================
		var mySwiper = new Swiper ('.slider-top__container', {
		containerModifierClass: 'slider-top__container', 
		wrapperClass: 'slider-top__wrapper',
		slideClass: 'slider-top__item',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		direction: 'horizontal',
		navigation: {
			nextEl: '.slider-top__button-next',
			prevEl: '.slider-top__button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.slider-top__pagination',
			clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
			},
		},
		breakpoints: {
			768: {
				direction: 'vertical',
			},
		}
	})

		var mySwiper = new Swiper ('.buy__container-voyager', {
		containerModifierClass: 'buy__container-voyager', 
		wrapperClass: 'buy__wrapper-voyager',
		slideClass: 'buy__item-voyager',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		navigation: {
			nextEl: '.buy__button-next',
			prevEl: '.buy__button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		 pagination: {
			el: '.buy__pagination-voyager',
			clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
			},
		},
		breakpoints: {
			476: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
				centeredSlides: false,
				spaceBetween: 80,
			},
		}
	})

		var mySwiper = new Swiper ('.buy__container-drifter', {
		containerModifierClass: 'buy__container-drifter', 
		wrapperClass: 'buy__wrapper-drifter',
		slideClass: 'buy__item-drifter',
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
		navigation: {
			nextEl: '.buy__button-next',
			prevEl: '.buy__button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		 pagination: {
			el: '.buy__pagination-drifter',
			clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
			},
		},
		breakpoints: {
			476: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
				centeredSlides: false,
				spaceBetween: 80,
			},
		}
	})
///////////////start-nicescroll//////////////////////
	$(".voyager-drifter__text, .collections__txt").niceScroll({
		cursorcolor:"#b8a47e",
		cursorwidth:"4px",
		background:"none",
		cursorborder:"none",
		cursorborderradius:4
	});
///////////////end-nicescroll//////////////////////

});
