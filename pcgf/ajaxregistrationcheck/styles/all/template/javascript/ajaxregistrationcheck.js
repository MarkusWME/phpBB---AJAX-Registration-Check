var pcgfAJAXRegistrationCheckUsername = $('#pcgf-ajaxregistrationcheck-username');
var pcgfAJAXRegistrationCheckEMail = $('#pcgf-ajaxregistrationcheck-email');
var pcgfAJAXRegistrationCheckPassword = $('#pcgf-ajaxregistrationcheck-password');
var pcgfAJAXRegistrationCheckConfirmPassword = $('#pcgf-ajaxregistrationcheck-confirm-password');

var pcgfAJAXRegistrationCheckEMailRule = new RegExp('^[A-Za-z0-9\.!#\$%&\'\*\+-/=\?\^_`\{\|\}~\.]*@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$', 'i');
pcgfAJAXRegistrationCheckUsernameRule = new RegExp(pcgfAJAXRegistrationCheckUsernameRule, 'i');

function setInvalid(message, messageField, field) {
    messageField.removeClass('valid').addClass('invalid');
    messageField.html(message);
    field.get(0).setCustomValidity(message);
}

function setValid(message, messageField, field) {
    messageField.removeClass('invalid').addClass('valid');
    messageField.html(message);
    field.get(0).setCustomValidity('');
}

function setLoading(message, messageField, field) {
    messageField.removeClass('invalid').removeClass('valid');
    messageField.html('<div class="loading-circle"><div class="circle1 circle"></div><div class="circle2 circle"></div><div class="circle3 circle"></div><div class="circle4 circle"></div><div class="circle5 circle"></div><div class="circle6 circle"></div><div class="circle7 circle"></div><div class="circle8 circle"></div><div class="circle9 circle"></div><div class="circle10 circle"></div><div class="circle11 circle"></div><div class="circle12 circle"></div></div>&nbsp;&nbsp;&nbsp;' + message);
    field.get(0).setCustomValidity('');
}

$(document).ready(function() {
    var usernameField = $('#username');
    pcgfAJAXRegistrationCheckUsername.insertAfter(usernameField);
    usernameField.on('keyup', function() {
        var value = $(this).val();
        if (value.length < pcgfAJAXRegistrationCheckUsernameMin || value.length > pcgfAJAXRegistrationCheckUsernameMax || value.match(pcgfAJAXRegistrationCheckUsernameRule) === null) {
            setInvalid(pcgfAJAXRegistrationCheckUsernameInvalidBoundaries, pcgfAJAXRegistrationCheckUsername, $(this));
        } else {
            setLoading(pcgfAJAXRegistrationCheckLoading, pcgfAJAXRegistrationCheckUsername, $(this));
            $.ajax({
                url: pcgfAJAXRegistrationCheckUsernameCheckLink,
                type: 'POST',
                data: {'search': value},
                success: function(result) {
                    if (result[0] === 'OK') {
                        setValid(result[1], pcgfAJAXRegistrationCheckUsername, usernameField);
                    } else if (result[0] === 'INVALID QUERY') {
                        setLoading(result[1], pcgfAJAXRegistrationCheckUsername, usernameField);
                    } else {
                        setInvalid(result[1], pcgfAJAXRegistrationCheckUsername, usernameField);
                    }
                }
            });
        }
    });
    usernameField.trigger('keyup');
    var eMailField = $('#email');
    pcgfAJAXRegistrationCheckEMail.insertAfter(eMailField);
    eMailField.on('keyup', function() {
        var value = $(this).val();
        if (value.match(pcgfAJAXRegistrationCheckEMailRule) === null) {
            setInvalid(pcgfAJAXRegistrationCheckEMailInvalid, pcgfAJAXRegistrationCheckEMail, $(this));
        } else {
            setLoading(pcgfAJAXRegistrationCheckLoading, pcgfAJAXRegistrationCheckEMail, $(this));
            $.ajax({
                url: pcgfAJAXRegistrationCheckEMailCheckLink,
                type: 'POST',
                data: {'search': value},
                success: function(result) {
                    if (result[0] === 'OK') {
                        setValid(result[1], pcgfAJAXRegistrationCheckEMail, eMailField);
                    } else if (result[0] === 'INVALID QUERY') {
                        setLoading(result[1], pcgfAJAXRegistrationCheckEMail, eMailField);
                    } else {
                        setInvalid(result[1], pcgfAJAXRegistrationCheckEMail, eMailField);
                    }
                }
            });
        }
    });
    eMailField.trigger('keyup');
});