$('#rpw_user1_container').click(()=>{
    var username = $('#rpw_user1_name_text').val();
    var numProfiles = $('.profile-container profile-root-class-name').length;
    appendProfile(username)
    if (numProfiles >= 5){
        $('#profile_placeholder').hide();
    }
    
})

$('#rpw_user2_container').click(()=>{
    var username = $('#rpw_user2_name_text').val();
    var numProfiles = $('.profile-container profile-root-class-name').length;
    appendProfile(username)
    if (numProfiles >= 5){
        $('#profile_placeholder').hide();
    }
    
})

$(document).ready(function(){
    $(".region-option").click(function(){
        $(".add-new-profile-popup-text02").text($(this).children().text());
    });
})