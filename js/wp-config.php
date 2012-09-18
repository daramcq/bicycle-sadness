<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db1239696_wordpress');

/** MySQL database username */
define('DB_USER', 'u1239696_wordpr');

/** MySQL database password */
define('DB_PASSWORD', 'thisisourbikeproject');

/** MySQL hostname */
define('DB_HOST', 'mysql1478int.cp.blacknight.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7f&m9=)P:||z`PF$.pnWjXOyL8+WeiTw Zsyr.sxc]0b*BVy.7~^$ u0EVl@DR|#');
define('SECURE_AUTH_KEY',  'T8|%dlMN}j1sylqe%#x=rtxuR)u|YbWW%y&f-Y*,Jr+1u.?|d|aTqg?><i<mjEpZ');
define('LOGGED_IN_KEY',    ',9_~k?Pu,FXZN>D]n;sRtHfw.m WTMy(kEx;Soj,,!1#]7`OdI%2+J3ik6@VQj(b');
define('NONCE_KEY',        'wV=?}FX1*NYbPtI-Bc w_C_`imP|)$q`hcM6Ms(O,}G:Dlfe<r[A2Q-+9{TUp%s<');
define('AUTH_SALT',        's`<8H@*fOJytP))lDd7fwId,M&d[j65VWgX de k3+BtQFQfY1Bj]%E+&^p!$y c');
define('SECURE_AUTH_SALT', 'bwTw|~pH4}KRR&-6p7wgN #cR]coP_jyL0+sfc2;<V25a.+@?E?ct!tS;ya=1W$-');
define('LOGGED_IN_SALT',   '<0%Uta!|hL+1:0ii{|<skYZ0U-0-a@;3RDbohud<,FO~2eJ9YYV8doee@FzO}GF|');
define('NONCE_SALT',       'ke[Y+KV8Y9#|btsm+ .7fv{v([fMtyh98SMI5g~{$VPw]]a_+gt*ux.nElsfD+w{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
