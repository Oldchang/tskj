$(document).ready(function(){
  //首页底部轮播图
  $('#tit span').click(function() {
      var i = $(this).index();//下标第一种写法
      //var i = $('tit').index(this);//下标第二种写法
      $(this).addClass('select').siblings().removeClass('select');
      $('#con .lis_con').eq(i).show().siblings().hide();
  });


      $(".con").eq(0).show();
      $('.position_all_p2').html($(".btn li").length)
      $(".btn li").click(function(){
        var num =$(".btn li").index(this);
        $(".btn li").removeClass("spanss"); //Remove any "active" class
        $(this).addClass("spanss");
        $(".con").hide();
        $(".con").eq(num).show().siblings(".con").hide();
        console.log(num);
        $('.position_all_p1').html(num+1);

      })
      $(".btn li").mouseenter(function(){
         //Remove any "active" class
        $(this).addClass("spanss");
     });
     $(".btn li").mouseleave(function(){
       $(".btn li").removeClass("name_s");
   });
   //锚点
  //  $(".lis_1").click(function(){
  //    $('html,body').animate({scrollTop: 815}, 500)
  //  })
   $(".lis_2").click(function(){
     var imgHeght = $('.images_m').height();
     var new_lunbo = $('.new_lunbo').height();
     var shadow = $('.shadow').height();
     var zhuangjiaye = $('.zhuangjiaye').height();
     $('html,body').animate({scrollTop:imgHeght+ new_lunbo+shadow+zhuangjiaye+156}, 500)
   })
   $(".lis_3").click(function(){
     var imgHeght = $('.images_m').height();
     var new_lunbo = $('.new_lunbo').height();
     var shadow = $('.shadow').height();
     var zhuangjiaye = $('.zhuangjiaye').height();
     var wraps = $('#wrap').height();
     $('html,body').animate({scrollTop:imgHeght+ new_lunbo+shadow+zhuangjiaye+wraps+156}, 500)

   })

   $(".lis_4").click(function(){
     var imgHeght = $('.images_m').height();
     var new_lunbo = $('.new_lunbo').height();
     var shadow = $('.shadow').height();
     var zhuangjiaye = $('.zhuangjiaye').height();
     var wraps = $('#wrap').height();
     var society = $('.society').height();
     $('html,body').animate({scrollTop:imgHeght+society+new_lunbo+shadow+zhuangjiaye+wraps+156}, 500)
   })

   $(".lis_5").click(function(){
     var imgHeght = $('.images_m').height();
     var new_lunbo = $('.new_lunbo').height();
     var shadow = $('.shadow').height();
     var zhuangjiaye = $('.zhuangjiaye').height();
     var wraps = $('#wrap').height();
     var society = $('.society').height();
     var wqhga = $('.wqhg').height();
     $('html,body').animate({scrollTop:imgHeght+wqhga+society+new_lunbo+shadow+zhuangjiaye+wraps+146}, 500)
   })

   $('.liebiao_2s ul li:even').css({
    'margin-right':-3 + 'px',
   })
   $('.liebiao_2s ul li:odd').css({
    ' margin-left':0 + 'px',
    '_zoom':1,
   })
  var lisGs = $('.liebiao_2s ul li').length;

  if (lisGs % 2 == 0) {
    $('.liebiao_2s ul').css({
      border:"none"
    })
  }else {
    $('.liebiao_2s ul li:last').css({
      border:"none"
    })
  }

  // 论坛动态tab切换

        var $tab_li = $('#tabb>ul li');
				var ulWidth = -$('#tabb .tab_menu').width()/2;
				$('#tabb .tab_menu').css({
					"margin-left":ulWidth
				})
				$tab_li.mouseover(function(){
						$(this).addClass('selected').siblings().removeClass('selected');
						var index = $tab_li.index(this);
						$('div.tab_box > div').eq(index).show().siblings().hide();
					});


    // 大图消失
  //   setTimeout(function () {
  //     $('.img_show').slideToggle(3000);
  //     setTimeout(function () {
  //       $('.shadow').css({
  //         "top":80 +"px",
  //         "margin-top":0
  //       })
  //
  //     },1500);
  //     setTimeout(function () {
  //       $('.new_lunbo').css({
  //         'padding-top':178 + "px"
  //       })
  //     },2000);
  //
  // }, 3000);


});
