<?php

/**
 * @author    Adrian Góralczyk <adrian.goralczyk@vivaldi.net>
 * @copyright 2017 Adrian Góralczyk
 * @license   http://opensource.org/gpl-2.0.php GNU General Public License v2
 * @version   1.0.0
 */

if (!defined('IN_PHPBB'))
{
    exit;
}

if (empty($lang) || !is_array($lang))
{
    $lang = array();
}

// Merge AJAX Registration Check language data to the existing language data
$lang = array_merge($lang, array(
    'PCGF_AJAXREGISTRATIONCHECK_INVALID_QUERY'        => 'Nieprawidłowe dane!',
    'PCGF_AJAXREGISTRATIONCHECK_USERNAME_OK'          => 'Podany login jest wolny.',
    'PCGF_AJAXREGISTRATIONCHECK_EMAIL_INVALID'        => 'To nie jest poprawy adress E-Mail!',
    'PCGF_AJAXREGISTRATIONCHECK_EMAIL_OK'             => 'Ten adres E-Mail jest wolny.',
    'PCGF_AJAXREGISTRATIONCHECK_CONFIRM_PASSWORD_OK'  => 'Hasła są zgodne.',
    'PCGF_AJAXREGISTRATIONCHECK_PASSWORD_STRENGTH'    => 'Siła hasła',
    'PCGF_AJAXREGISTRATIONCHECK_PASSWORD_VERY_WEAK'   => 'Bardzo słabe',
    'PCGF_AJAXREGISTRATIONCHECK_PASSWORD_WEAK'        => 'Słabe',
    'PCGF_AJAXREGISTRATIONCHECK_PASSWORD_NORMAL'      => 'W porządku',
    'PCGF_AJAXREGISTRATIONCHECK_PASSWORD_STRONG'      => 'Silne',
    'PCGF_AJAXREGISTRATIONCHECK_PASSWORD_VERY_STRONG' => 'Bardzo silne',
));
