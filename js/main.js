$(window).ready(function() {
	// 左に抜くエフェクトの定義
	$.BgSwitcher.defineEffect('horizontal-slide', function($el) {
		$el.animate({'left': -$el.width()}, this.config.duration, this.config.easing);
	});

	// bgswitcherの対象を指定
	var $slideshow = $('#slideshow');

	// bgswitcherする
	$slideshow.bgswitcher({
		'images': ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'],
		'interval': 10000,
		'effect': 'horizontal-slide'
	});
	// ボタンクリック処理の指定
	$('.bg-prev', $slideshow).on('click', function() {
		// 一つ前の画像
		$slideshow.bgswitcher('prev');
	});
	$('.bg-next', $slideshow).on('click', function() {
		// 一つ次の画像
		$slideshow.bgswitcher('next');
	});
	$('.bg-select', $slideshow).each(function(i) {
		// i番目の画像
		$(this).on('click', function() {
			$slideshow.bgswitcher('select', i);
			$('.bg-select.current', $slideshow).removeClass('current');
			$(this).addClass('current');
		});
	});
});
