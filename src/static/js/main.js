// animation AOS
AOS.init({
  offset: 120,
  delay: 200,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});






// loader list pinteres style
var elem = document.querySelector(".list-tasks-container");
imagesLoaded(elem, () => {
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".item-task",
    columnWidth: 250,
  });

  // element argument can be a selector string
  //   for an individual element
  var msnry = new Masonry(".list-tasks-container", {
    // options
  });
});







// ajax
$(document).ready(function () {

  $(".btn-doneToggle").click(function (e) {
    e.preventDefault();
    let uid = $(this).attr("data-id");
    $.post("/task/" + uid + "/toggleDone").done((data) => {
      if (data.done) {
        $(this).addClass("active");
        $(this).attr("title", "Realizada");
        $(this).children("span").text("Realizada");
      } else {
        $(this).removeClass("active");
        $(this).attr("title", "No realizada");
        $(this).children("span").text("No realizada");
      }
    });
  });

  $(".btn-delete").click(function (e) {
    e.preventDefault();
    let uid = $(this).attr("data-id");
    $.get("/task/" + uid + "/delete").done((data) => {
      window.location = "/";
    });
  });

  $(".btn-modal-edit").click(function(e) {
    $(this).siblings('.edit-modal-container').css({
      display: 'block'
    })
    console.log('click modal')
  });

  $(".btn-menu-click").click(function (e) {
    if($('#menu').hasClass('active')){
      $('#menu').removeClass('active')
    }else{
      $('#menu').addClass('active')
    }
  })

});
