<!--Image ALT-->
$('#summary').click(function() {
    var url = $('#url').val();
    if(url.indexOf("https://") !== -1 || url.indexOf("http://") !== -1){
        //Do Nothing
    }
    else {
        url = "https://"+url;
    }
    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/metatag.php',
        type: 'GET',
        data: { imageFunc: url},
        success: function(response) {

            //saveSession();

            var title = response.replace('&lt;title&gt;', '')

            //alert("Title: "+response.replace('&lt;title&gt;', ''));
            //alert("Title Length: "+response.length);
            $('.metatag').html('');
            $('.metatag').append('<div class="title well well-lg">');
            $('.title').append('<button type="button" class="btn btn-primary" disabled>Meta Title</button>');
            $('.title').append('<h3>The meta title of your page has a length of '+title.length+' characters. Most search engines will truncate meta titles to 70 characters.</h3>'+'<br/>');
            $('.title').append('<h5 style="color: grey"><i class="glyphicon glyphicon-chevron-right"></i>&nbsp;<strong>'+title+'</strong></h5>');
            $('.metatag').append('</div>');

            description(url);
        }
    });
});

function description(url) {
    $.ajax({
        url: '/Apollyon/Apollyon/testing_1/php/metatag_description.php',
        type: 'GET',
        data: { imageFunc: url},
        success: function(response) {
            //alert("Description: "+response);
            //alert("Description Length: "+response.length);

            var arr = response.split("^");
            var i;
            for (i = 0; i < arr.length; i++) {
                var singleLine = arr[i];
                if(singleLine != "") {
                    singleLine = singleLine + "&gt;";
                    if(singleLine.toUpperCase().indexOf("description".toUpperCase()) !== -1){
                        textSeparatorForDescription(singleLine);
                    }
                }
            }
        }
    });
}

function textSeparatorForDescription(line) {

     //alert(line);

     var j;

     var description = "";

     var flag = false;

     for (j = 0; j < line.length; j++) {

         var ch = line.charAt(j);

         var chStart=line.charAt(j-14)+line.charAt(j-13)+line.charAt(j-12)+line.charAt(j-11)+line.charAt(j-10)+line.charAt(j-9)+line.charAt(j-8)+line.charAt(j-7)+line.charAt(j-6)+line.charAt(j-5)+line.charAt(j-4)+line.charAt(j-3)+line.charAt(j-2)+line.charAt(j-1);

         var chStop = ch+line.charAt(j+1)+line.charAt(j+2)+line.charAt(j+3)+line.charAt(j+4)+line.charAt(j+5);

         //alert(chStart);

         if(chStart==="content=&quot;")
         {
            flag = true;
         }

         if(chStop==="&quot;")
         {
             flag = false;
         }

         if(flag == true) {
             description = description + ch;
         }
     }

     //alert(description);
     //alert(description.length);
    $('.metatag').append('<div class="description well well-lg"></div>');
    $('.description').append('<button type="button" class="btn btn-primary" disabled>Meta Description</button>');
    $('.description').append('<h3>The meta description of your page has a length of '+description.length+' characters. Most search engines will truncate meta description to 160 characters.</h3>'+'<br/>');
    $('.description').append('<h5 style="color: grey"><i class="glyphicon glyphicon-chevron-right"></i>&nbsp;<strong>'+description+'</strong></h5>');
    $('.metatag').append('</div>');
 }