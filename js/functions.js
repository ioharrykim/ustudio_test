(function ($) {
  // slick
  $(".banner-slide").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrow: true,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    draggable: false,
    fade: true,
    easing: "easeInOutQuint",
    pauseOnHover: false,
  });

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
    // if (wScroll >= page.offset().top) {
    //   $('.banner-slide').slick("slick");
    // }else if (wScroll >= $('.test-container').offset().top) {
    //   $('.banner-slide').slick("unslick");
    // }
    if (wScroll >= page.offset().top) {
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

    //footer
    const $fEmail = $(".footer-email"),
      $fTel = $(".footer-tel"),
      $fFax = $(".footer-fax"),
      $fAddress = $(".footer-address");

    $fEmail.mouseenter(function () {
      console.log("enter");
      $fEmail.stop().animate(
        {
          color: "#FBAF42",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fEmail.mouseleave(function () {
      $fEmail.stop().animate(
        {
          color: "#000000",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fTel.mouseenter(function () {
      console.log("enter");
      $fTel.stop().animate(
        {
          color: "#FBAF42",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fTel.mouseleave(function () {
      $fTel.stop().animate(
        {
          color: "#000000",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fFax.mouseenter(function () {
      console.log("enter");
      $fFax.stop().animate(
        {
          color: "#FBAF42",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fFax.mouseleave(function () {
      $fFax.stop().animate(
        {
          color: "#000000",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fAddress.mouseenter(function () {
      console.log("enter");
      $fAddress.stop().animate(
        {
          color: "#FBAF42",
        },
        300,
        "easeInOutQuad"
      );
    });
    $fAddress.mouseleave(function () {
      $fAddress.stop().animate(
        {
          color: "#000000",
        },
        300,
        "easeInOutQuad"
      );
    });
  });
})(jQuery);
