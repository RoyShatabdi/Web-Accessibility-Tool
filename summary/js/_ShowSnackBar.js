function showSnackBar(msg, time){
    var div = document.getElementById("snackbar");
    div.innerHTML = msg;
    div.className = "show";
    setTimeout(function () {div.className = div.className.replace("show", "");}, time);
}