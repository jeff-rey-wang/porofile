const recentlyPlayed = (username) =>{
    var numProfiles = $('.profile-container profile-root-class-name').length;
    appendProfile(username);
    if (numProfiles >= 5){
        $('#profile_placeholder').hide();
    }
}

$(document).ready(function(){
    $(".region-option").click(function(){
        $(".add-new-profile-popup-text02").text($(this).children().text());
    });
})
