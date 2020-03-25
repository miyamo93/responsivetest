$(function(){
  $('.category').hover(function(){
      $("ul:not(:animated)", this).show();
  }, function(){
      $("ul",this).hide();
  });
  $(function(){
    $('.bland').hover(function(){
        $("ul:not(:animated)", this).show();
    }, function(){
        $("ul",this).hide();
    });
  });
  
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  $(window).scroll(function (){
    $('.main').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
      }
    });
  });
  $(function() {
    $('#nav2 li a').hover(function(){
        $(this).find('span').stop().animate({'marginRight':'175px'},500);
      },
      function () {
        $(this).find('span').stop().animate({'marginRight':'0px'},300);
      }
    );
  });
});