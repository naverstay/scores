$(function ($) {
    $('.js-check-empty').on('blur', function () {
        /* esling-disable */
        let field = $(this);
        /* esling-enable */
        field.toggleClass('_not-empty', field.val().length > 0);
    });

    $('.selectpicker').selectpicker();
});
