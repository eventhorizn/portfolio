jQuery(function () {
	$('#slides').superslides({
		animation: 'fade',
		animation_speed: 'slow',
		play: 4000,
		pagination: false,
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
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
	});

	// const typed = new Typed('.typed', {
	// 	strings: ['Software Engineer', 'Web Developer'],
	// 	typeSpeed: 70,
	// 	loop: true,
	// 	startDelay: 1000,
	// 	showCursor: false,
	// });
});
