<?php
/**
 * Template Name: Apie mus
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

get_header();

?>

    <div class="page-content rooms-view">
        <div class="col-sm-10 col-md-6 col-lg-9 col-ulg-10 content col-sm-push-2 col-md-push-2">
            <div class="select-tabs">
                <label for="room-types" class="tabs-title"><?php echo __('About us', 'corner') ?></label>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs room-types" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                            <span></span>
                            <img src="<?php echo get_template_directory_uri() . '/img/icons/about_us.png' ?>" alt="">
                        </a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content row">
                    <div role="tabpanel" class="tab-pane active" id="home">

                        <div class="col-md-12 list-description">
                            <?php echo get_the_content(); ?>
                        </div>

                        <div class="col-md-7 col-lg-7 gallery">
                            <?php echo apply_filters('pim_gallery', get_the_ID()); ?>
                        </div>
                        <div class="col-md-5 col-lg-5">
                            <div class="tab-text">

                            </div>
                            <?php apply_filters('form_by_language', ''); ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>

<?php
get_footer();
?>