jQuery(document).ready(function($) {
    var phoneInput = $('input[name="billing_phone"]');
    var form = $('form.checkout');

    function validatePhone() {
        var rawVal = phoneInput.val();
        // Remove non-digit characters for validation check
        var cleanVal = rawVal.replace(/\D/g, ''); 
        
        // Check if it has exactly 11 digits
        var isValid = /^\d{11}$/.test(cleanVal);
        
        var parentParams = phoneInput.closest('.form-row');
        
        // Remove existing error message
        parentParams.find('.wcpnv-error').remove();

        if (rawVal.length > 0 && !isValid) {
            parentParams.removeClass('woocommerce-validated').addClass('woocommerce-invalid wcpnv-invalid');
            
            // Add error message if not present (WooCommerce might add its own, we want ours specifically if it's a format error)
            // But usually, adding the class is enough for theme styling. 
            // We will add a small text alert as per original plugin intent but cleaner.
             $('<div class="wcpnv-error" style="color:#e2401c; margin-top:5px; font-size:small;">' + wcpnv_vars.error_message + '</div>').insertAfter(phoneInput);
             
             return false;
        } else if (isValid) {
            parentParams.removeClass('woocommerce-invalid wcpnv-invalid').addClass('woocommerce-validated');
            return true;
        }
        
        return true; // unexpected case, let's treat as valid to not block unless explicitly wrong
    }

    // Validate on blur
    form.on('blur change', 'input[name="billing_phone"]', function () {
        validatePhone();
    });

    // Validate on submit
    form.on('checkout_place_order', function() {
        if (!validatePhone()) {
            // Scroll to the error
            $('html, body').animate({
                scrollTop: phoneInput.offset().top - 100
            }, 1000);
            return false;
        }
        return true;
    });
});
