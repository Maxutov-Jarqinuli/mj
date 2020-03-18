$(document).ready(function() {
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    try {
        // var myFullpage = new fullpage('#fullpage', {
        //     anchors: ['main', 'calculator'],
        //     navigation: true,
        //     navigationPosition: 'right',
        //     navigationTooltips: ['Main', 'Calculator'],
        //     responsiveWidth: 900,
        //     scrollOverflow: true,
        //     afterResponsive: function(isResponsive){
        //     }
        // });
    } catch(e) {
        console.log(e)
    }

    try {
        var widgetOptions268521 = { bg_color: "transparent" }; 
        (function() { 
            var a = document.createElement("script"), h = "head"; 
            a.async = true; 
            a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=268521&t="+Math.floor(new Date()/18e5); 
            document.getElementsByTagName(h)[0].appendChild(a) 
        })();
    } catch(e) {
        console.log(e);
    }
});