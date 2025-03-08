$(document).ready(function() {
    let count = 0;
    $('.my_button').click(function() {
        count++;
        $('#clickCount').text(count);
    });
});
