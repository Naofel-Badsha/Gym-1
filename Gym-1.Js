



$(document).ready(function(){

   //----Navmenu----Click------item------Active------//
   $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('active');
   });
    //----Navmenu----Click------item------Active------//


$(window).on('scroll load', function(){
   //-----Navmenu-----Scroll------Remove------//
   $('#menu').removeClass('fa-times');
   $('.navbar').removeClass('active');
  //-----Navmenu-----Scroll------Remove------//



   //----Sticky-----------Header----//
     if($(window).scrollTop() > 60){
       $('.header').addClass('active');
     }
   else{
       $('.header').removeClass('active');
      }
       //----Sticky-----------Header----//


       //------Scroll------Active----Navebar--------//
       $('section').each(function(){
           let top = $(window).scrollTop();
           let height = $(this).height();
           let offset = $(this).offset().top - 200;
           let id = $(this).attr('id');
           if(top >= offset && top < offset + height){
              $('.navbar a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
           }
       });
       //------Scroll------Active----Navebar--------//

   });
   });
