# WooCommerce Phone Number Validator (11 Digits)

Validates the phone number field on WooCommerce checkout to ensure it is exactly 11 digits.

## Description

This plugin adds a validation layer to the WooCommerce checkout billing phone field. It ensures that customers enter a valid 11-digit mobile number, which is common for specific regions (e.g., Bangladesh). 

### Features
- **Client-side Validation**: Instant feedback using JavaScript checks. Accepts widely used formats (e.g. `01711 123456`) but strips non-digits to ensure strictly 11 numbers.
- **Server-side Validation**: Robust PHP check to preventing invalid submissions even if JS is bypassed.
- **Localization**: Error messages are translatable.

## Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher
- WooCommerce installed and active

## Installation

1. Upload the plugin files to the `/wp-content/plugins/woo-phone-validator` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Done! The validation is automatically applied to the checkout page.

## Changelog

### 1.1
- Added server-side validation for better security.
- Improved JavaScript validation to handle spaces and dashes user-friendly.
- Added localization support for error messages.
- Security hardening (ABSPATH check).
- Tested up to WordPress 6.9.1.

### 1.0
- Initial release.
