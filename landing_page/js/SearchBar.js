$('#header-search-field').on('keypress', function (e) {
    if(e.which === 13){
        e.preventDefault();
        var url = $('#header-search-field').val();
        $.ajax({
            url: '/testing_1/php/session_store.php',
            type: 'GET',
            data: { SessionStart: url},
            success: function(response) {
                //alert("Enter Pressed");
                window.location.replace("/testing_1/index.php");
            }
        });
    }
});

