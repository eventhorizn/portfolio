import { CountUp } from './countUp.js';

$(window).on('load', function () {
	$('.loader .inner').fadeOut(500, function () {
		$('.loader').fadeOut(750);
	});

	$('.items').isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false,
		},
	});
});

jQuery(function () {
	$('#slides').superslides({
		animation: 'fade',
		animation_speed: 'slow',
		play: 4000,
		pagination: false,
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		items: 4,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 3,
			},
			938: {
				items: 4,
			},
		},
	});

	const skillsTopOffset = $('.skillsSection').offset().top;
	const statsTopOffset = $('.statsSection').offset().top;
	let countUpFinished = false;

	$(window).on('wheel', function () {
		if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
			$(function () {
				$('.chart').easyPieChart({
					easing: 'easeInOut',
					barColor: '#fff',
					trackColor: false,
					scaleColor: false,
					lineWidth: 4,
					size: 152,
					onStep: function (from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					},
				});
			});
		}

		if (
			!countUpFinished &&
			window.pageYOffset > statsTopOffset - $(window).height() + 200
		) {
			countUp('yearsExp', 10);
			countUp('yearsExp2', 100);
			countUp('yearsExp3', 1000);
			countUp('yearsExp4', 2000);
			countUpFinished = true;
		}
	});

	$('[data-fancybox]').fancybox();

	$('#filters a').on('click', function () {
		$('#filters .current').removeClass('current');
		$(this).addClass('current');

		const selector = $(this).attr('data-filter');

		$('.items').isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false,
			},
		});

		return false; // stop clicking event
	});

	$('#navigation li a').on('click', function (e) {
		e.preventDefault();

		const targetElement = $(this).attr('href');
		const targetPosition = $(targetElement).offset().top;

		$('html, body').animate(
			{
				scrollTop: targetPosition - 50,
			},
			'slow'
		);
	});

	const nav = $('#navigation');
	const navTop = nav.offset().top;

	$(window).on('scroll', function () {
		const body = $('body');

		if ($(window).scrollTop() >= navTop) {
			body.css('padding-top', nav.outerHeight() + 'px');
			body.addClass('fixedNav');
		} else {
			body.css('padding-top', 0);
			body.removeClass('fixedNav');
		}
	});
});

const countUp = function (id, endVal) {
	const cu = new CountUp(id, endVal);
	if (!cu.error) {
		cu.start();
	} else {
		console.error(cu.error);
	}
};
