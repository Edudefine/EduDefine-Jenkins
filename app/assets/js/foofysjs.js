


// ================= process ======================
 var nav = {
    trigger: ".menu-button",
    wrap: ".mast-head",
    init: function(){
        nav.bind();
    },
    bind: function(){
        $(document).on("click",nav.trigger,nav.open)

        $(document).on("click","#nav a", function(e){
            e.preventDefault();

            console.log($("body").css("right"));
            console.log(parseInt($("body").css("right")));

            if (parseInt($("body").css("right")) > 0) {
                $("body").removeClass("open");
            }

            $(window).scrollTo($(this).attr("href"),500);
        });

        $(document).on("click",".mast-head .logo", function(e){
            e.preventDefault();

            $(window).scrollTo(0,750);
        });
    },
    open: function(e){
        e.preventDefault();
        var target = "#faction";


        if ($("body").is(".open")) {
            $("body").removeClass("open");
        } else {
            if ($(window).scrollTop() < $("#splash").height()) {
                $(window).scrollTo(target, 500);
            }
            $("body").addClass("open");
        }

    }
}

var faction = {
    trigger: ".js-activate",
    init: function(){
        faction.bind();
    },
    bind: function(){
        //$(document).on("click",faction.trigger,faction.toggle);
        $(window).scroll(function(){
            $(faction.trigger).each(function() {
                faction.scrollTest(this);
            });
        });
    },
    scrollTest: function(el){
        if ($(el).offset().top < $(window).scrollTop()+$(window).height()-200) {
            faction.activate(el);
        } else {
            faction.deactivate(el);
        }
    },
    activate: function(el){
        $(el).addClass("activated");
    },
    deactivate: function(el){
        $(el).removeClass("activated");
    },
    toggle: function(el){
        $(this).toggleClass("activated");
    }

}

var bar = {
    el: ".process-gem",
    init: function(){
        bar.bind();
    },
    bind: function(){
        $(window).scroll(function(){
            bar.check();
        });
    },
    check: function(){
        $(bar.el).each(function(){
            if ($(this).offset().top < $(window).scrollTop()+$(window).height()-200) {
                $(this).closest("li").addClass("active").find(".bar").addClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
                $(this).closest("li").removeClass("active").find(".bar").removeClass("active");
            }
        });
    }
}

var parallax = {
    init: function(){
        parallax.bind();
    },
    bind: function(){
        $(window).scroll(parallax.run);
    },
    run: function(){
        var scrolled = $(window).scrollTop();

        if (scrolled < 400) {
            $(".js-parallax").each(function(){
                var moveTo = $(this).attr("data-400")*(scrolled/400)
                $(this).css({
                    top: moveTo
                });
            });
        }
    }

}

$(document).ready(function(){
    nav.init();

    if (!Modernizr.touch) {
        parallax.init();
    }

    faction.init();

    bar.init();

});


