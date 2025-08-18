$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar").addClass("nav--glass");
    } else {
      $(".navbar").removeClass("nav--glass");
    }
  });

  $(".navmenu__trigger").click(function () {
    $("body").addClass("sidenav__bg");
    $(".sidenav__container").addClass("open_menu");
    $(".navbar").removeClass("nav--glass");
    //$(".nav__actions").fadeOut();
  });

  $(".close_container").click(function () {
    $("body").removeClass("sidenav__bg");
    $(".sidenav__container").removeClass("open_menu");
    $(".navbar").addClass("nav--glass");
    //$(".nav__actions").fadeIn();
  });

  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });

  $(".sidenav__wrapper__links").click(function () {
    $("body").removeClass("sidenav__bg");
    $(".sidenav__container").removeClass("open_menu");
    $(".navbar").addClass("nav--glass");
  });

  // $(".mfp-close").click(function () {
  //   alert(1);
  //   $("body").removeClass("sidenav__bg");
  // });
});


navigator.sayswho= (function(){
  var ua= navigator.userAgent;
  var tem; 
  var M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

console.log(navigator.sayswho); // 

// if (navigator.sayswho === "Chrome 110"){
//   alert(1)
// }