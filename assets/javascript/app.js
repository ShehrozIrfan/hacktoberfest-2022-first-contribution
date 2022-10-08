$(".change").on("click",function(){
  if($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").text("Dark");
  } else {
    $("body").addClass("dark");
    $(".change").text("Light");
  }
});
