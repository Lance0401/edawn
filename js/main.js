jQuery(document).ready(function($) {

	/* ======= Scrollspy ======= */
	$('body').scrollspy({
		target: '#top',
		offset: 400
	});
	
	
	//tab选项卡链接头部的nav
	$('.nav-item .tab-links').on('click', function() {
		var ohref = $(this).attr('href');
		console.log(1);
		$(".nav-tabs a[href='" + ohref + "']").tab('show');
	});
	
	//添加延迟出现动画
	/********添加动画效果**********/
	//检测是否是移动端
	if(isMobile.any === false) {
		//PC端
		//大标题
		$('.product .main-title').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay01")}
		})
		$('.solution .main-title').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay01")}
		})
		$('.case .main-title').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay01")}
		})
		$('.news .main-title').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay01")}
		})
		$('.about .main-title').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay01")}
		})
		
		//内容
		$('.product .content-delay').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay02")}
		})
		$('.solution .content-delay').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay02")}
		})
		$('.case .content-delay').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay02")}
		})
		$('.news .content-delay').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay02")}
		})
		$('.about .content-delay').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay02")}
		})
		$('.footer .content-delay').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay02")}
		})
		
		
		$('.footer .content-delay02').css('opacity', 0).one('inview',function(isInView){

			if(isInView){$(this).addClass("animated fadeInUp delay03")}
		})
		
	} else {
		//移动端
		
	}
});