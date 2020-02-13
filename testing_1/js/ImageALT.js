<!--Image ALT-->
var altCounter = 0; //Counts Number of <images> missing required 'alt'

$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();

        var url = $('#header-search-field').val(); // url provided by user
        //if no htps/http adding https to the inputted url
        if(url.indexOf("https://") !== -1 || url.indexOf("http://") !== -1){
            //Do Nothing
        }
        else {

            url = "https://"+url;
        }

        $.ajax({
            url: 'php/image_alt.php',
            type: 'GET',
            data: { imageFunc: url},
            success: function(response) { //Getting response from image_alt.php

                saveSession();

                var arr = response.split("^"); //splits a String object into an array of strings by separating the string into substrings.
                var i;
                var counter = 0; // Counts total number of image tags 
                $('.results').html(""); //results id of a div 
                for (i = 0; i < arr.length; i++) {
                    var singleLine = arr[i];
                    if(singleLine != "") {
                        singleLine = singleLine + "&gt;"
                        counter++;
                        textSeparatorForImage(url, singleLine);
                    }
                }
                $('.counters').html(""); //counters id in div
                counters(counter, altCounter); 
                altCounter = 0;
                // after whole page is loaded remove snackbar
                var div= document.getElementById("snackbar");
                div.className = div.className.replace("show", "");
            }
        });
    }
});


function textSeparatorForImage(url, line) {
    var j;
    var imageSrc = ""; // <imag src=--->
    var imageSrcAlt = ""; 

     var imageFlag = false;
     var imageAltFlag = false;

     for (j = 0; j < line.length; j++) {

         var ch = line.charAt(j); //current character

         var chStart=line.charAt(j-10)+line.charAt(j-9)+line.charAt(j-8)+line.charAt(j-7)+line.charAt(j-6)+line.charAt(j-5)+line.charAt(j-4)+line.charAt(j-3)+line.charAt(j-2)+line.charAt(j-1);

         var chAlternateStart=line.charAt(j-5)+line.charAt(j-4)+line.charAt(j-3)+line.charAt(j-2)+line.charAt(j-1);

         var chStop = ch+line.charAt(j+1)+line.charAt(j+2)+line.charAt(j+3)+line.charAt(j+4)+line.charAt(j+5);

         if(chStart==="src=&quot;" || chAlternateStart==="src='")
         {
            imageFlag = true;
         }

         if(chStart==="alt=&quot;" || chAlternateStart==="alt='")
         {
             imageAltFlag = true;
         }

         if(chStop==="&quot;" || ch==="'" || ch==="?")
         {
             imageFlag = false;
             imageAltFlag = false;
         }

         if(imageFlag == true) {
             imageSrc = imageSrc + ch;
         }

         if(imageAltFlag == true) {
             imageSrcAlt = imageSrcAlt + ch;
         }
     }
    // if it has any of http:// or https:// else add the bsae url
    if(imageSrc.indexOf("https://") !== -1 || imageSrc.indexOf("http://") !== -1 || imageSrc.indexOf("www.") !== -1){
        //Do Nothing
    }
    else{
        var newURL = urlFormater(url);
        imageSrc = newURL + imageSrc;
    }

    var colorFlag = false;

    if(imageSrcAlt ==""){
        altCounter++;
        colorFlag = true;
    }

     if(imageSrc != "") {
        if(colorFlag == true){
            $('.results').append('<img class="img-thumbnail" src="' + imageSrc + '" height="60" width="60">'+ '<strong>' +"&nbsp;&nbsp;&nbsp;&nbsp;"+'<textarea rows="1" cols="100" readonly style="resize: none; background-color: #f2dede; border-color: palevioletred; border-radius: 5px;">'+line +'</textarea>'+ '</strong>' +'<br/><br/>');
        }
        else{
            $('.results').append('<img class="img-thumbnail" src="' + imageSrc + '" height="60" width="60">'+ '<strong>' +"&nbsp;&nbsp;&nbsp;&nbsp;"+'<textarea rows="1" cols="100" readonly style="resize: none; background-color: #5cb85c; border-color: green; border-radius: 5px;">'+line +'</textarea>'+ '</strong>' +'<br/><br/>');
        }

         //$('.results').append('<h5>' + '<strong>' +line + '</strong>' + '</h5>');
         //$('.results').append('<center>' + '<h5>' + '<strong>Alt: </strong>' + imageSrcAlt + '</h5>' + '</center>');
     }
 }

function counters(counter, altCounter) {
    if(altCounter == 0){
        $('.counters').append('<center>'+'<h4><strong>'+"Your Webpage has "+counter+" image tags and all of them contain the required &quot;alt&quot; tag."+'</strong></h4>'+'</center>');
        return null;
    }
    $('.counters').append('<center>'+'<h4><strong>'+"Your Webpage has "+counter+" image tags and "+altCounter+" of them does not contain the required &quot;alt&quot; tag."+'</strong></h4>'+'</center>');
}

function urlFormater(url) {
    var newURL = "";
    var flag = false;
    for (var j = 0; j < url.length; j++) {
        var curentChar = url.charAt(j); // method returns the specified character from a string.
        var init = curentChar+url.charAt(j+1)+url.charAt(j+2)+url.charAt(j+3);
        newURL = newURL +curentChar;

        if(init === "www."){
            flag = true;
        }

        if(flag == true && curentChar=="/"){
            break;
        }
    }
    return newURL;
}
