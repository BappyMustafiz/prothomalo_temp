(function($){
  $(function(){

    $('.sidenav').sidenav();
    // $(".dropdown-toggle").dropdown();

    $('.dropdown-button').dropdown({
    	inDuration: 300,
    	outDuration: 225,
    	constrainWidth: true,
    	hover: true,
    	gutter: 0,
    	coverTrigger: false,
    	alignment: 'left',
    	stopPropagation: false
    });
    // tabs
    $('.tabs').tabs();
    $('.slider').slider();

  }); // end of document ready
  // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
})(jQuery); // end of jQuery name space
