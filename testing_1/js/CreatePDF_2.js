$('#pdf').click(function () {
    var form = $('.htmlValidation'),
        cache_width = form.width(),
        a4 = [595.28, 841.89]; // for a4 size paper width and height

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();



    var doc = new jsPDF();




    doc.addHTML($('#contents')[0], 0, 15, {
        background: '#fff'
    }, function() {
        doc.save('Report - '+datetime+'.pdf');
        });
});