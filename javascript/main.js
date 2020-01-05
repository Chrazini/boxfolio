$(document).ready(function() {
  $(window).resize(function() {
    if($(window).width() <= 1280) {
      $("nav").hide()
    } else {
			$("nav").show()
    }
  }).resize();


	$('#hamburger').click(function(){
		$("nav").toggle()
		if($("nav").is(":visible")){
			$('#hamburger img').attr('src','images/icons/menu_open.svg');
		} else if($("nav").is(":hidden")){
			$('#hamburger img').attr('src','images/icons/menu.svg');
		}
	});

	/* Sets expand window height */
	$('.card, .button').click(function()
		{
			if(!$(".expand").is(":visible")){
			$(this).children('.expand').css('display', 'flex');
			$("#hamburger").hide()
			$(this).parent().append('<div id="blurry"></div>');
		}
	});

	$('.close').click(function(e){
	    $(this).parent(".expand").hide();
	    e.stopPropagation();
			$('#blurry').remove()
	    if($(window).width() < 1280) {
	      $("#hamburger").show()
	    } else {

	    }
	});



	/* Navigation */
	jQuery(function(){
	  jQuery('nav a').click(function(){
			$('nav a').removeClass('changed');
			$(event.target).addClass('changed');
	  });
	});
});
