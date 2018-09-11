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

  }); // end of document ready
})(jQuery); // end of jQuery name space
