$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();
        var url = $('#header-search-field').val();
        var validate = "https://validator.w3.org/check?uri="+url+"&output=json";
        $.ajax({
            url: 'php/SSL.php',
            type: 'GET',
            data: { callFunc: validate},
            success: function(response) {
                saveSession(); // function to save the session
                /*shatabdi1002@gmail.com*/
                var json = $.parseJSON(response);

                $('.results').html("");

                var checkedURL = json.url;

                if(checkedURL.indexOf("https://") !== -1){
                    $('.results').append('<center><h5 class="alert alert-success"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;<strong>' + "Congratulations! This Site is Secured (valid HTTPS)" + '</strong></h5></center>');
                }
                else{
                    $('.results').append('<center><h5 class="alert alert-warning">' + "Sorry! It Seems Its Not Secured (no valid HTTPS)" + '</h5></center>');
                }
                var div = document.getElementById("snackbar");
                div.className = div.className.replace("show", "");
            }
        });
    }
});
