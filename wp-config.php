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
define('DB_NAME', 'skgrupe_orion');

/** MySQL database username */
define('DB_USER', 'skgrupe_orion');

/** MySQL database password */
define('DB_PASSWORD', 'Eg9rff65');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         '7^g(v+#i&h|k(--9}IXJK{|W?g.}+S3GT<t^mQ,39-E>/Z}U(r7O6,{|%/-|v4UD');
define('SECURE_AUTH_KEY',  '9=pkS-M!H!MI=ZQ;uYer8vK*6jup-tKvv`l=9d@ZPaFvii U3P8+)4O%n%{(F?GK');
define('LOGGED_IN_KEY',    'vEu~$}M.DK0&6p<l~@bfRD)V>B./@9~v3N||{jS|CR1lcbv>Am=:$=`Uv)d:k+NX');
define('NONCE_KEY',        'lJQ[_Uz6~n!IKi0=r/J=CL$WDp/qgEG? 9K8.pxi_-]YQNwua/NO1;Vrmp>k6m-K');
define('AUTH_SALT',        'd<&k&S.>|BF-SYdh~D?B$-Ne^nG|7QXJ0V`&{dOFn#r}8G;Y%~/8p9BQ:115i=fU');
define('SECURE_AUTH_SALT', '2tgT.:tqp9&.*`o7m.Iw|KO6^qm=DEB@:fSOsma`KM-e7++?2ow)NNV&n<++CTD0');
define('LOGGED_IN_SALT',   '3kF6LiTBV&tsA:BL_OHYd|4cvEVb=YZO.AAcqINuA~T!~5^6SQISA#a$aN0K/-=h');
define('NONCE_SALT',       '+sp)y`!euUJGlXpmlxTwdFVrF+^De1yV49/VB)zD+kI]vF+o6,_yzq:`tv:N&0|+');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'nw_';

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
