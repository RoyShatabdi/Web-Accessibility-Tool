$('#summary').click(function() {
    var url = $('#url').val();
    //alert(url);
    var validate = "https://validator.w3.org/check?uri="+url+"&output=json";
    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/validateHTML.php',
        type: 'GET',
        data: { callFunc: validate},
        success: function(response) {
            var json = $.parseJSON(response);

            $('.htmlValidation').html("");
            $('.htmlValidation').html('<h4><u><i><strong>'+'HTML Validations: '+'</strong></i></u></h4>');

            var checkedURL = json.url;

            $('.htmlValidation').append('<center>' + '<h5 class="alert alert-info">URL:&nbsp;<a href="' + checkedURL + '" class="alert-link">'+checkedURL+'</a> </h5>' + '</center>');
            $('.htmlValidation').append('<br />');

            var masseges = json.messages;

            for (var i in masseges) {
                var msg = masseges[i];

                if(msg.type === 'error') {
                    $('.htmlValidation').append('<h4 class="btn btn-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;' + "Error" +'&nbsp;' + '</h4>'+'<h5><strong>'+msg.message+'</strong></h5>');

                    if (msg.lastLine != undefined && msg.firstColumn != undefined && msg.lastColumn != undefined) {
                        $('.htmlValidation').append('<code><strong>' + "From line " + msg.lastLine + ", column " + msg.firstColumn + "; to line " + msg.lastLine + ", column " + msg.lastColumn + '</strong></code><br/>');
                    }

                    if(msg.extract != undefined) {
                        $('.htmlValidation').append('<strong><textarea class="alert alert-danger" rows="3" cols="100" readonly style="resize: none;">' + msg.extract + '</textarea></strong><br/>');
                    }

                }
            }

        }
    });
});