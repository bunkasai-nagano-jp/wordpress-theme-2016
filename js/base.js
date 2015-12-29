﻿/*--------------------------------
フッターを最下部に
-------------------------------*/
/*--------------------------------------------------------------------------*
*
*  footerFixed.js
*
*  MIT-style license.
*
*  2007 Kazuma Nishihata [to-R]
*  http://blog.webcreativepark.net
*
*--------------------------------------------------------------------------*/

new function(){

     var footerId = "footer";
     //メイン
     function footerFixed(){
          var dh = document.getElementsByTagName("body")[0].clientHeight;
          document.getElementById(footerId).style.top = "0px";
          var ft = document.getElementById(footerId).offsetTop;
          var fh = document.getElementById(footerId).offsetHeight;
          if (window.innerHeight){
               var wh = window.innerHeight;
          }else if(document.documentElement && document.documentElement.clientHeight != 0){
               var wh = document.documentElement.clientHeight;
          }
          if(ft+fh<wh){
               document.getElementById(footerId).style.position = "relative";
               document.getElementById(footerId).style.top = (wh-fh-ft-1)+"px";
          }
     }

     function checkFontSize(func){

          var e = document.createElement("div");
          var s = document.createTextNode("S");
          e.appendChild(s);
          e.style.visibility="hidden"
          e.style.position="absolute"
          e.style.top="0"
          document.body.appendChild(e);
          var defHeight = e.offsetHeight;

          function checkBoxSize(){
               if(defHeight != e.offsetHeight){
                    func();
                    defHeight= e.offsetHeight;
               }
          }
          setInterval(checkBoxSize,1000)
     }

     function addEvent(elm,listener,fn){
          try{
               elm.addEventListener(listener,fn,false);
          }catch(e){
               elm.attachEvent("on"+listener,fn);
          }
     }

     addEvent(window,"load",footerFixed);
     addEvent(window,"load",function(){
          checkFontSize(footerFixed);
     });
     addEvent(window,"resize",footerFixed);

}

/*-------------
ページスクロール
-----------*/

jQuery(function() {
    var pageTop = jQuery('#page-top');
    pageTop.hide();
    jQuery(window).scroll(function () {
        if(jQuery(this).scrollTop() > 400) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
        pageTop.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
        });
  });

/*---------------------------
ドロップダウン
------------------------------*/
$(function() {
	if ($('#toggler').is(":hidden")) {
		$(".menu-item-has-children").mouseover(function(){
			  $(this).children(".sub-menu").show();
		});
		$(".menu-item-has-children").mouseout(function(){
			$('.sub-menu').hide();
		});
	}
});

$(function() {
	$("#toggler").click(function(){
		$('#menu').slideToggle();
	});
});
