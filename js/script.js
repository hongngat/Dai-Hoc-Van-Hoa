$(document).ready(function(){
    // menu
   $(".menu li").hover(function(){
   $(this).find("ul:first").slideDown(500);
   },function(){
        $(this).find("ul:first").hide(500);
   });

   
});

$(window).scroll(function () {
     if ($(window).scrollTop() >= 99) {
         $('#nav-main').addClass('navbar-fixed-top');
     }


     if ($(window).scrollTop() >= 100) {
         $('#nav-main').addClass('show');
     } else {
         $('#nav-main').removeClass('show navbar-fixed-top');
     }
 }); 
