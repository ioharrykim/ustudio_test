(function ($) {
  /* 프로젝트 헤더 색 변경  */
  const page = $(".page-container");
  const cover = $(".cover-container");
  const headerM = $(".header-menu-links a");
  const headerL = $(".header-wrap a");
  const $menu1 = $(".menu-company > a"),
        $menu2 = $(".menu-works > a"),
        $menu3 = $(".menu-contact > a");

  $(window).scroll(function () {
    const wScroll = $(this).scrollTop();
    if (wScroll >= page.offset().top) {
      console.log("도달");
      headerM.css({
        color: "#000",
      });
      $menu1.mouseenter(function () {
        $menu1.stop().animate(
          {
            color: "#FBAF42",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu1.mouseleave(function () {
        $menu1.stop().animate(
          {
            color: "#000000",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu2.mouseenter(function () {
        $menu2.stop().animate(
          {
            color: "#FBAF42",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu2.mouseleave(function () {
        $menu2.stop().animate(
          {
            color: "#000000",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu3.mouseenter(function () {
        $menu3.stop().animate(
          {
            color: "#FBAF42",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu3.mouseleave(function () {
        $menu3.stop().animate(
          {
            color: "#000000",
          },
          300,
          "easeInOutQuad"
        );
      });
      headerL.html("<img src='./images/logo_b.png' alt='logo_b'>");
    }
    if (wScroll >= cover.offset().top && wScroll <= page.offset().top) {
      console.log("아웃");
      headerM.css({
        color: "#fff",
      });
      $menu1.mouseenter(function () {
        $menu1.stop().animate(
          {
            color: "#FBAF42",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu1.mouseleave(function () {
        $menu1.stop().animate(
          {
            color: "#ffffff",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu2.mouseenter(function () {
        $menu2.stop().animate(
          {
            color: "#FBAF42",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu2.mouseleave(function () {
        $menu2.stop().animate(
          {
            color: "#ffffff",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu3.mouseenter(function () {
        $menu3.stop().animate(
          {
            color: "#FBAF42",
          },
          300,
          "easeInOutQuad"
        );
      });
      $menu3.mouseleave(function () {
        $menu3.stop().animate(
          {
            color: "#ffffff",
          },
          300,
          "easeInOutQuad"
        );
      });
      headerL.html("<img src='./images/logo_w.png' alt='logo_w'>");
    }
  });
})(jQuery);
