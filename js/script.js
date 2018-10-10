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

  //Opening sub subdirectory 1
  $("#sub-sub-directory-listing-1").click(function(event){$("#sub-subdirectory-1").slideToggle()});
  //Opening sub subdirectory 2
  $("#sub-sub-directory-listing-2").click(function(event){$("#sub-subdirectory-2").slideToggle()});
  //Opening sub subdirectory 3
  $("#sub-sub-directory-listing-3").click(function(event){$("#sub-subdirectory-3").slideToggle()});
  //Opening sub subdirectory 4
  $("#sub-sub-directory-listing-4").click(function(event){$("#sub-subdirectory-4").slideToggle()});
  //Opening sub subdirectory 5
  $("#sub-sub-directory-listing-5").click(function(event){$("#sub-subdirectory-5").slideToggle()});
  //Opening sub subdirectory 6
  $("#sub-sub-directory-listing-6").click(function(event){$("#sub-subdirectory-6").slideToggle()});
  //Opening sub subdirectory 7
  $("#sub-sub-directory-listing-7").click(function(event){$("#sub-subdirectory-7").slideToggle()});

  //Team space options
  $(".dropdown-button").click(function(event){$(".drive-dropdown-menu").slideToggle()});

  //Team meeting agreed
  $(".meeting-button-confirm").click(function(event){
    $(".scheduler-input-buttons").toggle()
    $(".my-agreement-details").toggle("drop")
  });
  $(".meeting-button-decline").click(function(event){
    $(".scheduler-input-buttons").toggle()
    $(".my-declined-details").toggle("drop")
    $("#requested-meeting-scheduling").addClass("meeting-done")
  });

  //Schedule meeting
  $(".start-meeting-button").click(function(event){
    $("#overlay").fadeIn(500)
  });

  //ESC key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) $('#overlay').fadeOut(250);
  });

  //Context menues
  // Scheduler Menus
  // Trigger action when the contexmenu is about to be shown
  $("#meeting-confirmation-option").click("contextmenu", function (event) {

      // Avoid the real one
      event.preventDefault();

      // Show contextmenu
      $(".meeting-post-options").finish().toggle(100).

      // In the right position (the mouse)
      css({
        top: event.pageY + "px",
        left: (event.pageX -= 120) + "px"
      });
  });

  // If the document is clicked somewhere
  $(document).bind("mousedown", function (e) {

      // If the clicked element is not the menu
      if (!$(e.target).parents(".custom-menu").length > 0) {
          // Hide it
          $(".meeting-post-options").hide(100);
      }
  });


  // If the menu element is clicked
  $(".meeting-post-options li").click(function(){

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
});
