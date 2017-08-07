// 头部导航的点击事件
$('.head_list_item a').click(function (){
	$('.head_list_item a').removeClass('active');
	$(this).addClass('active');
	
	var index=$('.head_list_item a').index($(this));
	var w=-(index*16)+'px';

	$('.head_list_item a i').css({
		'background-position-y':'0px'
	})

	$('.head_list_item a i').eq(index).css({
		'background-position-x':w,
		'background-position-y':'-16px'
	})
});