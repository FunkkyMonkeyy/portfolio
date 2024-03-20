$(window).on("load", function () {
  // Scroll Trigger
  $('<div class="header-anchor" id="header-anchor">&nbsp;</div>').insertBefore(
    "#header"
  );
  //Toggle Menu
  $("#menu-toggle").on("click", function () {
    return (
      $("#navigation").toggleClass("open"), $("body").toggleClass("menu-open")
    );
  });
  // Close Menu
  $("#close-menu").on("click", function () {
    return (
      $("#navigation").removeClass("open"), $("body").removeClass("menu-open")
    );
  });

  // Floating Labels
  $(".form__validation .form-control").each(function () {
    let e = $(this);

    e.on("change keyup", function () {
      $(e).val().length > 0
        ? $(e).addClass("has-value")
        : $(e).removeClass("has-value");
    });
  });
  $(window).on("scroll", function () {
    $(window).scrollTop() > 150
      ? $("#scrollUp").addClass("active")
      : $("#scrollUp").removeClass("active");
    $("section").each(function () {
      let e = $(this),
        id = e.attr("id");
      let topHeight = e[0].offsetTop,
        h = e[0].offsetHeight;
      let link = $(".menu-slide a[href='#" + id + "']");
      let scrollDown = $(window).scrollTop();
      scrollDown > topHeight && scrollDown <= topHeight + h
        ? link.addClass("active")
        : link.removeClass("active");
    });
  });
  $("#scrollUp").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
});
// Scroll Trigger
$(window).on("load scroll", function () {
  let e = $("#header-anchor"),
    t = $("#header");
  $(window).scrollTop() > e.offset().top
    ? (t.addClass("stick"), e.height(t.innerHeight()))
    : (t.removeClass("stick"), e.height(""));
});
