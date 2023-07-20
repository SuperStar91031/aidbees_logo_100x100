var modal = document.getElementById('myModal');
modal.backdrop = "static";
modal.keyboard = false;

$(".theme1 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme1 .theme-icon").css("background-color", "#70bbe8");
    else
    $(".theme1 .theme-icon").css("background-color", "#bebebe");
})

$(".theme2 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme2 .theme-icon").css("background-color", "#f2748d");
    else
    $(".theme2 .theme-icon").css("background-color", "#bebebe");
})

$(".theme3 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme3 .theme-icon").css("background-color", "#1aafbd");
    else
    $(".theme3 .theme-icon").css("background-color", "#bebebe");
})


$(".theme4 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme4 .theme-icon").css("background-color", "#c4da56");
    else
    $(".theme4 .theme-icon").css("background-color", "#bebebe");
})
$(".theme5 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme5 .theme-icon").css("background-color", "#f3e37b");
    else
    $(".theme5 .theme-icon").css("background-color", "#bebebe");
})
$(".theme6 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme6 .theme-icon").css("background-color", "#f6a4b1");
    else
    $(".theme6 .theme-icon").css("background-color", "#bebebe");
})


$(".theme7 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme7 .theme-icon").css("background-color", "#aece41");
    else
    $(".theme7 .theme-icon").css("background-color", "#bebebe");
})


$(".theme8 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme8 .theme-icon").css("background-color", "#5090c9");
    else
    $(".theme8 .theme-icon").css("background-color", "#bebebe");
})

$(".theme9 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme9 .theme-icon").css("background-color", "#73ccd5");
    else
    $(".theme9 .theme-icon").css("background-color", "#bebebe");
})
$(".theme10 input[type=checkbox]").click(function(){
    if(this.checked)
    $(".theme10 .theme-icon").css("background-color", "#dce575");
    else
    $(".theme10 .theme-icon").css("background-color", "#bebebe");
})




var myScroll = $(".rightfix").height();
var win = $(window).height();
if (myScroll > win ) {
    $("#rightDivScroll").addClass("rightBottom");
}


if ($(window).width() > 1800) {
    $(".right-fix #rightBottom").attr("id", "newID");
}


