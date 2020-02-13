<!--Heading Structure-->
$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();

        var url = $('#header-search-field').val(); // url provided by users

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
            url: 'php/headingValidation_NEW.php',
            type: 'GET',
            data: { callFunc: url},
            /*  getting all the Line separated with '~' */
            success: function(response) {
                //$('.headingStructure').append('<center>' + '<h5>' + response + '</h5>' + '</center>');

                saveSession();

                var arrayOfLines = response.split("~");
                var i; //Just for the loop
                $('.results').html("");
                for (i = 0; i < arrayOfLines.length; i++) {
                    var singleLine = arrayOfLines[i]; // one line in d array: singleLine

                    //$('.headingStructure').append('<center>' + '<h5>' + singleLine + '</h5>' + '</center>');

                    textSeparator(singleLine);
                }
            }
        });
    }
});


function textSeparator(line) {

    var j;
    var HeadingtagData = ""; 
    var headingType = "";

    var flag = false; // condition: ignoring anything between < & >

    for (j = 0; j < line.length; j++) {
        var eachCharacter = line.charAt(j);

        var groupOfCharacters=eachCharacter+line.charAt(j+1)+line.charAt(j+2)+line.charAt(j+3);
        if(groupOfCharacters==="&lt;")
        {
            flag = true;

            if(line.charAt(j+4) === "h")
            {
                headingType = line.charAt(j+4)+line.charAt(j+5);
            }
        }

        if(groupOfCharacters==="&gt;")
        {
            flag = false;
        }

        if(flag == true)
        {
            continue;
        }

      HeadingtagData = HeadingtagData + eachCharacter;
    }


    /*  Indentation of the H1-H6 */
    var space = "";
    HeadingtagData = HeadingtagData.replace(/&gt;/g, '');
    var headingNumber = headingType.charAt(1);
    headingType = '<strong>'+headingType+'</strong>';

    if(HeadingtagData != "") {
        var reformat = "&lt;"+headingType+"&gt;"+HeadingtagData+"&lt;"+"/"+headingType+"&gt;";

        for(var i=0; i< (headingNumber*8); i++){
            space = space + '&nbsp;'
        }

        reformat = space+reformat;
        $('.results').append('<h5>'+ reformat +'</h5>');
    }

    var div = document.getElementById("snackbar");
    div.className = div.className.replace("show", "");
}
