 $(function () {
            var H = $(".header").height();
            $(window).scroll(function () {
                var docSccrollTop = $(document).scrollTop();
                if(docSccrollTop > H){
                }else{ $(".nav").css({"position":"static"});  /*静态定位*/
                }
            });
     $(".triangle").click(function(){
        $(".bg_all").fadeIn(); $(".bg_all").css("display","block");
     });
    //=============头部点击显示隐藏============
    $('.icon_ba').on('click',function(e) {
    e.preventDefault();
   $(".container").show();
    $(".search-page").hide();
    });
    $('.left').on('click',function(e) {
    e.preventDefault();
   $(".container").css("display","none");
    $(".search-page").show();
    });
     //==============登录============
      $('.icon_home1').on('click',function(e) {
    e.preventDefault();
   $(".container").show();
    $(".loginAll").hide();
    });
    $('.right').on('click',function(e) {
    e.preventDefault();
   $(".container").css("display","none");
    $(".loginAll").show();
    }); 
 });

