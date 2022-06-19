$(".rotate").click(function () {
  $(this).toggleClass("down");
  if (document.querySelector(".rotate").classList.contains("down")) {
    $(".logo").fadeOut(200, function () {
      $(this).attr("style", "visibility:hidden").fadeIn(200);
      $("#home").fadeOut(200, function () {
        $(this).addClass("d-none").fadeIn(200);
        $("#nav").removeClass("d-none").fadeIn(200);
      });
    });
  } else {
    $(".logo").fadeOut(200, function () {
      $(this).removeAttr("style").fadeIn(200);
      $("#home").fadeOut(200, function () {
        $(this).removeClass("d-none").fadeIn(200);
        $("#nav").addClass("d-none").fadeIn(200);
      });
    });
  }
});

$(".img-div").on("click", function () {
  var alldiv = $(".img-div").find("div");
  alldiv.each(function (key, item) {
    if (!$(item).hasClass("overlay")) {
      $(item).addClass("overlay");
    }
  });

  if ($(this).find("div.overlay").length == 1) {
    $(this).find("div.overlay").removeClass("overlay");
  }
  var path = $(this).find("img").attr("src");
  $(".img").attr("src", path);
});
