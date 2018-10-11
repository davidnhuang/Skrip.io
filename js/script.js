$(document).ready(function(){

  //Scroll feedbox to bottom
  var height = 0;

  //Calculat feedback scroll
  $("#feed-box .meeting-feed-listing").each(function(i, value){
      height += parseInt($(this).height());
    });

  height += '';

  //Scroll to bottom of feed
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

  //Team meeting declined
  $(".meeting-button-decline").click(function(event){
    $(".scheduler-input-buttons").toggle()
    $(".my-declined-details").toggle("drop")
    $("#requested-meeting-scheduling").addClass("meeting-done")
  });

  //Schedule meeting
  $(".start-meeting-button").click(function(event){
    $("#overlay").fadeIn(200)
    $(".overlay-dialogue-bg").fadeIn(360)
    $("#schedule-meeting-dialogue").toggle("drop")
  });

  //Context menues
  // Scheduler Menus
  // Trigger action when the contexmenu is about to be shown
  $("#meeting-confirmation-option").click("contextmenu", function(event) {
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".meeting-post-options").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#sent-meeting-response-option").click("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".cancel-meeting-sent-option").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  // Dismiss menu after click out
  $(document).bind("mousedown", function (e) {
    // If the clicked element is not the menu
    if (!$(e.target).parents(".meeting-post-options").length > 0) {
      // Hide it
      $(".meeting-post-options").hide(100);
    }
  });
  // Dismiss menu after click out
  $(document).bind("mousedown", function (e) {
    // If the clicked element is not the menu
    if (!$(e.target).parents(".cancel-meeting-sent-option").length > 0) {
      // Hide it
      $(".cancel-meeting-sent-option").hide(100);
    }
  });

  /* last minute cancel */
  //Team meeting declined
  $("#last-minute-cancel").click(function(event){
    $(".my-declined-details").fadeIn(300)
    $("#requested-meeting-scheduling").addClass("meeting-done")
    $(".scheduler-input-buttons").css("display", "none")
    $(".my-agreement-details").fadeOut(50)
    $(".meeting-post-options").hide(100)
  });

  //Team meeting accepted
  $("#last-minute-accept").click(function(event){
    $(".my-agreement-details").fadeIn(300)
    $("#requested-meeting-scheduling").removeClass("meeting-done")
    $(".scheduler-input-buttons").css("display", "none")
    $(".my-declined-details").fadeOut(50)
    $(".meeting-post-options").hide(100)
  });

  //Rescind meeting decision
  $("#meeting-rescinded").click(function(event){
    $(".scheduler-input-buttons").fadeIn()
    $(".my-declined-details").fadeOut(50)
    $(".my-agreement-details").fadeOut(50)
    $("#requested-meeting-scheduling").removeClass("meeting-done")
    $(".meeting-post-options").hide(100)
  });

  //Cancel meeting submission
  $("#cancel-meeting-appointment").click(function(event){
    $("#popup-overlay").fadeIn(100)
    $(".popup-dialogue-discard-changes").fadeIn(100)
  });

  //Don't cancel meeting submission dialogue
  $("#popup-keep-changes").click(function(event){
    $("#popup-overlay").fadeOut(100)
    $(".popup-dialogue-discard-changes").fadeOut(100)
  });

  //Cancel meeting submission dialogue
  $("#popup-discard-changes").click(function(event){
    $("#popup-overlay").fadeOut(100)
    $(".popup-dialogue-discard-changes").fadeOut(100)
    $("#overlay").fadeOut(100)
    $(".overlay-dialogue-bg").fadeOut(100)
    $("#schedule-meeting-dialogue").fadeOut(100)
  });

  // Schedule meeting spawning beta warning
  $("#submit-meeting-appointment").click(function(event){
    $("#popup-overlay").fadeIn(200)
    $(".beta-warning").fadeIn(200)
    $("#overlay").fadeOut(100)
    $("#schedule-meeting-dialogue").toggle(100)
  });

  //return to main menu after beta warning
  $("#return-back-to-main").click(function(event){
    $("#popup-overlay").fadeOut(100)
    $(".beta-warning").fadeOut(100)
  });

});
