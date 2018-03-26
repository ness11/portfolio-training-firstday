$(document).ready(function(){
  showMenu();
  button();
  scrolling();
  
})
function button(){
  $(".scroll").click(function() {

    //$(window).scrollTop(0);
    $("html, body").animate({scrollTop:0}, 'slow');
    console.log("click")
    
  });
}



function scrolling(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){
      $(".scroll").show(0, function() { 
             
      });
      console.log("Scroll position:", $(this).scrollTop());
    } else {
      $(".scroll").hide(0, function() {
      });
    }
    
  });
}
function showMenu(){
  $(".bar").click(function(){
    $(".menu").toggle(0,function(){
    })
  })
}