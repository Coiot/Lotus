function eventWindowLoaded() {
    add_coloring_book_events()
}

function add_coloring_book_events() {
    $('path[class="colorable"]').bind("click", function(a) {
        a.preventDefault(), click_element = this, click_to_color = $(this).attr("fill"), color_chosen = $("#color_chosen").html(), $(this).attr("fill", color_chosen)
    }), $(".color_choice").bind("click", function(a) {
        color_chosen = $(this).attr("id"), $("#color_chosen").html(color_chosen)
    })
}
window.addEventListener("load", eventWindowLoaded, !1);
var click_element = $('path[class="colorable"]')[0],
    click_to_color = "white";