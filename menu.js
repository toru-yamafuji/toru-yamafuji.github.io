//タブメニュー

$(function(){
  $(".header-icon__ul li a").on("click", function() {

    if($($(this).attr("href")).is(':visible')){
        $("#profile-area , #albumlog-area").hide();
        $(".screen").hide();
        $(".header-icon__a").css('color','#dbdada');
        

    } else {
        $(".screen").show();
        $("#profile-area , #albumlog-area").hide();
        $($(this).attr("href")).fadeToggle();
        $(".header-icon__a").css('color','#dbdada');
        $($(this)).css('color','#6d6c6c');
    }
return false;
});
});

$(function(){
  $(".albumlog-txt a").on("click", function() {
  
    $("#albumlog-area").fadeOut(300);
    $(".screen").hide();
    $(".header-icon__a").css('color','#dbdada');
});
});


//スライダー

$(function(){
  $('.my-slider').sliderPro({
    width: '100%',
    height:'60vh',
    imageScaleMode:'contain',
    fullScreen:true,
    arrows: true,//左右の矢印
    buttons: false,//ナビゲーションボタン
    slideDistance:0,//スライド同士の距離
    autoplay:false,
//    visibleSize: '100%',
    breakpoints: {
        550: {
          width:'100%',
          height: 'calc(100vw*3/4)',
          visibleSize: 'auto',
        },
    }
      
      
  });
});



//横スクロール

$(function() {
        //スクロールスピード
        var speed = 20;
        //マウスホイールで横移動
        $('.albumlog-txt').mousewheel(function(event, mov) {
            //ie firefox
            $(this).scrollLeft($(this).scrollLeft() - mov * speed);
            //webkit
            $('body').scrollLeft($('body').scrollLeft() - mov * speed);
            return false;   //縦スクロール不可
        });
    });
    



//waypoints-album
  
$(function(){
  $(".header-icon__ul li a").on("click", function() {
    
  $(".album-sota__a").waypoint({
    handler: function() {
      $(".cover-img").hide();
      $(".cover-sota").show();}, offset: "50%",horizontal:true,context: '.albumlog-txt'});

　$(".album-taiwan__a").waypoint({
    handler: function() {
      $(".cover-img").hide();
      $(".cover-taiwan").show();}, offset: "50%",horizontal:true,context: '.albumlog-txt'});

  $(".album-india__a").waypoint({
    handler: function() {
      $(".cover-img").hide();
      $(".cover-india").show();}, offset: "100%",horizontal:true,context: '.albumlog-txt'});

  
});
});



$(function() {
  $(".animated").waypoint({
    handler: function(direction) {
      if (direction === "down") { 
        $(this.element).addClass("fadeIn");
        this.destroy();
      }
    },
    offset: "100%"
  });
});



$(function(){
$('a[href^=#]').click(function(){
var speed = 500;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});
});

