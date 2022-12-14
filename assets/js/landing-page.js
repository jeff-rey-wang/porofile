// hardcoded username data
var players = ["Tyv", "Boxerme", "jasminebrew", "qotato", "LemonT"];
// limit to adding 5 players per search
const addLimit = 5;
var addedPlayers = 0;

// autocomplete function
// inp : text field element
// arr : array of possible autocompleted values
function autocomplete(inp, arr) {
  // for highlighting selected elements
  var currentFocus;
  // event listener for input
  inp.addEventListener("input", function (e) {
    var list,
      match,
      i,
      val = this.value;
    // limit to displaying 5 items
    const displayLimit = 5;
    var displayCount = 0;

    // close existing autocomplete
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;

    // new DIV for displaying results
    list = document.createElement("DIV");
    list.setAttribute("id", this.id + "-autocomplete-list");
    list.setAttribute("class", "autocomplete-items");
    // append autocomplete DIV to form DIV
    document.getElementById("search_user_section").appendChild(list);
    // loop existing usernames
    for (i = 0; i < arr.length; i++) {
      // match input string to data
      if (
        displayCount < displayLimit &&
        arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        // create new DIV for matches
        match = document.createElement("DIV");
        match.innerHTML =
          "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        match.innerHTML += arr[i].substr(val.length);
        // hidden input field for storing selected player's value
        match.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        // event listener for clicking on username
        match.addEventListener("click", function (e) {
          // insert value to text field
          inp.value = this.getElementsByTagName("input")[0].value;
          // close list of autocomplete values
          closeAllLists();
        });
        list.appendChild(match);
        displayCount++;
      }
    }
  });
  // event listener for keypresses
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      // DOWN = increase the currentFocus variable
      currentFocus++;
      // highlight current element
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      // UP = decrease the currentFocus variable
      currentFocus--;
      // highlight current element
      addActive(x);
    } else if (e.keyCode == 13) {
      // If the ENTER key is pressed, prevent the form from being submitted, simulate a click on "active"
      e.preventDefault();
      if (currentFocus > -1 && x) {
        x[currentFocus].click();
      }
    }
  });
  // set "active" for highlighting current focus
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    // add class "autocomplete-active"
    x[currentFocus].classList.add("autocomplete-active");
  }
  // remove "active"
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  // close all list except for the one passed as argument
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  // close list when clicked away
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

$(document).ready(function () {
  // region onclick
  $(".search-user-dropdown-toggle").click(function () {
    if (!$(".search-user-dropdown-list").hasClass("expanded")) {
      $(".search-user-dropdown-list").addClass("expanded");
      $(".search-user-dropdown-list").css("display", "flex");
    } else {
      $(".search-user-dropdown-list").removeClass("expanded");
      $(".search-user-dropdown-list").css("display", "none");
    }
  });

  // select region
  $(".region-option").click(function () {
    $(".search-user-text").text($(this).children().text());
    $(".search-user-dropdown-list").removeClass("expanded");
    $(".search-user-dropdown-list").css("display", "none");
  });

  // add (region, username) pair
  $("#add_button").click(function () {
    var proceed = true;
    // check if region is selected
    if ($(".search-user-text").text() == "Region") {
      alert("Please select a region");
      return;
    }
    // check if username is selected
    if ($("#username_input").val() == "") {
      alert("Please enter a valid username");
      return;
    }
    // check if user exists
    if (!players.includes($("#username_input").val())) {
      alert(
        "Username not found\n\nFor the purpose of this demo, please use any of the following:\n\t Tyv \n\t Boxerme \n\t jasminebrew \n\t qotato \n\t LemonT "
      );
      $("#username_input").val("");
      return;
    }
    // check if user already being searched
    $(".username_text").each(function () {
      if ($("#username_input").val() == $(this).children().text()) {
        alert("Username already included below");
        $("#username_input").val("");
        proceed = false;
      }
    });
    if (addedPlayers >= addLimit) {
      alert("Cannot add more than 5 players");
      return;
    }
    if (proceed) {
      var addingPlayer =
        `
            <div id="added_user_section"
                class="added-user-container added-user-root-class-name"
            >
                <div class="added-user-container1">
                    <div id="region_container" class="added-user-region-container">
                        <span id="region_text"><span>` +
        $(".search-user-text").text() +
        `</span></span>
                    </div>
                    <div
                        id="username_container"
                        class="added-user-username-container"
                    >
                        <span class="username_text"><span>` +
        $("#username_input").val() +
        `</span></span>
                    </div>
                    <div id="trash_button" class="added-user-container2 button">
                        <svg
                        id="trash_icon"
                        viewBox="0 0 804.5714285714286 1024"
                        class="added-user-icon"
                        >
                        <path
                            d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"
                        ></path>
                        </svg>
                    </div>
                </div>
            </div>`;
      $(".landing-page-added-players-container").append(addingPlayer);
      addedPlayers++;
      // clear input field
      $("#username_input").val("");
    }
  });

  // remove added players
  $(".landing-page-added-players-container").on(
    "click",
    "#trash_icon",
    function (e) {
      var section = $(this).closest("#added_user_section");
      section.empty();
      section.remove();
      addedPlayers--;
    }
  );

  // view profiles
  // TODO: pass player names as queries
  $(".search-button-container1").click(function () {
    // queryString = "player1=name&player2=name2"
    var queryString = "";
    $(".username_text").each((index, element) => {
      queryString +=
        "player" + index + "=" + $(element).children().text() + "&";
    });
    // remove last "&"
    queryString = queryString.slice(0, -1);

    if (addedPlayers)
      window.location.href = "comparison-page.html?" + queryString;
    else alert("Please add a player");
  });
});
