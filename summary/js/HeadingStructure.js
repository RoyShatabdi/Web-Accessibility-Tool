<!--Heading Structure-->
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

    //alert(url);

    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/headingValidation_NEW.php',
        type: 'GET',
        data: { callFunc: url},
        success: function(response) {
            //$('.headingStructure').append('<center>' + '<h5>' + response + '</h5>' + '</center>');

            var arr = response.split("~");
            var i;
            $('.headingStructure').html("");
            $('.headingStructure').append('<h4><u><i><strong>'+'Heading Structure: '+'</strong></i></u></h4>');
            $('.headingStructure').append('<div class="content well well-lg"></div>');
            for (i = 0; i < arr.length; i++) {
                var singleLine = arr[i];

                //$('.headingStructure').append('<center>' + '<h5>' + singleLine + '</h5>' + '</center>');

                textSeparator(singleLine);
            }
        }
    });
});


function textSeparator(line) {

    var j;
    var data = "";
    var headingType = "";

    var imageflag = false;
    var srcflag = false;

    for (j = 0; j < line.length; j++) {
        var ch = line.charAt(j);

        var chs=ch+line.charAt(j+1)+line.charAt(j+2)+line.charAt(j+3);
        if(chs==="&lt;")
        {
            flag = true;

            if(line.charAt(j+4) === "h")
            {
                headingType = line.charAt(j+4)+line.charAt(j+5);
            }
        }

        if(chs==="&gt;")
        {
            flag = false;
        }

        if(flag == true)
        {
            continue;
        }

        data = data + ch;
    }
    //alert(line);
    var space = "";
    data = data.replace(/&gt;/g, '');
    var headingNumber = headingType.charAt(1);
    headingType = '<strong>'+headingType+'</strong>';

    if(data != "") {
        var reformat = "&lt;"+headingType+"&gt;"+data+"&lt;"+"/"+headingType+"&gt;";

        for(var i=0; i< (headingNumber*8); i++){
            space = space + '&nbsp;'
        }

        reformat = space+reformat;
        $('.content').append('<h5>'+ reformat +'</h5>');
    }
}
