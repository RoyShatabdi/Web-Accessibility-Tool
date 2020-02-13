$("#summary").click(function(e) {
    var url = $('#url').val();
    var validate = "https://validator.w3.org/check?uri="+url+"&output=json";
    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/SSL.php',
        type: 'GET',
        data: { callFunc: validate},
        success: function(response) {
            /*shatabdi1002@gmail.com*/
            var json = $.parseJSON(response);

            $('.SSL').html("");
            $('.SSL').html('<h4><u><i><strong>'+'SSL Certificate Check: '+'</strong></i></u></h4>');

            var checkedURL = json.url;

            if(checkedURL.indexOf("https://") !== -1){
                $('.SSL').append('<center><h5 class="alert alert-success"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;<strong>' + "Congratulations! This Site is Secured (valid HTTPS)" + '</strong></h5></center>');
            }
            else{
                $('.SSL').append('<center><h5 class="alert alert-warning">' + "Sorry! It Seems Its Not Secured (no valid HTTPS)" + '</h5></center>');
            }
        }
    });
});