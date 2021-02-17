import { CountUp } from './countUp.js';

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

	// const typed = new Typed('.typed', {
	// 	strings: ['Software Engineer', 'Web Developer'],
	// 	typeSpeed: 70,
	// 	loop: true,
	// 	startDelay: 1000,
	// 	showCursor: false,
	// });
});

const countUp = function (id, endVal) {
	// const element = document.querySelector('#' + id);
	// const endVal = parseInt(element.innerHTML);

	const cu = new CountUp(id, endVal);
	if (!cu.error) {
		cu.start();
	} else {
		console.error(cu.error);
	}
};