$(".all-icon").click(function () {
    $(".all-icon").addClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-1").click(function () {
    $(this).css("background-color", "#70bbe8");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-2").click(function () {
    $(this).css("background-color", "#f2748d");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-3").click(function () {
    $(this).css("background-color", "#1aafbd");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-4").click(function () {
    $(this).css("background-color", "#c4da56");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-5").click(function () {
    $(this).css("background-color", "#f3e37b");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-6").click(function () {
    $(this).css("background-color", "#f6a4b1");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-7,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-7").click(function () {
    $(this).css("background-color", "#aece41");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-8,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-8").click(function () {
    $(this).css("background-color", "#5090c9");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-9,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-9").click(function () {
    $(this).css("background-color", "#73ccd5");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-10").css("background-color", "#bebebe");
});
$(".theme-icon-10").click(function () {
    $(this).css("background-color", "#dce575");
    $(".all-icon").removeClass("active-all");
    $(".theme-icon-1,.theme-icon-2,.theme-icon-3,.theme-icon-4,.theme-icon-5,.theme-icon-6,.theme-icon-7,.theme-icon-8,.theme-icon-9").css("background-color", "#bebebe");
});
$(".all-tab").click(function () {
    $(".all-tab").addClass("active-postTab");
    $(".postTab-1,.postTab-2,.postTab-3,.postTab-4").removeClass("active-postTab");
    
});
$(".postTab-1").click(function () {
    $(".all-tab,.postTab-2,.postTab-3,.postTab-4").removeClass("active-postTab");
    $(this).addClass("active-postTab");
    
});
$(".postTab-2").click(function () {
    $(".all-tab,.postTab-1,.postTab-3,.postTab-4").removeClass("active-postTab");
    $(this).addClass("active-postTab");
    
});
$(".postTab-3").click(function () {
    $(".all-tab,.postTab-1,.postTab-2,.postTab-4").removeClass("active-postTab");
    $(this).addClass("active-postTab");
    
});
$(".postTab-4").click(function () {
    $(".all-tab,.postTab-1,.postTab-2,.postTab-3").removeClass("active-postTab");
    $(this).addClass("active-postTab");
    
});
 
  $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });




 $(".icons-row .icon-education").click(function () {
    $(this).toggleClass("education-active");
    $(".icon-education .red-dot").toggle();
});
 
 $(".postOpen").click(function () {
     $(".postOpen-overlay").fadeIn();
     $('.postModal-slider').resize();
 });
 $(".cross").click(function () {
     $(".postOpen-overlay").fadeOut();
 });
 $(".ngo-form").hide();
 $(".ngo-tab").click(function () {
     $(".user-form").hide();
     $(".ngo-form").show();
     $(".user-tab").removeClass("active");
     $(this).addClass("active");
 });
 $(".user-tab").click(function () {
     $(".user-form").show();
     $(".ngo-form").hide();
     $(".ngo-tab").removeClass("active");
     $(this).addClass("active");
 });
 $(".toggleBtn").click(function () {
     $(".side-menu").removeClass("menu-close");
     $(".side-menu").addClass("menu-open")
     $(".overlay-cover").fadeIn();
     $(".side-menu").css("top", "0");
 });
 $(".menuCloseBtn").click(function () {
     $(".side-menu").addClass("menu-close");
     $(".side-menu").removeClass("menu-open");
     $(".overlay-cover").fadeOut();
 });
 $(".overlay-cover").click(function () {
     $(".side-menu").addClass("menu-close");
     $(".side-menu").removeClass("menu-open");
     $(".overlay-cover").fadeOut();
 });
 $(".share-btn").mouseover(function () {
     $(".share-box").css("display", "block");
 });
 $(".modal-body").mouseleave(function () {
     $(".share-box").css("display", "none");
 });

 $(".ngo-about-header .toggle").click(function () {
    $(".about-side-menu").addClass("about-side-menuOpen");
    $(".overlay-cover").fadeIn();
});
$(".aboutMenuCloseBtn").click(function () {
    $(".about-side-menu").removeClass("about-side-menuOpen");
    $(".overlay-cover").fadeOut();
});
$(".overlay-cover").click(function () {
    $(".about-side-menu").removeClass("about-side-menuOpen");
    $(".overlay-cover").fadeOut();
});

 $(window).scroll(function () {
     if ($(window).scrollTop() > 100) {
         $(".side-menu").addClass("side-menu-scroll");
         $(".side-menu").css("top", "inherit");
     } else {
         $(".side-menu").removeClass("side-menu-scroll");
     }
 });
 $(".more-menu-open").click(function (event) {
     event.stopPropagation();
     $(".hidden-menus").fadeToggle()
 });
 $(window).scroll(function () {
     if ($(window).scrollTop() > 650) {
         $(".tabs-scroll").addClass("tabs-sticky");
     } else {
         $(".tabs-scroll").removeClass("tabs-sticky");
     }
 });
 $(window).scroll(function () {
     if ($(window).scrollTop() > 150) {
         $(".donate-fix").fadeIn();
     } else {
         $(".donate-fix").fadeOut();
     }
 });
 $(window).scroll(function () {
     var winTop = $(this).scrollTop(),
         winBottom = winTop + $(this).height(),
         left = $('.rightBottom'),
         rightBottom = left.height();
     //when the user reached the bottom of '#leftShort' set its position to fixed to prevent it from moving on scroll
     if (winBottom >= rightBottom) {
         left.css({
             'position': 'fixed',
             'bottom': '0px',
         });
     } else {
         //when the user scrolls back up revert its position to relative
         left.css({
            'position': 'relative',
             'bottom': '0px',
             'padding-bottom': '20px',
         });
     }
 });
 $(document).ready(function () {
     $('[data-toggle="tooltip"]').tooltip();
 });
 $(".all-icon").click(function () {
     $(this).addClass("active-all");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
 });
 $(".icons-inner .icon-education").click(function () {
     $(this).addClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-health").click(function () {
     $(this).addClass("health-active");
     $(".icon-education").removeClass("education-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon_Livelihood").click(function () {
     $(this).addClass("livelihood-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Disability").click(function () {
     $(this).addClass("disability-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Children").click(function () {
     $(this).addClass("children-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Women").click(function () {
     $(this).addClass("women-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Enviornment").click(function () {
     $(this).addClass("enviornment-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Disaster_management").click(function () {
     $(this).addClass("disaster-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Community-development").click(function () {
     $(this).addClass("community-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Research").removeClass("research-active");
     $(".all-icon").removeClass("active-all");
 });
 $(".icons-inner .icon-Research").click(function () {
     $(this).addClass("research-active");
     $(".icon-education").removeClass("education-active");
     $(".icon-health").removeClass("health-active");
     $(".icon_Livelihood").removeClass("livelihood-active");
     $(".icon-Disability").removeClass("disability-active");
     $(".icon-Children").removeClass("children-active");
     $(".icon-Women").removeClass("women-active");
     $(".icon-Enviornment").removeClass("enviornment-active");
     $(".icon-Disaster_management").removeClass("disaster-active");
     $(".icon-Community-development").removeClass("community-active");
     $(".all-icon").removeClass("active-all");
 });

 $("#selectThemeModal .icon-education").click(function () {
     $(this).toggleClass("education-active");
     $(".icon-education .red-dot").toggle();
 });

 $("#selectThemeModal .icon-health").click(function () {
     $(this).toggleClass("health-active");
     $(".icon-health .red-dot").toggle();
 });
 $("#selectThemeModal .icon_Livelihood").click(function () {
     $(this).toggleClass("livelihood-active");
     $(".icon_Livelihood .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Disability").click(function () {
     $(this).toggleClass("disability-active");
     $(".icon-Disability .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Children").click(function () {
     $(this).toggleClass("children-active");
     $(".icon-Children .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Women").click(function () {
     $(this).toggleClass("women-active");
     $(".icon-Women .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Enviornment").click(function () {
     $(this).toggleClass("enviornment-active");
     $(".icon-Enviornment .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Disaster_management").click(function () {
     $(this).toggleClass("disaster-active");
     $(".icon-Disaster_management .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Community-development").click(function () {
     $(this).toggleClass("community-active");
     $(".icon-Community-development .red-dot").toggle();
 });
 $("#selectThemeModal .icon-Research").click(function () {
     $(this).toggleClass("research-active");
     $(".icon-Research .red-dot").toggle();
 });
 $(".arrow-mob-btn2").click(function () {
     $(this).toggleClass("transform180");
     $(".mob-volunteerNowModal").toggle();
 });
 $(".arrow-mob-btn").click(function () {
     $(this).toggleClass("transform180");
     $(".ngo-top-icons").toggle();
     $(".ngo-middle").toggleClass("ngo-middle-mob-margin");
     $(".donate-middle").toggleClass("donate-middle-mob-margin");
     $(".donate-middle-inner").toggleClass("donate-middle-mob-margin");
 });
 $(".fa-heart").click(function () {
     $(this).toggleClass("highlight-icon");
 });
 $(".mob-dropdowns").click(function () {
     $(".top-tabs").addClass("top-tabs-expand ");
 });
 $(document).click(function () {
     $(".top-tabs").removeClass("top-tabs-expand ");
 });
 $(".opportunities-btn").click(function () {
     $(".existingOpportunities").slideToggle();
 });


// NGO-Registration-process4.html

 $(".icons-row .icon-education").click(function () {
    $(this).toggleClass("education-active");
    $(".icon-education .red-dot").toggle();
});

$(".icons-row .icon-health").click(function () {
    $(this).toggleClass("health-active");
    $(".icon-health .red-dot").toggle();
});
$(".icons-row .icon_Livelihood").click(function () {
    $(this).toggleClass("livelihood-active");
    $(".icon_Livelihood .red-dot").toggle();
});
$(".icons-row .icon-Disability").click(function () {
    $(this).toggleClass("disability-active");
    $(".icon-Disability .red-dot").toggle();
});
$(".icons-row .icon-Children").click(function () {
    $(this).toggleClass("children-active");
    $(".icon-Children .red-dot").toggle();
});
$(".icons-row .icon-Women").click(function () {
    $(this).toggleClass("women-active");
    $(".icon-Women .red-dot").toggle();
});
$(".icons-row .icon-Enviornment").click(function () {
    $(this).toggleClass("enviornment-active");
    $(".icon-Enviornment .red-dot").toggle();
});
$(".icons-row .icon-Disaster_management").click(function () {
    $(this).toggleClass("disaster-active");
    $(".icon-Disaster_management .red-dot").toggle();
});
$(".icons-row .icon-Community-development").click(function () {
    $(this).toggleClass("community-active");
    $(".icon-Community-development .red-dot").toggle();
});
$(".icons-row .icon-Research").click(function () {
    $(this).toggleClass("research-active");
    $(".icon-Research .red-dot").toggle();
});
 


 $('.ngo-slider').slick({
    dots: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
            }
        }
    ]
});

 $('.partners-slider').slick({
    dots: false,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    variableWidth:true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 
            }
        }
    ]
});

$('.products-slider').slick({
    dots: false,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});
$('.recent-slider').slick({
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.testimoni-slider').slick({
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.postModal-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    variableWidth: true,
    centerMode: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                variableWidth: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                variableWidth: false,
            }
        }
    ]
});


$('.howitWorks-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            variableWidth: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            variableWidth: false,
        }
    },
    {
        breakpoint: 480,
        settings: {
            arrows: false,
            variableWidth: false,
        }
    }
]
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.add').click(function () {		
    var th = $(this).closest('.wrap').find('.count');    	
    th.val(+th.val() + 1);
  });
  $('.sub').click(function () {
    var th = $(this).closest('.wrap').find('.count');    	
          if (th.val() > 1) th.val(+th.val() - 1);
  });
  
  $('#parentHorizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: 'hor_1', // The tab groups identifier
    activate: function(event) { // Callback function if tab is switched
        var $tab = $(this);
        var $info = $('#nested-tabInfo');
        var $name = $('span', $info);
        $name.text($tab.text());
        $info.show();
    }
});

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var checkin = $('#dp1').datepicker({
   beforeShowDay: function (date) {
      return date.valueOf() >= now.valueOf();
   },
   autoclose: true
}).on('changeDate', function (ev) {
   if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate")
      .valueOf()) {
      var newDate = new Date(ev.date);
      newDate.setDate(newDate.getDate() + 1);
      checkout.datepicker("update", newDate);
   }
   $('#dp2')[0].focus();
});
var checkout = $('#dp2').datepicker({
   beforeShowDay: function (date) {
      if (!checkin.datepicker("getDate").valueOf()) {
         return date.valueOf() >= new Date().valueOf();
      } else {
         return date.valueOf() > checkin.datepicker("getDate").valueOf();
      }
   },
   autoclose: true
}).on('changeDate', function (ev) {});