$(document).ready(function () {
 //左边缩进按钮控制start
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;
    $('#wrapper').toggleClass('toggled');
    trigger.click(function () {
      hamburger_cross();      
    });
 
    function hamburger_cross() {
 
//      if (isClosed == true) {          
//        overlay.hide();
//        trigger.removeClass('is-open');
//        trigger.addClass('is-closed');
//        isClosed = false;
//      } else {   
//        overlay.show();
//        trigger.removeClass('is-closed');
//        trigger.addClass('is-open');
//        isClosed = true;
//      }
  }
   
  $('.icon-flex').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
  //缩进按钮控制结束
  
  //左边菜单展开控制start
  $('.second-menu').css("display","none");  /*第一次隐藏所有的二级菜单*/ 
  debugger;
  $('.top-menu').click(function(){
	  $('.second-menu').css("display","none");
	  $(this).children("ul.second-menu").css("display","block");
//	  $('.second-menu').css("display","block");
  })
});