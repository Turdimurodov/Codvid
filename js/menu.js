$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.terror').toggleClass('nav-toggle');
    });

    $(window).on ('load scroll' ,function (){
        $('#menu').remove('fa-times');
        $('.terror').remove('nav-toggle');

        if($().scrollTop() >0 ){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
        if($(window).scrollTop() >0 ){
            $('scroll-top').show();
        }else{
            $('scroll-top').hide();
        }

        $('section').each(function(){
            let top =(window).scrolltop();
            let offset =$(this).offset().top-200;
            let id =$(this).attr('id');
            let height =$(this).height();

            if(top > offset && top <offset + height) {
                $('.terror a') .removeClass('active');
                $('.terror ') .find('[href="#${id}"]') .addClass('active');
            }

        });
    });

    $ ('a[href*="#"]').on ('click',function(e) {
        $('html, body') .animate ({
            scrollTop :$ ($(this).attr('href')).offset().top,
        },
        500,
        `linear`        
        );
    });
    
});
const terror =document.getElementById("terror");

let a = true;

const show = () => {
    if(a) {
        terror.classList.add("terrorshow");
    }
    else{
        terror.classList.remove("terrorshow");
    }
    a = !a;
}