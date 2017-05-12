var pcgfAJAXRegistrationCheckUsername = $('#pcgf-ajaxregistrationcheck-username');
var pcgfAJAXRegistrationCheckEMail = $('#pcgf-ajaxregistrationcheck-email');
var pcgfAJAXRegistrationCheckPassword = $('#pcgf-ajaxregistrationcheck-password');
var pcgfAJAXRegistrationCheckConfirmPassword = $('#pcgf-ajaxregistrationcheck-confirm-password');

$(document).ready(function() {
    var usernameField = $('#username');
    pcgfAJAXRegistrationCheckUsername.insertAfter(usernameField);
    usernameField.on('keyup', function() {
        var value = $(this).val();
        if (value.length < pcgfAJAXRegistrationCheckUsernameMin || value.length > pcgfAJAXRegistrationCheckUsernameMax) {
            pcgfAJAXRegistrationCheckUsername.html(pcgfAJAXRegistrationCheckUsernameInvalidBoundaries).css('color', '#FF0000');
            $(this).get(0).setCustomValidity(pcgfAJAXRegistrationCheckUsernameInvalidBoundaries);
        } else {
            pcgfAJAXRegistrationCheckUsername.html('');
        }
    });
    usernameField.trigger('keyup');
});