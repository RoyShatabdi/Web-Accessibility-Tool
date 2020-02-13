<!--Image ALT-->
var altCounter = 0;

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

    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/image_alt.php',
        type: 'GET',
        data: { imageFunc: url},
        success: function(response) {

            //saveSession();

            //alert("Success");
            //$('.imageAltAttribute').append('<center>' + '<h5>' + response + '</h5>' + '</center>');

            var arr = response.split("^");
            var i;
            var counter = 0;
            $('.results').html("");
            $('.results').append('<div class="counters alert alert-warning"></div>');
            for (i = 0; i < arr.length; i++) {
                var singleLine = arr[i];
                if(singleLine != "") {
                    singleLine = singleLine + "&gt;"
                    //alert(singleLine);
                    counter++;
                    textSeparatorForImage(url, singleLine);
                    //$('.results').append('<h5>' + '<strong>' +singleLine + '</strong>' + '</h5>');
                }
            }
            $('.counters').html("");
            counters(counter, altCounter);
            altCounter = 0;
        }
    });
});

function textSeparatorForImage(url, line) {

     //alert(line);

     var j;

     var source = "";
     var alt = "";

     var imageFlag = false;
     var imageAltFlag = false;

     for (j = 0; j < line.length; j++) {

         var ch = line.charAt(j);

         var chStart=line.charAt(j-10)+line.charAt(j-9)+line.charAt(j-8)+line.charAt(j-7)+line.charAt(j-6)+line.charAt(j-5)+line.charAt(j-4)+line.charAt(j-3)+line.charAt(j-2)+line.charAt(j-1);

         var chAlternateStart=line.charAt(j-5)+line.charAt(j-4)+line.charAt(j-3)+line.charAt(j-2)+line.charAt(j-1);

         var chStop = ch+line.charAt(j+1)+line.charAt(j+2)+line.charAt(j+3)+line.charAt(j+4)+line.charAt(j+5);

         //alert(chAlternateStart);

         if(chStart==="src=&quot;" || chAlternateStart==="src='")
         {
            //alert("Start: "+ch);
            imageFlag = true;
         }

         if(chStart==="alt=&quot;" || chAlternateStart==="alt='")
         {
             //alert("Start: "+ch);
             imageAltFlag = true;
         }


         //alert(imageFlag+": "+ch);

         if(chStop==="&quot;" || ch==="'" || ch==="?")
         {
             //alert("Stop: "+ch);
             imageFlag = false;
             imageAltFlag = false;
         }

         if(imageFlag == true) {
             //alert("Gargi: "+ch);
             source = source + ch;
         }

         if(imageAltFlag == true) {
             //alert("Gargi: "+ch);
             alt = alt + ch;
         }
     }

    if(source.indexOf("https://") !== -1 || source.indexOf("http://") !== -1 || source.indexOf("www.") !== -1){
        //Do Nothing
    }
    else{
        var newURL = urlFormater(url);
        source = newURL + source;
    }

    var colorFlag = false;

    if(alt ==""){
        altCounter++;
        colorFlag = true;
    }

     if(source != "") {
         if(colorFlag == true){
             $('.results').append('<img class="img-thumbnail" src="' + source + '" height="60" width="60">'+ '<strong>' +"&nbsp;&nbsp;&nbsp;&nbsp;"+'<textarea rows="1" cols="100" readonly style="resize: none; background-color: #f2dede; border-color: palevioletred; border-radius: 5px;">'+line +'</textarea>'+ '</strong>' +'<br/><br/>');
         }
         else{
             $('.results').append('<img class="img-thumbnail" src="' + source + '" height="60" width="60">'+ '<strong>' +"&nbsp;&nbsp;&nbsp;&nbsp;"+'<textarea rows="1" cols="100" readonly style="resize: none; background-color: #5cb85c; border-color: green; border-radius: 5px;">'+line +'</textarea>'+ '</strong>' +'<br/><br/>');
         }

         //$('.results').append('<h5>' + '<strong>' +line + '</strong>' + '</h5>');
         //$('.results').append('<center>' + '<h5>' + '<strong>Alt: </strong>' + alt + '</h5>' + '</center>');
     }
 }

function counters(counter, altCounter) {
    if(altCounter == 0){
        $('.counters').append('<center>'+'<h4><strong>'+"Your Webpage has "+counter+" image tags and all of them contain the required &quot;alt&quot; tag."+'</strong></h4>'+'</center>');
        return null;
    }
    /*if(altCounter==counter){
     $('.counters').append('<center>'+'<h4>'+"Your Webpage has "+counter+" image tags and none of them does not contain the required &quot;alt&quot; tag."+'</h4>'+'</center>');
     return null;
     }*/
    $('.counters').append('<center>'+'<h4><strong>'+"Your Webpage has "+counter+" image tags and "+altCounter+" of them does not contain the required &quot;alt&quot; tag."+'</strong></h4>'+'</center>');
}

function urlFormater(url) {
    var newURL = "";
    var flag = false;
    for (var j = 0; j < url.length; j++) {
        var ch = url.charAt(j);
        var init = ch+url.charAt(j+1)+url.charAt(j+2)+url.charAt(j+3);
        newURL = newURL +ch;

        if(init === "www."){
            flag = true;
        }

        if(flag == true && ch=="/"){
            break;
        }
    }
    //alert(newURL);
    return newURL;
}
