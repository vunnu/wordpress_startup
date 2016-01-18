<!doctype html>
<html <?php language_attributes(); ?> class="no-js <?php echo is_front_page() ? 'front-page' : '' ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?></title>

    <link href="//www.google-analytics.com" rel="dns-prefetch">

    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-57x57.png"; ?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-60x60.png"; ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-72x72.png"; ?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-76x76.png"; ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-114x114.png"; ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-120x120.png"; ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-144x144.png"; ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-152x152.png"; ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() . "/img/favicon/apple-icon-180x180.png"; ?>">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo get_template_directory_uri() . "/img/favicon/android-icon-192x192.png"; ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() . "/img/favicon/favicon-32x32.png"; ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri() . "/img/favicon/favicon-96x96.png"; ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . "/img/favicon/favicon-16x16.png"; ?>">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="google-site-verification" content="OzmUBGd4JiHANiI3OhcL1AbzpHemjBppBUmyQGoMWbg" />
    <meta name='yandex-verification' content='714ac60c5ce28121' />

    <meta property="og:image" content="<?php echo get_template_directory_uri() . '/img/Titulinis_OG_meta.png' ?>" />
    <link rel="image_src" type="image/png" href="<?php echo get_template_directory_uri() . '/img/Titulinis_OG_meta.png' ?>" />

    <?php echo get_template_part('dynamic-css'); ?>
    <?php wp_head(); ?>
</head>

<body <?php body_class(array(
        'cbp-spmenu-push',
        is_front_page() ? 'front-page' : '',
        (is_project_page()) ? 'project-page' : '',
        (!is_front_page())? 'inner-page' : ''
    )); ?>>

<script type="text/javascript">
    var mfq = mfq || [];
    (function () {
        var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/1b16bfd3-f2e5-4ab4-b244-933eb1da2e8a.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();
</script>

<?php get_sidebar(); ?>


<div class="main-container <?php echo get_page_type(); ?>"
     style="<?php echo is_project_page() ? apply_filters('project_dynamic_bg', get_the_ID()) : ''; ?>">
       <!-- logo -->

    <?php echo get_template_part('logo-block') ?>
    <!-- /logo -->
    <div class="page-container">