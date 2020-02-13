$('#summary').click(function() {
    var urlToValidate = $('#url').val();

    //alert(urlToValidate);

    var myKEY = "AIzaSyDimRB7p_99c9MGVyBnTz-A-NQ6cwq9lo4";

    var url_req = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url='+urlToValidate+'&key='+myKEY;

    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/PageSpeedAPI.php',
        type: 'GET',
        data: { callFunc: url_req},
        success: function(response) {

            var json = $.parseJSON(response);

            $('.pageSpeed').html("");

            $('.pageSpeed').html('<h2><u><i>'+'Google Page Speed: '+'</i></u></h2>');

            $('.pageSpeed').html('<div class="well well-sm"><h4>'+'URL: ' +'<a href="'+json.id+'">'+json.id+'</a>' +'</h4></div>'+'<div class="well well-sm"><h4>Title: ' + json.title +'</h4></div>' + '<div class="well well-sm"><h4><strong>Score: ' + json.score+'/100'+'</strong></h4></div>');
        }

    });
});