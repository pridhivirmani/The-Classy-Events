// JavaScript : Pop-Up Box
function myFunction() {
  alert("The video has started to play");
}

// JQuery : Slide down function
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});