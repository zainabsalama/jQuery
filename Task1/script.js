$(document).ready(function() {
    $('#btnAdd').click(function() {
        let input = $('#taskInput').val();
        if (input) {
            $('.tasksBox').append('<div class = "added">' + input + '<button class = "btnDone">Done</button> <button class = "btnRemove">Remove</button>  </div>');
            $('#taskInput').val('');
        }
    });
    $('.tasksBox').on('click', '.btnRemove', function() {
        $(this).parent().fadeOut(200);
    });
    $('.tasksBox').on('click', '.btnDone', function() {
        $(this).parent().toggleClass('red');
    });

});