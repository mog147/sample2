

$(function(){

    //表示非表示切替
    $(".head__icon").on("click",function(){

        if ($('.head__main').css('display') == "none") {

            // 非表示の場合の処理
            $("#target").addClass("fixed");
            $('.head__main').slideToggle();

        } else {

            // 表示の場合の処理
            $("#target").removeClass("fixed");
            $('.head__main').hide();
    
        }
    })
    
});

$(function(){

    //表示非表示切替
    $(".head__main").on("click",function(){

        if ($('.head__main').css('display') == "none") {

            // 非表示の場合の処理
            $("#target").addClass("fixed");
            $('.head__main').slideToggle();

        } else {

            // 表示の場合の処理
             $("#target").removeClass("fixed");
            $('.head__main').hide();
    
        }
    })
    
});

// アニメーション効かない時用
$(function() {
    var $touch = $(".head__main");

    $touch.click(function() {

      $touch.addClass('active');

      setTimeout(function() {

      $touch.removeClass('active');

      }, 300);

    });
    
  });


