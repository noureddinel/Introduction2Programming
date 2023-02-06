$(document).ready(function() {
  $('li').click(function() {
    target = $(this).attr('data');
    section = $('#' + target);
    offset = section.offset().top;
    $('html, body').animate({
      scrollTop: offset
    },500);
  });
  

  

  $("#needHelp").click(function() {
    $("#helpAdvice").show();
    $("#overlay").show();
    $("body").addClass("noscroll");
  });
  $("#dismiss, #overlay").click(function() {
      $("#helpAdvice").hide();
      $("#overlay").hide();
      $("body").removeClass("noscroll");
    });


  $("#showfull").click(function() {
    $(".schedule").hide();
    $("#fullSchedule tr").show();
    $(".col-problemsets, .col-type, .col-projects, .week").show();
    $("#fullSchedule").show();
    $(".schedule-firstrow").show();
    

  })
  $("#showlectures").click(function() {
    $("#fullSchedule tr").hide();
    $(".lectures").show();
    $(".schedule-firstrow").show();
    $(".schedule").hide();
    $("#fullSchedule").show();
    $(".col-problemsets, .col-type, .col-projects, .week").hide();
  });
  $("#showrecitations").click(function() {
    $("#fullSchedule tr").hide();
    $(".recitations").show();
    $(".schedule-firstrow").show();
    $(".schedule").hide();
    $("#fullSchedule").show();
    $(".col-problemsets, .col-type, .col-projects, .week").hide();
  });

  $("#showquizzes").click(function() {
    $(".schedule").hide();
    $("#quizSchedule").show();
  });
  $("#showexams").click(function() {
    $(".schedule").hide();
    $("#examSchedule").show();
  });
  $("#showprojects").click(function() {
    $(".schedule").hide();
    $("#projectSchedule").show();
  });
  $("#showproblemsets").click(function() {
    $(".schedule").hide();
    $("#psSchedule").show();
  });
  $(document).on('scroll',function(e) {
    /* highlighting the active section */
    $('li').removeClass('active');
    datahash = window.location.hash.split("#")[1];
    
    element = "li[data='"+datahash+"']";
    $("li[data='"+datahash+"']").addClass("active");


    /* updating the hash for the active section */
    $('section').each(function(){
      if ( $(this).offset().top < window.pageYOffset + 40
      &&   $(this).offset().top + 
           $(this).height() > window.pageYOffset + 40) { 
        var data = $(this).attr('id');
        
        // this will prevent scrolling to the element that has the #data id when the url's hash is changed
        history.replaceState({}, '', "#" + data);
      }
    });
  });
});
