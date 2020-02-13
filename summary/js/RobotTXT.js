<!--Robot-->
$('#summary').click(function() {
    var url = $('#url').val();



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
        url: '/Apollyon/Apollyon/testing_1/php/robot.php',
        type: 'GET',
        data: { robotFunc: segmentOfURL},
        success: function(response) {

            //alert(response);
            var arr = response.split("^");

            $('.robotTXT').html("");
            $('.robotTXT').html('<h4><u><i><strong>'+'Robot.txt Check: '+'</strong></i></u></h4>');

            if(arr.length == 1){
                $('.robotTXT').append('<center>' + '<h5 class="alert alert-warning"><strong>' + response + '</strong></h5>' + '</center>');
            }
            else {
                $('.robotTXT').append('<center>' + '<h5 class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;<strong>' + "Congratulations! The Site Has Robots.txt" + '</strong></h5>' + '</center>');
            }
        }
    });
});
