/**
 * Created by Administrator on 2017/5/9/009.
 */

$(function () {
    $(".nav").hover(function () {
        $(this).find("ul").stop(true,true).slideDown(600,"elasticOut")
    },function () {
        $(this).find("ul").stop(true,true).slideUp(600)
    })
})
