
<?php
/*
Plugin Name: WooCommerce Phone Number Validator (11 Digits)
Plugin URI: https://builderhall.com/
Description: Validates the phone number field on WooCommerce checkout to ensure it is exactly 11 digits.
Version: 1.0
Author: Fattain Naime
*/

// Enqueue the custom JS script on the checkout page
add_action('wp_enqueue_scripts', 'wcpnv_enqueue_validation_script');
function wcpnv_enqueue_validation_script() {
    if (is_checkout()) {
        wp_enqueue_script('wcpnv-checkout-validation', plugin_dir_url(__FILE__) . 'phone-validation.js', array('jquery'), '1.0', true);
    }
}
?>
