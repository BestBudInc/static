!function(o){var r=o(window),a=o("body"),e={parallax:!0,parallaxFactor:10};if(breakpoints({wide:["1081px","1680px"],normal:["841px","1080px"],narrow:["737px","840px"],mobile:[null,"736px"]}),browser.mobile&&a.addClass("is-scroll"),r.on("load",function(){window.setTimeout(function(){a.removeClass("is-preload")},100)}),o(".scrolly-middle").scrolly({speed:1e3,anchor:"middle"}),o(".scrolly").scrolly({speed:1e3,offset:function(){return breakpoints.active("<=mobile")?70:190}}),"ie"!=browser.name&&"edge"!=browser.name&&!browser.mobile||(e.parallax=!1),e.parallax){var l,p=o();r.on("scroll.overflow_parallax",function(){l.css("background-position","center "+parseInt(r.scrollTop())/e.parallaxFactor*-1+"px")}).on("resize.overflow_parallax",function(){l=breakpoints.active("<=narrow")?(a.css("background-position",""),p):a,r.triggerHandler("scroll.overflow_parallax")}).trigger("resize.overflow_parallax")}o(".gallery").poptrox({useBodyOverflow:!1,usePopupEasyClose:!1,overlayColor:"#0a1919",overlayOpacity:.75,usePopupDefaultStyling:!1,usePopupCaption:!0,popupLoaderText:"",windowMargin:10,usePopupNav:!0})}(jQuery);