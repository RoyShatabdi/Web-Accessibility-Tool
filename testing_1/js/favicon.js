$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        //alert("Enter Pressed");
        e.preventDefault();
        var url = $('#header-search-field').val();
        var finalURL = url /*+ "site/favicon.ico"*/ ;
        //alert(url);
        $.ajax({
            url: 'php/session_store.php',
            type: 'GET',
            data: { SessionStart: url},
            success: function(response) {
                /*var div = document.getElementById("snackbar");
                div.className = div.className.replace("show", "");*/

                $('.results').html("");
                //showSnackBar("Session Saved", 1000);
                $('.results').append('<iframe src="php/target_url.php" width="925" height="2400" frameborder="0" ></iframe>');

   

            }
        });
    }
});
