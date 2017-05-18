/**
 * Created by Administrator on 2017/5/18/018.
 */

$(function () {

    !(function () {

        $(window).scroll(function () {

            if($(window).scrollTop()>500){
                $(".scroll_top").fadeIn();
            }else {
                $(".scroll_top").fadeOut();
            }

        })



        var  $top=$(".scroll_top .top");

        $top.click(function () {

            $top.parent().animate({"bottom":"1000px"},1000,function () {
                $top.parent().css({"bottom":"158px","display":"none"})
            })

            $("body,html").scrollTop(0)



        })


    })()


})