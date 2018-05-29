$(document).ready(function(){
    $("#nav_buttom_menu").data("view", "hide");
    $("#header_nav").removeClass("phone_show");
    $("#nav_dark").removeClass("nav_dark_show");
    $("#nav_buttom_menu").click(function(){
        if($("#nav_buttom_menu").data("view") == "hide"){
            $("#nav_buttom_menu").data("view", "show");
            $("#header_nav").addClass("phone_show");
            $("#nav_dark").addClass("nav_dark_show");
        }else if($("#nav_buttom_menu").data("view") == "show"){
            $("#nav_buttom_menu").data("view", "hide");
            $("#header_nav").removeClass("phone_show");
            $("#nav_dark").removeClass("nav_dark_show");
        }
    });
});