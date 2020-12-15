

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

//メニューバーの固定
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 650) {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});

//吹き出しのフェードイン
$(function() {
  $('.speech-bubble').hide().delay(3000).fadeIn(1000);
});

$(function() {
 
  //マウスを乗せたら発動
  $('.btn').hover(function() {
 
    //マウスを乗せたら色が変わる
    $(this).css('background-color', '#ff8c00');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //色指定を空欄にすれば元の色に戻る
    $(this).css('background', '');
 
  });
});

//ページ内リンク、スクロール設定
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400; 
    var href= $(this).attr("href");
    var menu = $('#menu').height();
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - menu;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});



