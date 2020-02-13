function saveSession() {
    var url = $('#header-search-field').val(); // url provided by the user

// Executes the session_store.php 
    $.ajax({
        url: 'php/session_store.php',
        type: 'GET',
        data: { SessionStart: url},
        success: function(response) {
            /*shatabdi1002@gmail.com*/
        }
    });
}

