// hardcoded data
var players = ["Tyv", "Boxerme", "jasminebrew", "qotato", "ElegantDisaster", "Ji&#353un"]
// inp : text field element
// arr : array of possible autocompleted values
function autocomplete(inp, arr) {
    // for highlighting selected elements
    var currentFocus;
    // event listener for input
    inp.addEventListener("input", function(e) {
        var list, match, i, val = this.value;
        // limit to displaying 5 items
        const displayLimit = 5; 
        var displayCount = 0; 

        // close existing autocomplete
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        
        // new DIV for displaying results
        list = document.createElement("DIV");
        list.setAttribute("id", this.id + "-autocomplete-list");
        list.setAttribute("class", "autocomplete-items");
        // append autocomplete DIV to form DIV
        // this.parentNode.appendChild(list);
        document.getElementById("search_user_section").appendChild(list);
        // loop existing usernames
        for (i = 0; i < arr.length; i++) {
            // match input string to data
            if (displayCount < displayLimit && arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                // create new DIV for matches
                match = document.createElement("DIV");
                match.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                match.innerHTML += arr[i].substr(val.length);
                // hidden input field for storing selected player's value
                match.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                // event listener for clicking on username
                match.addEventListener("click", function(e) {
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
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            // DOWN = increase the currentFocus variable
            currentFocus++;
            // highlight current element
            addActive(x);
        } else if (e.keyCode == 38) { //up
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
        if (currentFocus < 0) currentFocus = (x.length - 1);
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
