$(document).on("ready", function () {
    $(".pi-button").on("click", function () {
        $(".pi-chat-board-container").addClass("active");
        i = 1;
        animateChat();
    });

    $(".pi-chat-board-header span").on("click", function () {
        $(".pi-chat-board-container").removeClass("active");
        $(".pi-msg-container").removeClass("animated");
        $(".pi-chat-board-body").scrollTop(0);
        $(".chat-msg .my-msg").css("display", "none");
        $(".pi-input-panel").removeClass("need-update");
    });

    $(".pi-input-slider-drag").on("mousedown", function (e) {
        var initialX = e.clientX,
            self = this,
            oldX = parseInt($(self).css("left")),
            width = $(self).prev().width();

        $(document).on("mousemove", function (eve) {
            var offsetX = eve.clientX - initialX,
                newX = oldX + offsetX;
            if (newX > 0 && newX < 195) {
                $(self).css({
                    left: newX
                })
                    .prev()
                    .css({
                        width: width + offsetX
                    });
                $(self).closest(".pi-input-slider")
                    .next()
                    .find("span:nth-child(2)")
                    .text(width + offsetX);
                $(".pi-input-panel").addClass("updated");
            }
        });
    });
    $(document).on("mouseup", function () {
            $(document).off("mousemove");
        });

    $(".unit").on("click", function () {
        $(this).parent()
            .find(".active")
            .removeClass("active");
        $(this).addClass("active");
    });

    $(".footer-msg").on("click", function () {
        if ($(".pi-input-panel").hasClass("updated")) {
            $(".footer-msg").addClass("moveto");
            setTimeout(function () {
                $(".footer-msg").hide()
                    .removeClass("moveto");
                $(".chat-msg .my-msg").css("display", "inline-block");
            }, 500);
        }
        else {
            $(".pi-input-panel").addClass("need-update");
        }
    })
});
var i;
function animateChat() {
    var count = $(".pi-msg-container").length;
    if (i <= count) {
        setTimeout(function () {
            $(".pi-msg-container:nth-child(" + i + ")")
                .addClass("animated");
            i == 3 && $(".pi-chat-board-body").animate({scrollTop: 200}, 500);
            i++;
            animateChat();
        }, i * 300);
    }
    else {
        $(".footer-msg").show();
    }
}
