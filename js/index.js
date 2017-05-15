
//   index.html的js
$(function () {

    /*头部*/
    $("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐

    // banner
    (function () {

        var inow=0;

       function faIN() {
           $(".banner").eq(inow).fadeIn().siblings().fadeOut();

          $(".point_box span").eq(inow).addClass("now").siblings().removeClass("now")
           imgEasing();
       }
        function imgEasing() {
            $(".banner").eq(inow).find("img").eq(0).addClass("animated fadeInLeft")
            $(".banner").eq(inow).find("img").eq(1).addClass("animated fadeInRight")
            $(".banner").eq(inow).find("img").eq(2).addClass("animated fadeInUp")
            $(".banner").eq(inow).siblings().find("img").eq(0).removeClass("animated fadeInLeft")
            $(".banner").eq(inow).siblings().find("img").eq(1).removeClass("animated fadeInRight")
            $(".banner").eq(inow).siblings().find("img").eq(2).removeClass("animated fadeInUp")
        }
        //    左按钮
        $(".point_wrap ._prev").click(function () {

            inow--;

            if(inow<0){
                inow=2
            }
            faIN();
        })
        //右按钮
        $(".point_wrap ._next").click(function () {

            inow++;

            if(inow>2){
                inow=0
            }
            faIN();
        })

    //    三个小按钮

      $(".point span").each(function (i,ele) {
          var num=i;

          $(this).click(function () {
              inow=num;
              faIN();
          })
      })

    //自动播放
        setInterval(easing_auto,3000)
        function easing_auto() {
            inow++;
            if(inow>2){
                inow=0;
            }
            faIN();
        }


    })();



    /*主要产品*/

    !(function () {

        var IndexNum=0;
        var $left=$(".leftRight_point>.zuo");
        var $right=$(".leftRight_point>.you");
        var $lines=$(".point_left>.line");
        var  $contents=$(".content_right>.content01")

        $left.click(function () {
            IndexNum--;
            if(IndexNum<0){
                IndexNum=5;
            }
            fadeInFn("fadeInRight");
        })


        $right.click(function () {
            IndexNum++;
            if(IndexNum>5){
                IndexNum=0;
            }
            fadeInFn("fadeInLeft");
        })

        $lines.each(function (i) {
            var  num=i;
            $(this).click(function () {

                var direction= IndexNum>num?"fadeInRight":"fadeInLeft"

                IndexNum=num;

                fadeInFn(direction);

            })
        })
        function fadeInFn (a) {
            $lines.eq(IndexNum).addClass("now").siblings().removeClass("now")
            $contents.eq(IndexNum).addClass("now animated "+a).siblings().removeClass("now animated "+a)
        }
    })()





})