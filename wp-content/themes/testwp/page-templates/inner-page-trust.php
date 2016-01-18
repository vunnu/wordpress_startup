<?php
/**
 * Template Name: Mumis pasitiki
 *
 * Description: A page template that provides a key component of WordPress as a CMS
 * by meeting the need for a carefully crafted introductory page. The front page template
 * in Twenty Twelve consists of a page content area for adding text, images, video --
 * anything you'd like -- followed by front-page-only widgets in one or two columns.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */


get_header();?>


<div class="container inner-page trust-page">

<!--    --><?php //echo get_template_part_leave_variables('top-submenu'); ?>

    <div class="row-height title-container">
        <div class="col-md-6 col-md-height bg-title-block">
            <div class="title-small">
                <?php echo __('Our', 'nwagency'); ?>
            </div>
            <div class="title-big">
                <?php echo __('Friends', 'nwagency'); ?>
            </div>
        </div>
        <div class="col-md-6 col-md-height description">
            <?php the_content(); ?>
        </div>
    </div>

    <div class="row logos-container">
        <?php $partners = apply_filters('partners_logos', '') ?>
        <?php foreach($partners as $partner): ?>
            <div class="col-tn-12 col-xs-6 col-sm-4 col-md-3 client-logo">
                <a target="_blank" rel="nofollow" href="http://<?php echo apply_filters('partner_url', $partner->ID); ?>">
                    <img class="img-responsive" src="<?php echo apply_filters('partner_logo_url', $partner->ID); ?>" alt=""/>
                </a>
            </div>
        <?php endforeach; ?>
    </div>

</div>


<?php

if (!isset($_GET['nwagency_post']))
{
    get_footer();
}
?>
