$("#search").click(function(e) {
    //alert("Close Button Pressed");
    $.ajax({
        url: 'php/sessionDestroy.php',
        type: 'GET',
        success: function(response) {
            /*shatabdi1002@gmail.com*/
            location.reload();
        }
    });
 });