const removeProfile = (username) =>{
    var id = `#a_user_profile_${username}`
    $(id).remove();
}