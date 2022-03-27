$(function() {
    // Open aside bar
    $('#openAsideBar').on('click', function() {
        $('.asideFlexContainer').css('display', 'block');
    });
    
    // Close aside bar
    $('#closeAsideBar').on('click', function() {
        $('.asideFlexContainer').css('display', 'none');
    });

    // Make aside bar appear if the screen width was smaller than 960px and then got larger.
    $('body').on("mouseover", function() {
        if (document.body.scrollWidth >= 960) {
            mediaQueryFunction();
            }
        }
    );
    
    // Function for appearing aside bar on call
    function mediaQueryFunction(){
        $('.asideFlexContainer').css('display', 'block');
    }
});