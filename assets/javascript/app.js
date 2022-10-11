$(".change").on("click", function () {
  const icons = $(".icon-link-github")

  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").text("Dark");
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = ''
    }
  } else {
    $("body").addClass("dark");
    $(".change").text("Light");
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = 'invert(100%)'
    }
  }
});

let backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
  backToTopButtonOffset();
};

function backToTopButtonOffset() {
  if (document.documentElement.scrollTop > 40) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollBackToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}