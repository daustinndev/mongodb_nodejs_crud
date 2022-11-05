AOS.init({
  offset: 120,
  delay: 200,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom", // defines which position of the
});

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

$(document).ready(function () {
  $(".btn-doneToggle").click(function (e) {
    e.preventDefault();
    let uid = $(this).attr("data-id");
    $.post("/task/" + uid + "/toggleDone").done((data) => {
      if (data.done) {
        $(this).addClass("active");
        $(this).attr("title", "Tarea realizada");
        $(this).children("span").text("Bien");
      } else {
        $(this).removeClass("active");
        $(this).attr("title", "Tarea no realizada");
        $(this).children("span").text("No");
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
});
