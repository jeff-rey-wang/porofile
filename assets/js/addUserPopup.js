$("#add_new_user_button").click(() => {
  var username = $("#add_new_user_input").val();
  console.log(username);
  var region = $(".add-new-profile-popup-text02").text();
  var regionregion = region.trim();
  console.log(regionregion);
  var numProfiles = $(".profile-container profile-root-class-name").length;
  if (
    username.localeCompare("qotato") != 0 &&
    username.localeCompare("jasminebrew") != 0 &&
    username.localeCompare("LemonT") != 0 &&
    username.localeCompare("Tyv") != 0 &&
    username.localeCompare("Boxerme") != 0
  ) {
    alert("Please input a working username!");
  } else if (regionregion === "Region") {
    alert("Please input a Region!");
  } else {
    appendProfile(username);
    if (numProfiles >= 5) {
      $("#profile_placeholder").hide();
    }
    $("#add_new_user_input").val("");
    $(".add-new-profile-popup-text02").text("Region");
    document.getElementById("add_new_profile_box").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
});

$("#add_new_x_button").click(() => {
  $("#add_new_user_input").val("");
  $(".add-new-profile-popup-text02").text("Region");
  document.getElementById("add_new_profile_box").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});
$("#banner_x_button").click(() => {
  $("#profile_placeholder").show();
});
