AOS.init({
  offset: 120,
  delay: 200,
  duration: 1000,
  easing: "ease",
  once: false,
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
