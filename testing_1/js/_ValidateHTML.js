$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();
        var url = $('#header-search-field').val();
        $.ajax({
            url: 'php/session_store.php',
            type: 'GET',
            data: { SessionStart: url},
            success: function(response) {
                valedate();
            }
        });
    }
});


/*Validate*/
function valedate() {
    var url = $('#header-search-field').val();
    var validate = "https://validator.w3.org/check?uri="+url+"&output=json";
    $.ajax({
        url: 'php/validateHTML.php',
        type: 'GET',
        data: { callFunc: validate},
        success: function(response) {
            /*shatabdi1002@gmail.com*/
            var json = $.parseJSON(response);

            //$('.results').html(response);


            $('.results').html("");

            var checkedURL = json.url;
            $('.results').append('<center>' + '<h5 class="alert alert-info">URL:&nbsp;<a href="' + checkedURL + '" class="alert-link">'+checkedURL+'</a> </h5>' + '</center>');

            $('.results').append('<br />');

            var masseges = json.messages;
            //alert(masseges);

            for (var i in masseges) {
                var msg = masseges[i];

                if(msg.type === 'error') {
                    $('.results').append('<h4 class="btn btn-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;' + "Error" +'&nbsp;' + '</h4>'+'<h5><strong>'+msg.message+'</strong></h5>');

                    if (msg.lastLine != undefined && msg.firstColumn != undefined && msg.lastColumn != undefined) {
                    $('.results').append('<code><strong>' + "From line " + msg.lastLine + ", column " + msg.firstColumn + "; to line " + msg.lastLine + ", column " + msg.lastColumn + '</strong></code><br/>');
                }

                if(msg.extract != undefined) {
                    $('.results').append('<strong><textarea class="alert alert-danger" rows="3" cols="100" readonly style="resize: none;">' + msg.extract + '</textarea></strong>');
                }

                }
                $('.results').append('<br />');

            }
            var div = document.getElementById("snackbar");
            div.className = div.className.replace("show", "");
        }
    });
}