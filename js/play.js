$(document).ready(function() {

  var i = 1;
  $(".vi-prev").click(function() {
    i--;
    if (i > 0) {
      $(".videoRecommend-libox").animate({
        "left": "+=830px"
      }, 600);
    } else {
      i = 1;
    }
    return false
  });
  $(".vi-next").click(function() {
    i++;
    console.log("hou")
    if (i < 3) {
      $(".videoRecommend-libox").animate({
        "left": "-=830px"
      }, 600);
    } else {
      i = 2;
    }
    return false
  });


  var i = 1;
  $(".ge-prev").click(function() {
    i--;
    if (i > 0) {
      $(".guess-like-libox").animate({
        "left": "+=830px"
      }, 600);
    } else {
      i = 1;
    }
    return false
  });
  $(".ge-next").click(function() {
    i++;
    console.log("hou")
    if (i < 3) {
      $(".guess-like-libox").animate({
        "left": "-=830px"
      }, 600);
    } else {
      i = 2;
    }
    return false
  });

  setTimeout(function() {
    $('#snow2').hide()
  }, 5000);
  setTimeout(function() {
    $('#snow3').hide()
  }, 4000);
  setTimeout(function() {
    $('#snow1').hide()
  }, 4000)
  setTimeout(function() {
    $('#snow4').hide()
  }, 3000)


  $(window).scroll(function() {
    var t = $(window).scrollTop();
    if (t > 400) {
      $(".upto").css({
        display: "block"
      });
    } else {
      $(".upto").css({
        display: "none"
      });
    };
  });
  $(".upto").click(function onclick2() {
    $("html,body").animate({
      scrollTop: "0"
    }, 300);
    $(".upto").animate({
      bottom: "500px"
    }, 300).animate({
      bottom: "50px"
    }, 30);
  })
});

var url = decodeURIComponent(window.location.search);
//alert(url)
var srcUrl = url.split("=")[1];
document.getElementById("myvideo").src = "res/" + srcUrl;
