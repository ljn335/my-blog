$('#text').focus();

// 表情图标的背景定位
$.each($('.emoticons_list .item'),function (i,value){
	$(this).find('a').css({
		'background-position-x':-i*20
	});
});

// 移入和移出表情按钮时，添加边框
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

//点击表情按钮给表情列表添加class,来控制表情列表的显示或隐藏
$('.emoticons .emoticons_item').click(function (){
	$('.emoticons_list').toggleClass('show');
	$('#text').focus();
});

// 移入或移出表情列表的每个icon时，添加边框
// 点击表情列表的每个icon时，把该表情添加到文本输入框中
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
);

//生成i标签，并添加到文本框
function createI(index){
	var iconI = $("<i></i>");
	iconI.css({
		'background-position-x':-index*16
	})
	$('#text').append(iconI);
}

//当点击文本框时，
// $('#text').click(function (){
// 	console.log($(this).attr('placeholder'))
// 	$('#text').focus()
// 	if($(this).html()=='请输入评论'){
// 		$(this).text("");
// 		$('.emoticons_list').removeClass('show');
// 	}
// 	$(this).text("");
// 	$('.emoticons_list').removeClass('show');
// }).blur(function (){
// 	if($(this).html()==''){
// 		$(this).text("请输入评论");
// 	}
// });

//当点击‘提交评论’按钮时，
//（1）如果文本框的内容为空，就弹出“请输入内容”
//（2）如果文本框的内容不为空，就弹出“评论成功！”，并且清空文本框内容
$('.submit').click(function (){
	if($('#text').val()==''){
		alert('评论内容为空，请输入内容！');
		$('#text').focus();
	}else{
		alert('评论成功！');
		$('#text').val('');
		$('#text').focus();	}
});