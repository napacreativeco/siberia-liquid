(function($) {

    // On Load
    $(document).ready(function() {
        // console.log('document is ready man');
    });


    // Hero Links
    $('.hero-nav--link').on('click', function(e) {
        e.preventDefault();

        var sect = $(this).attr('data-title');

        // Hide All Components
        $('.page-component').css("display", "none");

        // Then, show the proper Component
        setTimeout(function() {
          $('.'+sect).css({
              'display': 'flex'
          });
        }, 100);

        // Scroll to Component

        console.log($(this).attr('data-title'));
    });
    
})(jQuery);