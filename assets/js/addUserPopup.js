$('#add_new_user_button').click(()=>{
    var username = $('#add_new_user_input').val();
    var numProfiles = $('.profile-container profile-root-class-name').length;
    appendProfile(username)
    if (numProfiles >= 5){
        $('#profile_placeholder').hide();
    }
    
})

$('#banner_x_button').click(()=>{    
    $('#profile_placeholder').show();
})

