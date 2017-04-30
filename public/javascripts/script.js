/*$(".work").hover(
  function(){
        $(".dropdown").show("slow");
        console.log('hovering');
    }, function(){
        $(".dropdown").hide("quick");
        console.log('leaving');
    }
  );
*/
/*
$( ".dropdown > a" ).click(function() {
  $(".dropdown ul").toggleClass("dropdown-open");

  console.log('hovering');
});
*/

$(".info-header").click(function() {
  $(this).next().toggle("fast");
});
