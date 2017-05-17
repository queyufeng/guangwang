//   index.html的js
$(function () {

    /*头部*/
    $("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐

    // banner
    (function () {

        var inow = 0;

        function faIN() {
            $(".banner_wrap .banner").eq(inow).fadeIn().siblings().fadeOut();

            $(".banner_wrap .point_box span").eq(inow).addClass("now").siblings().removeClass("now")
            imgEasing();
        }

        function imgEasing() {
            $(".banner_wrap .banner").eq(inow).siblings().find("img").eq(0).removeClass("animated fadeInLeft")
            $(".banner_wrap .banner").eq(inow).siblings().find("img").eq(1).removeClass("animated fadeInRight")
            $(".banner_wrap .banner").eq(inow).siblings().find("img").eq(2).removeClass("animated fadeInUp")

            $(".banner_wrap .banner").eq(inow).find("img").eq(0).addClass("animated fadeInLeft")
            $(".banner_wrap .banner").eq(inow).find("img").eq(1).addClass("animated fadeInRight")
            $(".banner_wrap .banner").eq(inow).find("img").eq(2).addClass("animated fadeInUp")

        }

        //    左按钮
        $(".banner_wrap .point_wrap ._prev").click(function () {

            inow--;

            if (inow < 0) {
                inow = 2
            }
            faIN();
        })
        //右按钮
        $(".banner_wrap .point_wrap ._next").click(function () {

            inow++;

            if (inow > 2) {
                inow = 0
            }
            faIN();
        })

        //    三个小按钮

        $(".banner_wrap .point span").each(function (i, ele) {
            var num = i;

            $(this).click(function () {
                inow = num;
                faIN();
            })
        })

        //自动播放
        setInterval(easing_auto, 3000)
        function easing_auto() {
            inow++;
            if (inow > 2) {
                inow = 0;
            }
            faIN();
        }


    })();


    /*主要产品*/

    !(function () {

        var IndexNum = 0;
        var $left = $(".leftRight_point>.zuo");
        var $right = $(".leftRight_point>.you");
        var $lines = $(".point_left>.line");
        var $contents = $(".content_right>.content01")

        $left.click(function () {
            IndexNum--;
            if (IndexNum < 0) {
                IndexNum = 5;
            }
            fadeInFn("fadeInRight");
        })


        $right.click(function () {
            IndexNum++;
            if (IndexNum > 5) {
                IndexNum = 0;
            }
            fadeInFn("fadeInLeft");
        })

        $lines.each(function (i) {
            var num = i;
            $(this).click(function () {

                var direction = IndexNum > num ? "fadeInRight" : "fadeInLeft"

                IndexNum = num;

                fadeInFn(direction);

            })
        })
        function fadeInFn(a) {
            $lines.eq(IndexNum).addClass("now").siblings().removeClass("now")
            $contents.eq(IndexNum).addClass("now animated " + a).siblings().removeClass("now animated " + a)
        }
    })();


    /*业务模块*/

    !(function () {

        var $centerimg = $(".centerimg");

        var $search_img = $(".search_img")

        var $content = $(".business_wrap").find(".content")

        var $bottom = $(".business_wrap .content>.bottom")
        /*把 $search_img 放到 $centerimg的集合中*/

        $centerimg.add($search_img).hover(function () {

            $(this).addClass("animated tada")
        }, function () {
            $(this).removeClass("animated tada")
        })
        /*
         *   点击$search_img ,让他的图片改变,让他相对于的slide打开
         *
         *           点击他的时候,其他的关闭
         *           如果当期是打开的,我让他关闭.如果是关闭的,我让他打开
         *
         * */
        $search_img.each(function (i, ele) {
            $(this).click(function () {
                slideImg(i)
            })
        })
        $centerimg.each(function (i, ele) {
            $(this).click(function () {
                slideImg(i)
            })
        })

        /*
         * 判断右边图标是否有now这个类名,有的话说明相对应的slide是打开的
         *               如果是打开的,我们应该让他关闭,并且当前图标还原回去
         *
         * 没有的话说明是关闭的
         *
         *               如果是关闭的,我们应该让他相对应的打开,并且切换图片(切换图片位置通过添加类名now来控制)
         * */
        function slideImg(i) {

            if ($search_img.eq(i).hasClass("now")) {  //hasClass 是用来判断某个元素是否具有某个类名
                $bottom.eq(i).slideUp();
                $search_img.eq(i).removeClass("now")
            } else {
                $bottom.slideUp().delay(300).eq(i).slideDown();    //没有类名我们让所有的都先关闭,然后让当前的打开
                $search_img.removeClass("now").eq(i).addClass("now")   //让所有的都删除类名,然后让当前的添加类名
            }

        }
    })()

    /*团队模块*/

    !(function () {

        var $team_banner = $(".team .team_banner")
        var $_prev = $(".team .point_wrap ._prev ")
        var $_next = $(".team .point_wrap ._next ")
        var index = 0;
        var $points = $(".team .point_wrap .point_box span")

        /*定时器返回id*/
        var timeOut = null;

        /*节流阀*/
        var ifRun = false;

        /*向左边滚动函数*/
        function toLeft() {

            if (ifRun) {
                return;  //判断当前是什么状态,如果还没有执行完上一个动画的时候,就return,不让后续代码执行
            }
            ifRun = true;//执行到这地方说明之前的代码执行完毕啦,我们再从新开启个动画
            clearInterval(timeOut); //清除掉自动轮播的定时器

            //让 $team_banner 每执行一次就往左边走-1100px,当走完后瞬间把第一个team_box放到最后面去,然后把位置改成0的位置;
            //并且关闭当前的这个动画,也将就是还原ifRun;
            $team_banner.animate({"left": "-1100px"}, 1000, "backIn", function () {
                $team_banner.find(".team_box").eq(0).appendTo($team_banner);
                $team_banner.css("left", "0");
                ifRun = false;
                fnRun();

            })

            index++;
            if (index > 2) {
                index = 0
            }
            $points.removeClass("now").eq(index).addClass("now")
        }
        /*向右边移动函数*/
        function toRight() {
            if (ifRun) {
                return;
            }
            ifRun = true;
            clearInterval(timeOut);
            $team_banner.find(".team_box").eq(2).prependTo($team_banner);
            $team_banner.css("left", "-1100px")
            $team_banner.stop().animate({"left": "0px"}, 1000, "backIn", function () {
                ifRun = false;
                fnRun();
            })

            index--;
            if (index < 0) {
                index = 2
            }
            $points.removeClass("now").eq(index).addClass("now")

        }

        /*点击右边按钮是*/
        $_next.click(function () {
            toLeft();
        });


        //点击左边按钮时候
        $_prev.click(function () {
            toRight();
        })

        /*自动轮播执行函数*/
        function fnRun() {
            timeOut = setInterval(function () {
                toLeft();
            }, 3000)
        }

        fnRun();

        /*当鼠标移动到team_box的时候,静止自动轮播,移出后自动轮播*/
        $team_banner.find(".team_box").hover(function () {
            clearInterval(timeOut);
        }, function () {
            fnRun()
        })


    })()


})