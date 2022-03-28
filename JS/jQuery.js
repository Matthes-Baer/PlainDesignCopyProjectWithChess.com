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

    const randomGamesToday = ["9,602,102", "8,991,301", "7,909,911", "10,301,102", "9,335,023"];
    const randomPlayingNow = ["187,301", "301,222", "219,401", "199,230", "255,552"];
    // IIFE for random "Games Today" and random "Playing Now"
    (function () {
        $('#gamesToday').text(randomGamesToday[Math.floor(Math.random() * randomGamesToday.length)]);
        $('#playingNow').text(randomPlayingNow[Math.floor(Math.random() * randomPlayingNow.length)]);
    })();
});