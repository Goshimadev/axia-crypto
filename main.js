console.log("hi");

particlesJS.load("particle-js", "/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab("show");

  $(".nav-tabs a").click(function (e) {
    $(this).tab("show");
    var scrollmem = $("body").scrollTop();
    window.location.hash = this.hash;
    $("html,body").scrollTop(scrollmem);
  });
});
