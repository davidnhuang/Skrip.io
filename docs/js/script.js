$(document).ready(function(){

  //Pseudo loading screen
  setTimeout(function(){
    $("#loading-screen").fadeOut(100)
    $("#target-content").addClass("fadingIn")
  },800);

  $(".loading-bar").animate({width: "100%"});

  //Scroll feedbox to bottom
  var height = 0;

  //Calculat feedback scroll
  $("#feed-box .meeting-feed-listing").each(function(i, value){
    height += parseInt($(this).height());
  });

  height += '';

  //Scroll to bottom of feed
  $("#feed-box").scrollTop(height)

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
  //meeting 1 options
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

  //meeting 2 options
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

  //meeting 3 options
  $("#meeting-list-3-options").click("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".meeting-3-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  //meeting 4 options
  $("#meeting-list-4-options").click("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".meeting-4-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-1").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-1-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-2").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-2-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-3").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-3-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-4").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-4-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-5").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-5-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-6").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-6-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $("#directory-7").on("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".directory-7-context-menu").finish().toggle(100).
    // In the right position (the mouse)
    css({
      top: (event.pageY-=20) + "px",
      left: (event.pageX -= 120) + "px"
    });
  });

  $(".dirList-main-search").click("contextmenu", function(event){
    // Avoid the real one
    event.preventDefault();
    // Show contextmenu
    $(".search-bar-dropdown-menu").finish().fadeIn(100).
    // In the right position (the mouse)
    css({
      top: 69 + "px",
      left: 302 + "px"
    });
  });

  // Dismiss menu after click out
  $(document).bind("mousedown", function (e) {
    // If the clicked element is not the menu
    if (!$(e.target).parents(".meeting-post-options, .cancel-meeting-sent-option, .directory-1-context-menu, .directory-2-context-menu, .directory-3-context-menu, .directory-4-context-menu, .directory-5-context-menu, .directory-6-context-menu, .directory-7-context-menu, .search-bar-dropdown-menu, .directory-3-context-menu, .meeting-1-context-menu, .meeting-2-context-menu, .meeting-3-context-menu, .meeting-4-context-menu").length > 0) {
      // Hide it
      $(".meeting-post-options, .cancel-meeting-sent-option, .directory-1-context-menu, .directory-2-context-menu, .directory-3-context-menu, .directory-4-context-menu, .directory-5-context-menu, .directory-6-context-menu, .directory-7-context-menu, .search-bar-dropdown-menu, .directory-3-context-menu, .meeting-1-context-menu, .meeting-2-context-menu, .meeting-3-context-menu, .meeting-4-context-menu").fadeOut(100);
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
    $(".my-declined-details, .my-agreement-details").fadeOut(50)
    $("#requested-meeting-scheduling").removeClass("meeting-done")
    $(".meeting-post-options").hide(100)
  });

  //Cancel meeting submission
  $("#cancel-meeting-appointment").click(function(event){
    $("#popup-overlay, .popup-dialogue-discard-changes").fadeIn(100)
  });

  //Don't cancel meeting submission dialogue
  $("#popup-keep-changes").click(function(event){
    $("#popup-overlay, .popup-dialogue-discard-changes").fadeOut(100)
  });

  //Cancel meeting submission dialogue
  $("#popup-discard-changes").click(function(event){
    $("#popup-overlay, .popup-dialogue-discard-changes, #overlay, .overlay-dialogue-bg, #schedule-meeting-dialogue").fadeOut(100)
  });

  // Schedule meeting spawning beta warning
  $("#submit-meeting-appointment").click(function(event){
    $("#popup-overlay, .beta-warning").fadeIn(200)
    $("#overlay").fadeOut(100)
    $("#schedule-meeting-dialogue").toggle(100)
  });

  //return to main menu after beta warning
  $("#return-back-to-main").click(function(event){
    $("#popup-overlay, .beta-warning").fadeOut(100)
  });

  // Cancel meeting dialogue
  $("#last-minute-cancel-agreed").click(function(event){
    $("#popup-overlay, .cancel-meeting-warning").fadeIn(200)
    $(".cancel-meeting-sent-option").hide(100)
  });

  //Dismiss
  $("#do-not-cancel-meeting").click(function(event){
    $("#popup-overlay, .cancel-meeting-warning").fadeOut(100)
  });

  //Cancel meeting
  $("#do-cancel-meeting").click(function(event){
    $("#popup-overlay, .cancel-meeting-warning").fadeOut(100)
    $("#meeting-2-cancel-requested").addClass("meeting-done")
  });

  //toggle calendar view
  $("#toggle-calendar-view").click(function(event){
    $("#body--dirList").toggle("slide")
    $("#body--sideFeed-calendar-view").toggle(function() {
        if ($(this).is(':visible'))
        $(this).css('display','inline-block');
    })
  });

  //exit out calendar view
  $(".exit-out-calendar-feedbox").click(function(event){
    $("#body--dirList").toggle("slide")
    $("#body--sideFeed-calendar-view").toggle(function() {
        if ($(this).is(':visible'))
        $(this).css('display','inline-block');
      });
  });

  //upload to root Directory
  $("#upload-root-directory").click(function(event){
    $("#overlay").fadeIn(200)
    $(".overlay-dialogue-bg").fadeIn(360)
    $("#uploading-to-root").fadeIn(200)
  });

  //cancel root directory upload
  $("#cancel-root-upload").click(function(event){
    $("#uploading-to-root, #overlay").fadeOut(200)
    $(".overlay-dialogue-bg").fadeOut(360)
  });

  //confirm root directory popup
  $("#confirm-root-upload").click(function(event){
    $(".overlay-dialogue-bg").fadeOut(100)
    $("#overlay, #uploading-to-root").fadeOut(200)
    $("#popup-overlay").fadeIn(100)
    $(".danger-zone").fadeIn(200)
  });

  //no permission popup
  $("#submit-dangerous-action").click(function(event){
    $(".danger-zone").fadeOut(100)
    $(".no-permission-warning").fadeIn(200)
  });

  //return to Main
  $("#return-back-to-main-2").click(function(event){
    $("#popup-overlay, .no-permission-warning").fadeOut(200)
  });

  //upload general documents
  $("#upload-general-document").click(function(event){
    $("#popup-overlay").fadeIn(100)
    $(".no-permission-warning").fadeIn(200)
  });

  //opening meeting 1 details
  $("#view-meeting-1-details").click(function(event){
    $("#overlay").fadeIn(100)
    $("#meeting-1-detail, .overlay-dialogue-bg").fadeIn(200)
    $(".meeting-post-options").hide(100)
  });

  //close meeting 1 details
  $("#close-meeting-1-details").click(function(event){
    $("#overlay, #meeting-1-detail, .overlay-dialogue-bg, .meeting-post-options").fadeOut(200)
  });

  //opening meeting 2 details
  $("#view-meeting-2-details").click(function(event){
    $("#overlay").fadeIn(100)
    $("#meeting-2-detail, .overlay-dialogue-bg").fadeIn(200)
    $(".cancel-meeting-sent-option").hide(100)
  });

  //close meeting 2 details
  $("#close-meeting-2-details").click(function(event){
    $("#overlay, #meeting-2-detail, .overlay-dialogue-bg, .meeting-post-options").fadeOut(200)
  });

  //opening meeting 2 details
  $("#view-meeting-3-details").click(function(event){
    $("#overlay").fadeIn(100)
    $("#meeting-3-detail, .overlay-dialogue-bg").fadeIn(200)
    $(".meeting-3-context-menu").hide(100)
  });

  //close meeting 2 details
  $("#close-meeting-3-details").click(function(event){
    $("#overlay, #meeting-3-detail, .overlay-dialogue-bg, .meeting-post-options").fadeOut(200)
  });

  //opening meeting 2 details
  $("#view-meeting-4-details").click(function(event){
    $("#overlay").fadeIn(100)
    $("#meeting-4-detail, .overlay-dialogue-bg").fadeIn(200)
    $(".meeting-4-context-menu").hide(100)
  });

  //close meeting 2 details
  $("#close-meeting-4-details").click(function(event){
    $("#overlay, #meeting-4-detail, .overlay-dialogue-bg, .meeting-post-options").fadeOut(200)
  });

  //open node help
  $("#body--naming-help").click(function(event){
    $("#overlay").fadeIn(100)
    $(".overlay-dialogue-bg").fadeIn(200)
    $("#naming-help-tips").fadeIn(250)
  });

  //open node help
  $("#close-help-tips").click(function(event){
    $("#overlay, .overlay-dialogue-bg, #naming-help-tips").fadeOut(100)
  });

  //commit name conventions
  $("#commiting-new-convention").click(function(event){
    $("#popup-overlay").fadeIn(100)
    $(".naming-danger-zone").fadeIn(200)
  });

  //no permission popup
  $("#submit-dangerous-name-action").click(function(event){
    $(".naming-danger-zone").fadeOut(100)
    $(".no-permission-warning").fadeIn(200)
  });

  //upload to sub Directory
  $("#upload-to-subdirectory").click(function(event){
    $("#overlay, #uploading-to-sub-directory").fadeIn(200)
    $(".overlay-dialogue-bg").fadeIn(360)
  });

  //close upload dialogue
  $("#cancel-file-upload, #confirm-file-upload").click(function(event){
    $("#overlay, #uploading-to-sub-directory, .overlay-dialogue-bg").fadeOut(200)
  });

  //table row callout
  //use a special class name or id for the table
  //using find I'm getting all tr elements in the table
  //using not(':eq(0)') I'm ignoring the first tr element
  //using each I'm iterating through the selected elements
  $('#current-code-version').find('tr').each(function(i){
    //using children('td:eq(0)') I'm getting the first td element inside the tr
    $(this).children('td:eq(0)').addClass('code-line-number').text(i+1);
  });

  $('#previous-code-version').find('tr').each(function(i){
    //using children('td:eq(0)') I'm getting the first td element inside the tr
    $(this).children('td:eq(0)').addClass('code-line-number').text(i+1);
  });

});
