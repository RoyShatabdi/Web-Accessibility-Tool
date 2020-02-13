$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        //alert("Key Pressed");
        e.preventDefault();
        var urlToValidate = $('#header-search-field').val();
        var myKEY = "AIzaSyDimRB7p_99c9MGVyBnTz-A-NQ6cwq9lo4";
        var url_req = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url='+urlToValidate+'&key='+myKEY;
        var results = [];
        $.ajax({
            url: 'php/PageSpeedAPI.php',
            type: 'GET',
            data: { callFunc: url_req},
            success: function(response) {
                saveSession();
                var json = $.parseJSON(response);
                $('.results').html("");
                $('.suggestions').html("");
                $('.view').html("");

                $('.suggestions').html('<button type="button" class="btn btn-danger" disabled>'+'Suggestions Summary'+'</button>');

                $('.results').html('<div class="alert alert-success" role="alert"><h4>'+'URL: ' +'<a href="'+json.id+'">'+json.id+'</a>' +'</h4></div>'+'<div class="alert alert-success"><h4>Title: ' + json.title +'</h4></div>' + '<div class="alert alert-success"><h4><strong>Score: ' + json.score+'/100'+'</strong></h4></div>');
                //$('.results').append('<br />');
                var ruleResults = json.formattedResults.ruleResults;
                for (var i in ruleResults) {
                    var ruleResult = ruleResults[i];
                    if (ruleResult.ruleImpact < 3.0) continue;
                    $('.suggestions').append('<h4><strong>'+ruleResult.localizedRuleName+'</strong></h4>');
                    var data1 = ruleResult.urlBlocks;
                    for (var j in data1) {
                        var dta1 = data1[j];
                        var statements = dta1.header.format;
                        var gc = statements;
                        if(statements.indexOf("$")>-1) {
                            var args = dta1.header.args;
                            var length = args.length;
                            for (var n = 0; n < length; n++) {
                                gc = gc.replace("$" + (n + 1), args[n].value)
                            }
                        }
                        $('.suggestions').append('<h5 style="color: red;"><strong>'+gc+'</strong></h5>');
                        var dta2 = dta1.urls;
                        $('.suggestions').append('<div class="fix well well-sm">');
                        for(var k in dta2){
                            var dta3 = dta2[k];
                            var urls = dta3.result.format;
                            var arguments = dta3.result.args;
                            var len = arguments.length;
                            var fn =urls;
                            for(var m = 0; m<len; m++)
                            {
                                fn = fn.replace("$"+(m+1), arguments[m].value)
                            }
                            //alert(arguments.length);
                            $('.fix').append(fn);
                            $('.fix').append('<br />');
                        }
                        $('.suggestions').append('</div>');
                    }
                }
                var div = document.getElementById("snackbar");
                div.className = div.className.replace("show", "");
            }
        });
    }
});
