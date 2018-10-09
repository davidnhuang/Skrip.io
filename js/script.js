$(document).ready(function(){

  var height = 0;
  $("#feed-box .meeting-feed-listing").each(function(i, value){
      height += parseInt($(this).height());
    });

  height += '';

  $("#feed-box").animate({scrollTop: height});
});
