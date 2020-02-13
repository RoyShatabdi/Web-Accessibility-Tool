$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();
        var url = $('#header-search-field').val(); // url provided by users
        var ch="";    // accesses and temporarily stores individual characters for a given line
        var counter=0; // counting number of '>'
        $.ajax({
            url: 'php/accessK.php',
            type: 'GET',
            data: { callFunc: url},
            success: function(response) {
                saveSession();

                //response = response.replace(/,/g, '<br>');
                var arrayOfLines = response.split(","); // splitting the lines and storing inside an array
                var i;
                $('.results').html("");
                for (i = 0; i < arrayOfLines.length; i++) {
                    var accessKey = arrayOfLines[i];
                    var j;
                    for (j = 0; j < accessKey.length; j++) {
                        var line = accessKey.charAt(j);
                        ch=ch+line;
                        if(line==="&")
                        {
                            var chr=line+accessKey.charAt(j+1)+accessKey.charAt(j+2)+accessKey.charAt(j+3);
                            if(chr=="&gt;") {
                                counter = counter + 1;
                                if(counter==2)
                                {
                                    ch=ch+accessKey.charAt(j+1)+accessKey.charAt(j+2)+accessKey.charAt(j+3);
                                    break;
                                }
                            }
                        }
                    }
                    $('.results').append('<center><h5 class="alert alert-success"><i class="fa fa-key" aria-hidden="true"></i>&nbsp;<strong>' + ch + '</strong></h5></center>');
                    //alert(ch +counter);
                    ch="";
                    counter=0;
                }

                var div = document.getElementById("snackbar");
                div.className = div.className.replace("show", "");
            }
        });
    }
});
