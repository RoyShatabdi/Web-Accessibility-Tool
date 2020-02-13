$('#summary').click(function() {
    var url = $('#url').val();
    var ch="";
    var counter=0;
    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/accessK.php',
        type: 'GET',
        data: { callFunc: url},
        success: function(response) {

            //response = response.replace(/,/g, '<br>');
            var arr = response.split(",");
            var i;
            $('.accessKey').html("");
            $('.accessKey').append('<h4><u><i><strong>'+'Access Key Check: '+'</strong></i></u></h4>');
            for (i = 0; i < arr.length; i++) {
                var nil = arr[i];
                var j;
                for (j = 0; j < nil.length; j++) {
                    var line = nil.charAt(j);
                    ch=ch+line;
                    if(line==="&")
                    {
                        var chr=line+nil.charAt(j+1)+nil.charAt(j+2)+nil.charAt(j+3);
                        if(chr=="&gt;") {
                            counter = counter + 1;
                            if(counter==2)
                            {
                                ch=ch+nil.charAt(j+1)+nil.charAt(j+2)+nil.charAt(j+3);
                                break;
                            }
                        }
                    }
                }
                $('.accessKey').append('<center><h5 class="alert alert-success"><i class="fa fa-key" aria-hidden="true"></i>&nbsp;<strong>' + ch + '</strong></h5></center>');
                //alert(ch +counter);
                ch="";
                counter=0;
            }
        }
    });
});