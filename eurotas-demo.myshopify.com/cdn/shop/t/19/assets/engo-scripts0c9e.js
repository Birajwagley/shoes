$(document).ready(function(){"use strict";function newsLetterPopup(){var link="";(!jQuery.cookie("eurotas_popup")||jQuery.cookie("eurotas_popup")==null)&&jQuery(window).load(function(){setTimeout($(".js-popup-newsletter").removeClass("d-none"),300*1e3),$(".js-popup-newsletter .js-close-popup, .js-popup-newsletter .js-bg-overlay-newsletter").click(function(e){$(".js-form-check-input").prop("checked")&&(e.preventDefault(),jQuery.cookie("eurotas_popup","1",{expires:1,path:"/",domain:link})),$(".js-popup-newsletter").addClass("d-none")})})}function headerFixedMobile(){$(window).width()<1200?($(".menu-mobile").css({position:"fixed",top:"0",left:"0",right:"0","z-index":"99"}),$(".js-header-mobile").css({"padding-top":function(){return $(".menu-mobile").height()+"px"}})):$(".js-header-mobile").css({"padding-top":""}),$(window).resize(function(){$(window).width()<1200?($(".menu-mobile").css({position:"fixed",top:"0",left:"0",right:"0","z-index":"99"}),$(".js-header-mobile").css({"padding-top":function(){return $(".menu-mobile").height()+"px"}})):$(".js-header-mobile").css({"padding-top":""})})}function slideMenuMobile(){$(".js-btn-menu-mobile").on("click",function(){$(".js-menu-mobile").toggleClass("active"),$(".js-background-overlay").toggleClass("active"),$(".js-menu-content").toggleClass("active"),$(".menu-mobile-close").toggleClass("active"),$(this).toggleClass("active")}),$(".js-background-overlay").on("click",function(){$(this).removeClass("active"),$(".js-menu-mobile").removeClass("active"),$(".js-menu-content").removeClass("active"),$(".menu-mobile-close").removeClass("active"),$(".js-btn-menu-mobile").removeClass("active")}),$(".js-btn-menu-nav").on("click",function(){$(".js-menu-content").addClass("active"),$(this).addClass("active"),$(".js-btn-login").removeClass("active"),$(".js-account-login").removeClass("active")}),$(".js-btn-login").on("click",function(){$(".js-account-login").addClass("active"),$(this).addClass("active"),$(".js-btn-menu-nav").removeClass("active"),$(".js-menu-content").removeClass("active"),$(".js-custom-login").removeClass("d-none")}),$(window).resize(function(){$(window).width()>=1200&&($(".js-menu-mobile").removeClass("active"),$(".js-background-overlay").removeClass("active"),$(".js-menu-content").removeClass("active"),$(".menu-mobile-close").removeClass("active"),$(this).removeClass("active"))})}function verticalMenu(){$(".js-btn-pushmenu").on("click",function(){$(".js-vertical-tab").toggleClass("active"),$(".js-bg-overlay-vertical").toggleClass("active"),$(".js-close-vertical").toggleClass("active")}),$(".js-bg-overlay-vertical").on("click",function(){$(this).removeClass("active"),$(".js-vertical-tab").removeClass("active"),$(".js-close-vertical").removeClass("active")}),$(".js-close-vertical").on("click",function(){$(this).removeClass("active"),$(".js-vertical-tab").removeClass("active"),$(".js-bg-overlay-vertical").removeClass("active")}),$(window).resize(function(){$(window).width()<1200&&($(".js-vertical-tab").removeClass("active"),$(".js-bg-overlay-vertical").removeClass("active"),$(this).removeClass("active"))})}function slideMobileSearch(){$(".js-menu-mobile-search").on("click",function(){$(".js-mobile-search").toggleClass("active")}),$(".js-close-mobile-search").on("click",function(){$(".js-mobile-search").removeClass("active")})}function slideMiniCart(){$(".js-minicart").on("click",function(){$(".js-minicart-content").addClass("active"),$(".js-bg-minicart").addClass("active")}),$(".js-minicart-close").on("click",function(){setTimeout(function(){$(".js-minicart-content").removeClass("active"),$(".js-bg-minicart").removeClass("active")})}),$(".js-bg-minicart").on("click",function(){$(this).removeClass("active"),$(".js-minicart-content").removeClass("active")})}function switchDropAngle(){$(".toggle-tab-title").on("click",function(){$(this).toggleClass("active")})}function switchDropAngleMenu(){$(".menu-link").on("click",function(){$(this).toggleClass("active")})}function switchLoginRegisterForm(){$(".js-back-to-login").on("click",function(){$(".js-custom-login").removeClass("d-none"),$(".js-custom-login-res").addClass("d-none")}),$(".js-create-an-account").on("click",function(){$(".js-custom-login-res").removeClass("d-none"),$(".js-custom-login").addClass("d-none")})}function menuDesktopScroll(){var $nav=$(".js-header");$nav.removeClass("menu-scroll-v1"),$(document).scroll(function(){$nav.toggleClass("menu-scroll-v1",$(this).scrollTop()>$nav.height())})}function slideShowV1(){var $status=$(".pagingInfo"),$slickElement=$(".js-slideshow-v1");$slickElement.on("init reInit afterChange",function(event,slick,currentSlide,nextSlide){var i=(currentSlide||0)+1;$status.html("<span>0"+i+"</span>0"+slick.slideCount)}),$(".js-slideshow-v1").on("afterChange",function(event,slick,currentSlide){$(".slick-active").append('<div class="pagingInfo"')}),$(".js-slideshow-v1").slick({dots:!0,arrows:!0,autoplay:!1,autoplaySpeed:5e3,fade:!0,infinite:!0,prevArrow:'<button type="button" class="slideshow-arrow slick-slide-prev lnr lnr-arrow-left"></button>',nextArrow:'<button type="button" class="slideshow-arrow slick-slide-next lnr lnr-arrow-right"></button>',adaptiveHeight:!0,customPaging:function(slider,i){var thumb=$(slider.$slides[i]).data();return'<a class="d-none d-lg-block">0'+(i+1)+"</a>"}}),$(".js-slideshow-v1 .slideshow-content").eq(0).addClass("active"),$(".js-slideshow-v1 .slider-img").eq(0).addClass("active"),$(".js-slideshow-v1 .button-name").eq(0).addClass("active"),$(".js-slideshow-v1").on("beforeChange",function(event,slick,currentSlide,nextSlide){var mySlideNumber=nextSlide,prev=currentSlide;$(".js-slideshow-v1 .slideshow-content").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v1 .slider-img").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v1 .button-name").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v1 .slideshow-content").eq(prev).removeClass("active"),$(".js-slideshow-v1 .slider-img").eq(prev).removeClass("active"),$(".js-slideshow-v1 .button-name").eq(prev).removeClass("active")})}function slideShowV2(){$(".js-slideshow-v2").slick({dots:!1,arrows:!0,autoplay:!1,autoplaySpeed:5e3,fade:!0,dots:!0,prevArrow:'<button type="button" class="slideshow-arrow slick-slide-prev lnr lnr-arrow-left"></button>',nextArrow:'<button type="button" class="slideshow-arrow slick-slide-next lnr lnr-arrow-right"></button><div class="pagination next "><div class="paging-next"></div><span class="lnr lnr-chevron-right"></span>',adaptiveHeight:!0,responsive:[{breakpoint:1200,settings:{dots:!0,arrows:!1}}]});var maxSlide=$(".js-slideshow-v2 .slick-slide").size(),a=parseInt($(".js-slideshow-v2").find(".slick-active").attr("data-slick-index")),x=a-1,y=a+1,d=$(".js-slideshow-v2 .slick-slide").eq(x).find("img").attr("src");$(".paging-prev").attr("style","background-image:url("+d+")");var e=$(".js-slideshow-v2 .slick-slide").eq(y).find("img").attr("src");$(".paging-next").attr("style","background-image:url("+e+")"),$(".js-slideshow-v2").on("afterChange",function(event,slick,currentSlide,nextSlide){var a2=parseInt($(".js-slideshow-v2").find(".slick-active").attr("data-slick-index")),x2=a2-1,y2=a2+1;if(y2==maxSlide)var y2=0;var d2=$(".js-slideshow-v2 .slick-slide").eq(x2).find("img").attr("src");$(".paging-prev").attr("style","background-image:url("+d2+")");var e2=$(".js-slideshow-v2 .slick-slide").eq(y2).find("img").attr("src");$(".paging-next").attr("style","background-image:url("+e2+")")}),$(".js-slideshow-v2 .slide-info").eq(0).addClass("active"),$(".js-slideshow-v2 .img-slider img").eq(0).addClass("active"),$(".js-slideshow-v2").on("beforeChange",function(event,slick,currentSlide,nextSlide){var mySlideNumber=nextSlide,prev=currentSlide;$(".js-slideshow-v2 .slide-info").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v2 .img-slider img").eq(mySlideNumber).addClass("active"),$(".section-slideshow-v2 .slide-info").eq(prev).removeClass("active"),$(".js-slideshow-v2 .img-slider img").eq(prev).removeClass("active")}),$(".pagination.next").on("click",function(){$(".slideshow-arrow slick-slide-next").click()})}function slideShowV3(){var $status=$(".pagingInfo"),$slickElement=$(".js-slideshow-v3");$slickElement.on("init reInit afterChange",function(event,slick,currentSlide,nextSlide){var i=(currentSlide||0)+1;$status.html("<span>0"+i+"</span>0"+slick.slideCount)}),$(".js-slideshow-v3").on("afterChange",function(event,slick,currentSlide){$(".slick-active").append('<div class="pagingInfo"')}),$(".js-slideshow-v3").slick({dots:!0,arrows:!1,autoplay:!1,autoplaySpeed:5e3,fade:!0,infinite:!0,adaptiveHeight:!0,customPaging:function(slider,i){var thumb=$(slider.$slides[i]).data();return'<a class="d-none d-lg-block">0'+(i+1)+"</a>"}}),$(".js-slideshow-v3 .slideshow-content").eq(0).addClass("active"),$(".js-slideshow-v3 .slider-img").eq(0).addClass("active"),$(".slider-v3 .paginate span").eq(0).addClass("active"),$(".js-slideshow-v3").on("beforeChange",function(event,slick,currentSlide,nextSlide){var mySlideNumber=nextSlide,prev=currentSlide;$(".slider-v3 .paginate span").removeClass("active"),$(".slider-v3 .paginate span").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v3 .slideshow-content").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v3 .slider-img").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v3 .slideshow-content").eq(prev).removeClass("active"),$(".js-slideshow-v3 .slider-img").eq(prev).removeClass("active")}),$(window).width()>1199&&$(".section-slideshow-v3").on("mousemove",function(event){var left=event.clientX,top=event.clientY;$(".js-effect-v3").each(function(){var top1=$(".js-effect-v3").position().top,left1=$(".js-effect-v3").position().left;$(".js-effect-v3").find("img").css("transform",function(){var x=-(left-left1)/40,y=-(top-top1)/40;return"translate("+x+"px,"+y+"px)"})})})}function slideShowV4(){$(".js-slideshow-v4").slick({dots:!1,fade:!0,arrows:!0,speed:300,autoplay:!1,adaptiveHeight:!0,prevArrow:'<button type="button" class="slideshow-arrow slick-slide-prev lnr lnr-arrow-left"></button>',nextArrow:'<button type="button" class="slideshow-arrow slick-slide-next lnr lnr-arrow-right"></button>',asNavFor:".js-slideshow-thumb"}),$(".js-slideshow-thumb").slick({slidesToShow:1,slidesToScroll:1,fade:!0,speed:1e3,asNavFor:".js-slideshow-v4",dots:!1,arrows:!1,focusOnSelect:!0}),$(".js-slideshow-v4 .slider-info").eq(0).addClass("active"),$(".js-slideshow-v4 .slider-img img").eq(0).addClass("active"),$(".js-slideshow-thumb .banner-item img").eq(0).addClass("active"),$(".js-slideshow-v4").on("beforeChange",function(event,slick,currentSlide,nextSlide){var mySlideNumber=nextSlide,prev=currentSlide;$(".js-slideshow-v4 .slider-info").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v4 .slider-img img").eq(mySlideNumber).addClass("active"),$(".js-slideshow-thumb .banner-item img").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v4 .slider-info").eq(prev).removeClass("active"),$(".js-slideshow-v4 .slider-img img").eq(prev).removeClass("active"),$(".js-slideshow-thumb .banner-item img").eq(prev).removeClass("active")})}function slideShowV5(){$(".js-slideshow-v5").slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:5e3,fade:!0,infinite:!0,arrows:!0,dots:!0,prevArrow:'<button type="button" class="slideshow-arrow slick-slide-prev lnr lnr-arrow-left"></button>',nextArrow:'<button type="button" class="slideshow-arrow slick-slide-next lnr lnr-arrow-right"></button>',adaptiveHeight:!0,responsive:[{breakpoint:992,settings:{dots:!0,arrows:!1}}]}),$(".js-slideshow-v5 .box-slide-info").eq(0).addClass("active"),$(".js-slideshow-v5 .img-slider img").eq(0).addClass("active"),$(".js-slideshow-v5").on("beforeChange",function(event,slick,currentSlide,nextSlide){var mySlideNumber=nextSlide,prev=currentSlide;$(".js-slideshow-v5 .box-slide-info").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v5 .img-slider img").eq(mySlideNumber).addClass("active"),$(".js-slideshow-v5 .box-slide-info").eq(prev).removeClass("active"),$(".js-slideshow-v5 .img-slider img").eq(prev).removeClass("active")})}function testimonialV1(){$(".js-testimonial-v1").slick({dots:!0,arrows:!1,autoplay:!1,adaptiveHeight:!0})}function testimonialAboutUS(){$(".js-testimonial-aboutus").slick({autoplay:!1,slidesToShow:4,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]})}function slideShowSidebarCollection(){$(".js-slideshow-collection").slick({dots:!0,arrows:!1,autoplay:!1,adaptiveHeight:!0})}function FilterSidebarColecllectionInRight(){$(".js-filter").on("click",function(){$(".js-sidebar-mobile").addClass("active"),$(this).addClass("d-none"),$(".js-close-filter").toggleClass("d-block"),$(".js-bg-filter").addClass("active")}),$(".js-close-filter").on("click",function(){$(this).addClass("d-none"),$(this).removeClass("d-block"),$(".js-filter").removeClass("d-none"),$(".js-sidebar-mobile").removeClass("active"),$(".js-bg-filter").removeClass("active")}),$(".js-bg-filter").on("click",function(){$(this).removeClass("active"),$(".js-sidebar-mobile").removeClass("active"),$(".js-close-filter").removeClass("active"),$(this).removeClass("d-block")}),$(window).resize(function(){$(window).width()>1024&&$(".js-close-filter").click()})}function brandV1(){$(".js-brand-v1").slick({arrows:!0,infinite:!0,autoplay:!1,slidesToShow:5,slidesToScroll:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="brand-arrow slick-brand-prev lnr lnr-arrow-left"></button>',nextArrow:'<button type="button" class="brand-arrow slick-brand-next lnr lnr-arrow-right"></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:2,arrows:!1,dots:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,arrows:!1,dots:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1,dots:!0}}]})}function slideCountdown(){$(".js-quick-view").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dot:!1,fade:!0,infinite:!1,asNavFor:".js-product-countdown"}),$(".js-product-countdown").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".js-quick-view",dots:!1,arrows:!0,infinite:!1,vertical:!0,verticalSwiping:!0,focusOnSelect:!0,prevArrow:'<button type="button" class="slick-brand-prev ti-angle-up"></button>',nextArrow:'<button type="button" class="slick-brand-next ti-angle-down"></button>',responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1,vertical:!1,arrows:!1,verticalSwiping:!1}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,vertical:!1,arrows:!1,verticalSwiping:!1}}]}),$(".section-countdown-v2 .js-countdown-info").eq(0).addClass("active"),$(".js-quick-view").on("beforeChange",function(event,slick,currentSlide,nextSlide){var mySlideNumber=nextSlide;$(".section-countdown-v2 .js-countdown-info").removeClass("active"),$(".section-countdown-v2 .js-countdown-info").eq(mySlideNumber).addClass("active")})}function productItem(){$(".product-item-v1").each(function(){var id=$(this).attr("id"),id1="#"+id+" .js-mid-bt",id2="#"+id+" .js-product-thumbnail-bt";$(id1).hasClass("slick-slider")&&$(id1).slick("unslick"),$(id2).hasClass("slick-slider")&&$(id2).slick("unslick"),$(id1).slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:id2}),$(id2).slick({slidesToShow:3,slidesToScroll:1,arrows:!0,asNavFor:id1,dots:!1,focusOnSelect:!0,prevArrow:'<i class="slick-product-prev lnr lnr-chevron-left"></i>',nextArrow:'<i class="slick-product-next lnr lnr-chevron-right"></i>',responsive:[{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1}}]})})}function productItem2(){$(".product-item-v3").each(function(){var id=$(this).attr("id"),id1="#"+id+" .js-mid",id2="#"+id+" .js-product-thumbnail";$(id1).hasClass("slick-slider")&&$(id1).slick("unslick"),$(id2).hasClass("slick-slider")&&$(id2).slick("unslick"),$(id1).slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:id2}),$(id2).slick({slidesToShow:3,slidesToScroll:1,arrows:!0,asNavFor:id1,dots:!1,vertical:!0,verticalSwiping:!0,focusOnSelect:!0,prevArrow:'<i class="slick-product-prev lnr lnr-chevron-up"></i>',nextArrow:'<i class="slick-product-next lnr lnr-chevron-down"></i>',responsive:[{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,vertical:!1,verticalSwiping:!1}}]})})}function selectStyleCollection(){$(".js-select-style").children().each(function(){$(this).hasClass("active")&&$(".js-col-"+$(this).attr("data-style")).removeClass("d-none"),$(this).on("click",function(){if(!$(this).hasClass("active")){var abcxyz=$(".js-select-style").find(".active").attr("data-style");$(".js-select-style").find(".active").removeClass("active"),$(".js-col-"+abcxyz).addClass("d-none"),$(this).addClass("active"),$(".js-col-"+$(this).attr("data-style")).removeClass("d-none")}productItem(),productItem2()})})}function selectColCollection(){function changeClass(abc,xyz){$("."+abc).each(function(){$(this).hasClass("row")&&$(this).find(".js-change-col").removeClass("col-lg-2 col-lg-3 col-lg-4 col-lg-6 col-lg-12 col-lg-2dot4").addClass("col-lg-"+xyz)})}$("#showby-grid, #showby-list").each(function(){$(this).change(function(){switch(console.log($(this).val()),$(this).val()){case"1":changeClass($(this).attr("data-js"),"12");break;case"2":changeClass($(this).attr("data-js"),"6");break;case"3":changeClass($(this).attr("data-js"),"4");break;case"4":changeClass($(this).attr("data-js"),"3");break;case"5":changeClass($(this).attr("data-js"),"2dot4");break}setTimeout(function(){productItem(),productItem2()},300)})})}function filterCollection(){$(".filter-tag li").each(function(){$(this).on("click",function(){console.log("a"),setTimeout(function(){productItem(),productItem2()},3e3)})})}function tabProductDetail(){$(".js-list-tag-detail").children().each(function(){$(this).on("click",function(){$(".js-detail-tab-content").find(".active").removeClass("active"),$(".js-detail-tab-content").parent().next().find(".active").removeClass("active"),$("#"+$(this).children().attr("data-toggle")).addClass("active")})})}function backToTop(){var btn=$("#back-to-top");$(window).scroll(function(){$(window).scrollTop()>50?btn.addClass("show"):btn.removeClass("show")}),btn.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")})}function video(){$("[data-fancybox]").fancybox({youtube:{controls:0,showinfo:0},vimeo:{color:"f00"}})}function productDetailV2(){$(".js-product-detail-v2").slick({arrows:!0,infinite:!0,autoplay:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="product-arrow slick-product-prev lnr lnr-chevron-left"></button>',nextArrow:'<button type="button" class="product-arrow slick-product-next lnr lnr-chevron-right"></button>',responsive:[{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}}]})}function slideProductDetail(){$(".js-middle").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dot:!1,fade:!0,infinite:!0,asNavFor:".js-product-thumbnail-left"}),$(".js-product-thumbnail-left").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".js-middle",dots:!1,arrows:!1,infinite:!1,vertical:!0,verticalSwiping:!0,focusOnSelect:!0,responsive:[{breakpoint:992,settings:{vertical:!1}}]}),$(".js-middle-bt").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dot:!1,fade:!0,infinite:!0,asNavFor:".js-product-thumbnail-bottom"}),$(".js-product-thumbnail-bottom").slick({slidesToShow:6,slidesToScroll:1,asNavFor:".js-middle-bt",dots:!1,arrows:!0,infinite:!1,prevArrow:'<button type="button" class="product-arrow  slick-product-prev lnr lnr-chevron-left"></button>',nextArrow:'<button type="button" class="product-arrow  slick-product-next lnr lnr-chevron-right"></button>',focusOnSelect:!0})}function loginDestop(){$(".js-popup-login").on("click",function(){$(".js-poup-login-destop").addClass("active"),$(".js-bg-login-popup").addClass("active")}),$(".js-close-login").on("click",function(){$(this).removeClass("active"),$(".js-poup-login-destop").removeClass("active"),$(".js-bg-login-popup").removeClass("active")}),$(".js-bg-login-popup").on("click",function(){$(".js-poup-login-destop").removeClass("active"),$(this).removeClass("active")}),$(window).resize(function(){$(window).width()<1200&&($(".js-poup-login-destop").removeClass("active"),$(".js-bg-login-popup").removeClass("active"),$(".js-close-login").removeClass("active"),$(this).removeClass("active"))})}function switchLoginRegister(){$(".js-create-an_acc").on("click",function(){$(".js-form-register").show(),$(".js-form-login").hide()}),$(".js-popup-login").on("click",function(){$(".js-form-login").show(),$(".js-form-register").hide()}),$(".js-back-to-login-des").on("click",function(){$(".js-form-login").show(),$(".js-form-register").hide()}),$(".jsacount_destop").on("click",function(){$(".js-form-login").show(),$(".js-form-register").hide()})}function searchBoxPullRight(){$(".js-search").on("click",function(){$(".js-search-box").addClass("active"),$(".js-bg-overlay-search").addClass("active"),$(".js-close-search").addClass("active")}),$(".js-bg-overlay-search").on("click",function(){$(this).removeClass("active"),$(".js-search-box").removeClass("active"),$(".js-close-search").removeClass("active")}),$(".js-close-search").on("click",function(){$(this).removeClass("active"),$(".js-search-box").removeClass("active"),$(".js-bg-overlay-search").removeClass("active")})}function productCountdownV2(){var data=$(".js-product-countdown-v2").attr("data-js");$(".js-product-countdown-v2").slick({arrows:!0,infinite:!0,autoplay:!1,slidesToShow:data,slidesToScroll:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="product-arrow slick-product-prev lnr lnr-chevron-left"></button>',nextArrow:'<button type="button" class="product-arrow slick-product-next lnr lnr-chevron-right"></button>',responsive:[{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1}}]})}function lookbookCountdown(){$(".js-popup-lb-slide").slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,infinite:!0,fade:!0,arrows:!1,dots:!0}),$(".js-hover-lookbook").each(function(){$(this).on("click",function(){var dataId=$(this).attr("data-hover");$(".js-popup-lb-slide .slick-dots").find("li").eq(dataId).click()})})}function pinProduct(){$(".js-lookbook").on("click",function(){$(".js-popup-lookbook").addClass("active"),$(".js-bg-overlay-popup-lookbook").addClass("active")}),$(".js-close-popup-lookbook").on("click",function(){$(".js-popup-lookbook").removeClass("active"),$(".js-bg-overlay-popup-lookbook").removeClass("active")}),$(".js-bg-overlay-popup-lookbook").on("click",function(){$(this).removeClass("active"),$(".js-popup-lookbook").removeClass("active")})}function lookbookCountdownV2(){$(".js-popup-lb-slide-v2").slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,infinite:!0,fade:!0,arrows:!1,dots:!0}),$(".js-hover-lookbook-v2").each(function(){$(this).on("click",function(){var dataId=$(this).attr("data-hover");$(".js-popup-lb-slide-v2 .slick-dots").find("li").eq(dataId).click()})})}function pinProduct2(){$(".js-lookbook-countdown-v2").on("click",function(){$(".js-popup-lookbook-v2").addClass("active"),$(".js-bg-overlay-popup-lookbook-v2").addClass("active")}),$(".js-close-popup-lookbook-v2").on("click",function(){$(".js-popup-lookbook-v2").removeClass("active"),$(".js-bg-overlay-popup-lookbook-v2").removeClass("active")}),$(".js-bg-overlay-popup-lookbook-v2").on("click",function(){$(this).removeClass("active"),$(".js-popup-lookbook-v2").removeClass("active")})}headerFixedMobile(),slideMenuMobile(),verticalMenu(),slideMobileSearch(),slideMiniCart(),switchDropAngle(),switchDropAngleMenu(),switchLoginRegisterForm(),menuDesktopScroll(),slideShowV1(),slideShowV2(),slideShowV3(),slideShowV4(),slideShowV5(),productItem(),productItem2(),selectStyleCollection(),selectColCollection(),filterCollection(),testimonialV1(),slideShowSidebarCollection(),FilterSidebarColecllectionInRight(),brandV1(),slideCountdown(),tabProductDetail(),backToTop(),newsLetterPopup(),video(),testimonialAboutUS(),productDetailV2(),slideProductDetail(),loginDestop(),switchLoginRegister(),searchBoxPullRight(),productCountdownV2(),lookbookCountdown(),pinProduct(),lookbookCountdownV2(),pinProduct2()});
//# sourceMappingURL=/cdn/shop/t/19/assets/engo-scripts.js.map?v=42725308662159695231576810266
