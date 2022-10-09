$(".change").on("click",function(){
  if($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").text("Dark");
  } else {
    $("body").addClass("dark");
    $(".change").text("Light");
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