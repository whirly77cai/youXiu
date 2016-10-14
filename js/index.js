function loadScript(src) {
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = src;
	document.body.appendChild(script);
}

$(function () {
	$('#toggle').click(function(event) {
		$(this).toggleClass('toggle-animate');
		if($('nav ul.navbar').css('opacity') == '1'){
			$('.mask').animate({'opacity': 0, 'z-index': '-1'}, 'fast', 'swing', 
				function () {
					$('nav ul.navbar').animate({right:'100%', opacity: '0'}, 'normal', 'linear');
				}
			);
		}else{
			$('nav ul.navbar').animate({right:'0', opacity: '1'}, 'normal', 'linear',
				 function () {
					$('.mask').animate({'opacity': 1,'z-index': '1'}, 10, 'swing')
				}
			);
		}
	});
	$('.mask').click(function(event) {
		$(this).animate({'opacity': 0, 'z-index': '-1'}, 'fast', 'swing', 
				function () {
					$('nav ul.navbar').animate({right:'100%', opacity: '0'}, 'normal', 'linear');
				}
			);
	});
})