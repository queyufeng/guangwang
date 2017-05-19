/**
 * Created by Administrator on 2017/5/19/019.
 */
/*
 * 文章列表页
  * */
$(function () {

    /*加载导航和底部*/
    /*头部*/
    $("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐
    /*底部*/
    $("#footer").load("footer.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐


    !(function () {
        var $h2=$(".list_wrap .content_list>h2")
        var $pen=$(".list_wrap .content_list>h2>span")

        $pen.click(function () {
            $h2.animate({"width":"100px","backgroundPositionX":"-1049px"},0,function () {
                $h2.delay(600).animate({"width":"100%","backgroundPositionX":"0"},2000,"easeOutStrong")
            })
        })


    })()

})