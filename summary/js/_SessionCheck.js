function SessionCheck() {
    //alert("Working");
    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/session_retrive.php',
        type: 'GET',
        data: { SessionRetrieve: "Shatabdi1002@gmail.com"},
        success: function(response) {
            if(response != 0) {
                //alert("Omega");
                //showSnackBar("Loading Results, Please Wait...", 1000);
                document.getElementById("url").value = response;
                document.getElementById("summary").click();
            }
        }
    });
}
window.onload = SessionCheck;