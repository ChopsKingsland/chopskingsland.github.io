if (location.search == "?modal=html") {
    $('#htmlModal').show();
    $('#pythonModal').hide();
} else if (location.search == "?modal=python") {
    $('#htmlModal').hide();
    $('#pythonModal').show().removeClass('hide');
} else {
    $('#htmlModal').hide();
    $('#pythonModal').hide();
}