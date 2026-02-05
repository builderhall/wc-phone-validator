<?php
/*
Plugin Name: WooCommerce Phone Number Validator (11 Digits)
Plugin URI: https://builderhall.com/
Description: Validates the phone number field on WooCommerce checkout to ensure it is exactly 11 digits.
Version: 1.1
Author: Fattain Naime
Requires at least: 6.0
Requires PHP: 7.4
Tested up to: 6.9.1
*/

defined('ABSPATH') || exit;

// Enqueue the custom JS script on the checkout page
add_action('wp_enqueue_scripts', 'wcpnv_enqueue_validation_script');
function wcpnv_enqueue_validation_script()
{
    if (is_checkout()) {
        wp_enqueue_script('wcpnv-checkout-validation', plugin_dir_url(__FILE__) . 'phone-validation.js', array('jquery'), '1.1', true);

        wp_localize_script('wcpnv-checkout-validation', 'wcpnv_vars', array(
            'error_message' => __('অনুগ্রহ করে সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন।', 'woocommerce-phone-validator')
        ));
    }
}

// Server-side validation
add_action('woocommerce_checkout_process', 'wcpnv_validate_billing_phone');
function wcpnv_validate_billing_phone()
{
    $billing_phone = isset($_POST['billing_phone']) ? sanitize_text_field($_POST['billing_phone']) : '';

    // Remove non-digit characters
    $clean_phone = preg_replace('/[^0-9]/', '', $billing_phone);

    if (!empty($billing_phone) && !preg_match('/^\d{11}$/', $clean_phone)) {
        wc_add_notice(__('The phone number must be exactly 11 digits.', 'woocommerce-phone-validator'), 'error');
    }
}
?>