$('#text').click(function (){
	$(this).text("");
	$('.emoticons_list').removeClass('show');
}).blur(function (){
	if($(this).val()==''){
		$(this).text("您还可以输入100个字");
	}
});
$('.emoticons .emoticons_item').hover(
	function (){
		$(this).css({
			'border':'1px solid #adafb0'
		})
	},
	function (){
		$(this).css({
			'border':'1px solid #eceef0'
		})
	}
);
$('.emoticons .emoticons_item').click(function (){
	$('.emoticons_list').toggleClass('show');
});
$('.emoticons_list .item').hover(
	function (){
		$(this).css("border","1px solid #4ca0d9");
	},
	function (){
		$(this).css({
			'border':'0px',
			'border-right':'1px solid #d3e4f0',
			'border-bottom':'1px solid #d3e4f0'
		});
	}
).click(function (){
	console.log(1)
});

// var w = window.innerWidth;
// var h = window.innerHeight;
// var promptDiv = $('<div></div>').css({
// 	'width':w,
// 	'height':h,
// 	'background':'rgba(0,0,0,.3)',
// 	'position':'fixed',
// 	'left':0,
// 	'top':0
// });
// $('body').append(promptDiv);
// promptDiv.addClass('Prompt');
// $(".foot").after(promptDiv);

// console.log(window.screen.width,window.screen.height)
// console.log(window.outerWidth,window.outerHeight)
// console.log(window.innerWidth,window.innerHeight)
// console.log(window.outerWidth,window.outerHeight)


$('.submit').click(function (){
	if($('#text').val()==''||$('#text').val()=='您还可以输入100个字'){
		alert('评论内容为空，请输入内容！');
	}else{
		alert('评论成功！');
		$('#text').val("您还可以输入100个字");
	}
});