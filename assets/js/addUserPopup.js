$('#add_new_user_button').click(()=>{
    var username = $('#add_new_user_input').val();
    var numProfiles = $('.profile-container profile-root-class-name').length;
    appendProfile(username)
    if (numProfiles >= 5){
        $('#profile_placeholder').hide();
    }
    $('#add_new_user_input').val("");
    $(".add-new-profile-popup-text02").text("Region")
})

$('#add_new_x_button').click(()=>{
    $('#add_new_user_input').val("");
    $(".add-new-profile-popup-text02").text("Region")
})
$('#banner_x_button').click(()=>{    
    $('#profile_placeholder').show();
})

