

  // 轮播图开始


    var currentIndex=0;
    	var nextIndex=0;
    	var timer;
    	function changeAdv()
    	{
    		if(currentIndex==9)
    		{
    			nextIndex=0;
    		}else{
    			nextIndex = currentIndex+1;
    		}
    		$(".oUlplay li").eq(currentIndex).stop(true);
    		$(".oUlplay li").eq(nextIndex).stop(true);
    		$(".oUlplay li").eq(currentIndex).animate({"opacity":0},1500);
    		$(".oUlplay li").eq(nextIndex).animate({"opacity":1},1500);
    		$(".bannerTitleUl li a.thistitle").removeClass("thistitle");
    		$(".bannerTitleUl li").eq(nextIndex).find("a").addClass("thistitle");
    		currentIndex++;
    		if(currentIndex>=10)
    		{
    			currentIndex=0;
    		}
    		timer = setTimeout("changeAdv()",2000);
    	}
    	setTimeout("changeAdv()",2000);

    	$(".bannerTitleUl li").mouseenter(function(){
    		clearTimeout(timer);
    		var activedIndex = $(".bannerTitleUl li a.thistitle").parent().index();
      //  alert(activedIndex);
        currentIndex = $(this).index();
      //  alert(activedIndex+"    "+currentIndex);
    		if(activedIndex==currentIndex)
    		{
    			return;
    		}
    		$(".oUlplay li").eq(activedIndex).stop(true);
    		$(".oUlplay li").eq(currentIndex).stop(true);
    		$(".oUlplay li").eq(activedIndex).animate({"opacity":0},1500);
    		$(".oUlplay li").eq(currentIndex).animate({"opacity":1},1500);
    		$(".bannerTitleUl li a.thistitle").removeClass("thistitle");
    		$(".bannerTitleUl li").eq(currentIndex).find("a").addClass("thistitle");
    	})
    	$(".bannerTitleBox").mouseleave(function(){
    		changeAdv();
    	})

  // 轮播图结束



$(document).ready(function(){
   $(function () {
        $('.content-title ul li').click(function(){
           $(this).addClass("special");
           $(this).siblings().removeClass("special")
        });
    });

    $('.swiper-button-prev2 a').click(function () {
        $(".swiper-button-next2 a").show()
    });
    $('.huan').click(function () {
      $('.guess-content').toggle();

    });

   $('.competitive-content li').hover(function () {
         var index = $('.competitive-content li').index(this);
         $('.hover-box').eq(index).show(50);
    },function () {
          $('.hover-box').hide(50);
   });


   //首播 滚动
   //首播 滚动
   var i = 1;
   $(".en-prev").click(function () {
       i--;
       if( i > 0) {
          $(".en-video-outer, .en-video-outer2, .en-video-outer3, .en-video-outer4, .en-video-outer5, .en-video-outer6").animate({"left":"+=1470px"},600);
       } else {
         i = 1;
       }
       return false
   });
   $(".en-next").click(function () {
       i++;
       console.log("hou")
       if( i < 3) {
          $(".en-video-outer, .en-video-outer2, .en-video-outer3, .en-video-outer4, .en-video-outer5, .en-video-outer6").animate({"left":"-=1470px"},600);
       } else {
         i = 2;
       }
       return false
   });

//娱乐 滚动
   var x = 1;
   $(".pr-prev").click(function () {
       x--;
       if( x > 0) {
          $(".pr-video-outer").animate({"left":"+=1470px"},600);
       } else {
         x = 1;
       }
       return false
   });
   $(".pr-next").click(function () {
       x++;
       console.log("hou")
       if( x < 3) {
          $(".pr-video-outer").animate({"left":"-=1470px"},600);
       } else {
         x = 2;
       }
       return false
   });
   var z = 1;
   $(".sc-prev").click(function () {
       z--;
       if( z > 0) {
          $(".sc-video-outer").animate({"left":"+=1470px"},600);
       } else {
         z = 1;
       }
       return false
   });
   $(".sc-next").click(function () {
       z++;
       if( i < 3) {
          $(".sc-video-outer").animate({"left":"-=1470px"},600);
       } else {
         z = 2;
       }
       return false
   });

   //娱乐 头部
   $(".en-li").click(function () {
      $(".en-video-outer").show();
      $(".en-video-outer").siblings().hide()
   });
   $(".en-li2").click(function () {
      $(".en-video-outer2").show();
      $(".en-video-outer2").siblings().hide()
   })
   $(".en-li3").click(function () {
      $(".en-video-outer3").show();
      $(".en-video-outer3").siblings().hide()
   });
   $(".en-li4").click(function () {
      $(".en-video-outer4").show();
      $(".en-video-outer4").siblings().hide()
   });
   $(".en-li5").click(function () {
      $(".en-video-outer5").show();
      $(".en-video-outer5").siblings().hide()
   });
   $(".en-li6").click(function () {
      $(".en-video-outer6").show();
      $(".en-video-outer6").siblings().hide()
   });



   $(".pr-li").click(function () {
      $(".pr-video-outer").show();
      $(".pr-video-outer").siblings().hide()
   });
   $(".pr-li2").click(function () {
      $(".pr-video-outer2").show();
      $(".pr-video-outer2").siblings().hide()
   })
   $(".pr-li3").click(function () {
      $(".pr-video-outer3").show();
      $(".pr-video-outer3").siblings().hide()
   });
   $(".pr-li4").click(function () {
      $(".pr-video-outer4").show();
      $(".pr-video-outer4").siblings().hide()
   });

   $('.program_item').hover(function () {
      var index = $('.competitive-content li').index(this);
      $(this).eq(index).addClass("program_item_active");
      $(this).siblings().removeClass("program_item_active")
    })


setTimeout(function () {
  $('#snow2').hide()
},5000);
setTimeout(function () {
  $('#snow3').hide()
},7000);
setTimeout(function () {
  $('#snow1').hide()
},6000)
setTimeout(function () {
  $('#snow4').hide()
},8000)





   $(window).scroll(function () {
         var t = $(window).scrollTop();
         if (t > 400) {
             $(".upto").css({ display: "block" });
         }
         else {
             $(".upto").css({ display: "none" });
         };
   });

     $(".upto").click(function onclick2() {
         $("html,body").animate({scrollTop:"0"},300);
         $(".upto").animate({ bottom: "700px"},300).animate({ bottom: "50px"},30);
     })


















});
