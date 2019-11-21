// Rack button

$(".rack_1_dropdown").click(function () {
    $("#rackbtn").text("Rack 1");
});
$(".rack_2_dropdown").click(function () {
    $("#rackbtn, h1").text("Rack 2");

});



$(".CR").click(function () {
    $(this).parent().prev().removeClass("netman terminal_server circuit").addClass("core_router");
    $(this).parent().prev().text("CR");
    $(this).closest('.row').find('.rack_image').attr('src',
        'C:/Users/rnikoo/Documents/other_coding/frontend_practise/rack_diagram/images/cr.PNG');
});

$(".NM").click(function () {
    $(this).parent().prev().removeClass("core_router terminal_server circuit").addClass("netman");
    $(this).parent().prev().text("NM");
    $(this).closest('.row').find('.rack_image').attr('src', 'C:/Users/rnikoo/Documents/other_coding/frontend_practise/rack_diagram/images/nm.PNG');
});

$(".ORC").click(function () {
    $(this).parent().prev().removeClass("netman terminal_server core_router").addClass("circuit");
    $(this).parent().prev().text("Circuit");
    $(this).closest('.row').find('.rack_image').attr('src',
        'C:/Users/rnikoo/Documents/other_coding/frontend_practise/rack_diagram/images/adva.PNG');
});


$(".TS").click(function () {
    $(this).parent().prev().removeClass("core_router netman circuit").addClass("terminal_server");
    $(this).parent().prev().text("TS");
    $(this).closest('.row').find('.rack_image').attr('src',
        'C:/Users/rnikoo/Documents/other_coding/frontend_practise/rack_diagram/images/ts2.PNG');
});

// Disable/Enable  rack editing

$("#save").click(function () {
    alert('RACK LAYOUT SAVED');
    $(".dropdown-toggle").addClass("disabled");
    $("#staging, #progress_bar").show();
});

$("#edit").click(function () {
    $(".dropdown-toggle").removeClass("disabled");
});

// Progress bar script 
var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}