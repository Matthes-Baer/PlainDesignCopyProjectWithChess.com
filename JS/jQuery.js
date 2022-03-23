$(function() {
    $('#openAsideBar').on('click', function() {
        $('.asideFlexContainer').css('display', 'block');
    });
    
    $('#closeAsideBar').on('click', function() {
        $('.asideFlexContainer').css('display', 'none');
    });

    $('body').on("mouseover", function() {
        if (document.body.scrollWidth >= 960) {
        mediaQueryFunction();
        }
    })

    function mediaQueryFunction(){
        $('.asideFlexContainer').css('display', 'block');
    }
});