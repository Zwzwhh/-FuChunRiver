$(function(){
	$('.nav-ul>li').hover(
	function(){
		var length = $(this).find($('.nav-menu-ul>li')).length
		$(this).find($('.nav-menu-ul')).css({
			'height': length*65+'px',
			'opacity': 1
		})	
	},
	function(){
		$(this).find($('.nav-menu-ul')).css({
			'height': '0',
			'opacity': 0
		})	
	})
})

$(function(){
	var height = $(window).height();
	var width = $(window).width();
	console.log(height);
	$('.header-han').click(function(e){
		$('body').css({
			'overflow': 'hidden',
			'height': height,
			'width': width
		}).animate({'left':'-75%'},400)
		$('.m-nav').animate({'left': '75%'},400)

		$('.m-nav').show();
	})
	$('.nav-bg').click(function(e){
		$('.m-nav').animate({'left': '75%'},400)
		$('body').css('overflow','visible').animate({'left':'0'},400)
		setTimeout(function(){$('.m-nav').hide();},300)
	})
})