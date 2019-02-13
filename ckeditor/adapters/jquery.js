var nd = function () {
    $('textarea.editor').ckeditor();

    $('textarea').ckeditor(function (textarea) {
        // Callback function code.
    });

    $('textarea').ckeditor({
        uiColor: '#9AB8F3'
    });

    $('#jquery_ckeditor')
        .ckeditor(function () { /* Callback function code. */ }, { uiColor: '#9AB8F3' })
        .ckeditor(callback2);

    $('.editors')
        .ckeditor(function () {
            // This function will be called repeatedly (as many times as many elements have the 'editors' class).
        });

    $.when($('.editors').ckeditor().promise).then(function () {
        // Now all editors have already been created.
    });

    var editor = $('.jquery_ckeditor').ckeditor().editor;
    alert(editor.checkDirty());

    // Get the editor data.
    var data = $('textarea.editor').val();
    // Set the editor data.
    $('textarea.editor').val('My new content');

    $.when($('#editor').val('foo')).then(function () {
        // Now you are sure that the data is set.
    });

    $.when($('.editors').val('foo')).then(function () {
        // All of editors have set data.
    });

    $('textarea').ckeditor();

    $('form').ajaxSubmit({
        beforeSubmit: function () {
            // The textarea is already updated now and has the same value as the editor, so you can validate it.
        }
    });

    $('.editor').ckeditor().on('getData.ckeditor', function (event, editor, data) {
        // If you want to convert the data to upper case whenever you get a value.
        data.dataValue = data.dataValue.toUpperCase();
    });

}