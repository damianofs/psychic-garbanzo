
$(document).ready(function(){
  $('.navbar').click(function(){
    $('.menu').toggleClass('open');
  })
})
$(document).ready(function(){
  console.log('sadasd');
  $("#go-top").click(function(){
    $("html, body").animate(
                { scrollTop: "0" }, 300);
  })



  $(window).scroll(function() {

      if ($(this).scrollTop() > 250) {

            $('#go-top').fadeIn();
      } else {
            $('#go-top').fadeOut();
      }
  });

})
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
