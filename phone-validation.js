
jQuery(document).ready(function($) {
    var phoneInput = $('input[name="billing_phone"]');

    function validatePhone() {
        var phoneVal = phoneInput.val();
        var isValid = /^\d{11}$/.test(phoneVal);

        $('#phone-warning').remove();

        if (!isValid) {
            phoneInput.css('border', '2px solid red');
            $('<div id="phone-warning" style="color:red; margin-top:5px;">অনুগ্রহ করে সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন।</div>').insertAfter(phoneInput);
        } else {
            phoneInput.css('border', '2px solid green');
        }

        return isValid;
    }

    phoneInput.on('input', function () {
        validatePhone();
    });

    $('form.checkout').on('checkout_place_order', function(e) {
        if (!validatePhone()) {
            // Prevent form submission
            return false;
        }
        return true;
    });
});
