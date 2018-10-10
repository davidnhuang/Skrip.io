$(document).ready(function(){

  //Scroll feedbox to bottom
  var height = 0;

  $("#feed-box .meeting-feed-listing").each(function(i, value){
      height += parseInt($(this).height());
    });

  height += '';

  $("#feed-box").animate({scrollTop: height});

  //Opening subdirectory 1
  $("#directory-1").click(function(event){$("#subdirectory-list-1").slideToggle()});
  //Opening subdirectory 2
  $("#directory-2").click(function(event){$("#subdirectory-list-2").slideToggle()});
  //Opening subdirectory 3
  $("#directory-3").click(function(event){$("#subdirectory-list-3").slideToggle()});
  //Opening subdirectory 4
  $("#directory-4").click(function(event){$("#subdirectory-list-4").slideToggle()});
  //Opening subdirectory 5
  $("#directory-5").click(function(event){$("#subdirectory-list-5").slideToggle()});
  //Opening subdirectory 6
  $("#directory-6").click(function(event){$("#subdirectory-list-6").slideToggle()});
  //Opening subdirectory 7
  $("#directory-7").click(function(event){$("#subdirectory-list-7").slideToggle()});

  /*
  $("#...").bind("contextmenu", function (event) {

    // Avoid the real one
    event.preventDefault();

    // Show contextmenu
    $(".custom-menu").finish().toggle(100).

    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
  });

  // If the document is clicked somewhere
  $("#...").bind("mousedown", function (e) {

      // If the clicked element is not the menu
      if (!$(e.target).parents(".custom-menu").length > 0) {
          // Hide it
          $(".custom-menu").hide(100);
        }
      });


  // If the menu element is clicked
  $(".custom-menu li").click(function(){

      // This is the triggered action name
      switch($(this).attr("data-action")) {

        // A case for each action. Your actions here
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
      }

      // Hide it AFTER the action was triggered
      $(".custom-menu").hide(100);
    });
    */

});
