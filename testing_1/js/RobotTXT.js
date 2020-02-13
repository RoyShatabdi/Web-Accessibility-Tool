<!--Robot-->
$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();

        var url = $('#header-search-field').val();

        if(url.indexOf("https://") !== -1 || url.indexOf("http://") !== -1){
            //alert("Present");
            //Do Nothing
        }
        else {
            //alert("Not Present");
            url = "https://"+url;
        }

        var flag = false;
        var segmentOfURL = "";

        for(var i=0; i<url.length; i++){

            var setOfChars = url.charAt(i-3)+url.charAt(i-2)+url.charAt(i-1);

            if(setOfChars === "://"){
                flag = true;
            }

            if(url.charAt(i) === "/"){
                flag = false;
            }

            if(flag == true){
                segmentOfURL = segmentOfURL + url.charAt(i);
            }
        }

        segmentOfURL = "https://" + segmentOfURL + "/robots.txt"

        //alert(segmentOfURL );

        $.ajax({
            url: 'php/robot.php',
            type: 'GET',
            data: { robotFunc: segmentOfURL},
            success: function(response) {
                saveSession();
                //alert(response);
                var arr = response.split("^");

                $('.results').html("");

                if(arr.length == 1){
                    $('.results').append('<center>' + '<h5 class="alert alert-warning">' + response + '</h5>' + '</center>');
                }

                $('.results').append('<center>' + '<h5 class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;<strong>' + "Congratulations! The Site Has Robots.txt" + '</strong></h5>' + '</center>');
                $('.results').append('<center>' + '<h5 class="alert alert-info">Link to Robot.txt:&nbsp;<a href="' + segmentOfURL + '" class="alert-link">'+segmentOfURL+'</a> </h5>' + '</center>');

                $('.results').append('<div class="content well well-lg"></div>');

                for (i = 0; i < arr.length; i++) {
                    var lines = arr[i];
                    $('.content').append('<center>' + '<h4>' + lines + '</h4>' + '</center>');
                }

                //$('.results').append('</div>');
                var div = document.getElementById("snackbar");
                div.className = div.className.replace("show", "");
            }
        });
    }
});
