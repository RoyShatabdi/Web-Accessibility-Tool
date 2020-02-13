function SessionChckAnother() {
    $.ajax({
        url: 'php/session_retrive.php',
        type: 'GET',
        data: { SessionRetrieve: "Shatabdi1002@gmail.com"},
        success: function(response) {
            if(response != 0) {
                /* While Loading the result pops-up a message*/
                showSnackBar("Loading Results, Please Wait...", 1000);
                /*Setting the input field value to the url stored in the session*/
                document.getElementById("header-search-field").value = response;
                /* Simulating Enter key press */
                var e = jQuery.Event("keypress"); // create a new jQuery.Event object
                e.which = 13; 
                e.keyCode = 13;
                $("#header-search-field").trigger(e); // trigger an keypress event
            }
        }
    });
}
window.onload = SessionChckAnother;