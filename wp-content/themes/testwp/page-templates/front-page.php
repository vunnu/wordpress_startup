<?php
/**
 * Template Name: Front Page Template
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
get_header(); ?>

    <div class="front-blocks hg-100">
        <div class="row-height-block">
            <div class="col-md-6 hg-100 front-blocks">
                <div class="row hg-65">
                    <div class="visible-md visible-lg col-md-5 col-lg-6 block no-border logo-block"
                         style="background-image: url(<?php echo get_template_directory_uri(
                             ).'/img/logo_bg.jpg' ?>)"></div>
                    <div class="col-md-7 col-lg-6 hg-100 reservation-form">
                        <?php echo get_template_part('reservation-form') ?>
                    </div>
                </div>
                <div class="row hg-35">
                    <div class="col-md-12 block room-attributes">
                        <div class="title-block">
                            <h2 class="title">
                                <a href="<?php echo get_permalink(apply_filters('post_by_current_language', 8)); ?>">
                                    <?php printf(__("Choose from %d available rooms", 'corner'), 140); ?>
                                </a>
                            </h2>
                        </div>
                        <div class="hover">
                            <a href="<?php echo get_permalink(apply_filters('post_by_current_language', 8)); ?>">
                                <span><?php echo __('More', 'corner'); ?> >></span>
                            </a>
                        </div>
                        <div class="row container-fluid">
                            <?php $room_attributes = get_terms('ch_room_attributes', array('hide_empty' => false)); ?>
                            <?php foreach ($room_attributes as $attribute): ?>
                                <?php $image = apply_filters('taxonomy_custom_field', $attribute->taxonomy, $attribute->term_taxonomy_id, 'term_icon_image');?>
                                <div class="col-xs-4">
                                    <span class="img-container">
                                        <img src="<?php echo $image['url'] ?>"
                                             class="img-responsive" alt="">
                                    </span>
                                    <span><?php echo $attribute->name; ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-6 hg-100">
                <div class="row hg-65 page-blocks">
                    <?php $blocks = apply_filters('first_page_blocks', ''); ?>
                    <?php foreach ($blocks as $block): ?>

                        <?php $bg_image = wp_get_attachment_url(get_post_thumbnail_id($block->ID))
                            ? wp_get_attachment_url(get_post_thumbnail_id($block->ID))
                            : get_template_directory_uri().'/img/icons/dummy.png'; ?>

                        <div class="col-sm-6 col-xs-12 block" style="background-image: url(<?php echo $bg_image; ?>)">
                            <div class="title-block">
                                <h2 class="title"><?php echo $block->post_title; ?></h2>
                                <h4 class="subtitle"><?php echo get_field('front_page_additional_info', $block->ID); ?></h4>
                            </div>
                            <div class="hover">
                                <a href="<?php echo get_permalink($block->ID); ?>">
                                    <span><?php echo __('More', 'corner'); ?> >></span>
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="row hg-35">
                    <div class="col-md-12 block announcement-block"
                         style="background-image: url(<?php echo get_template_directory_uri(
                             ).'/img/akcijos_nuolaidos.jpg' ?>)">
                        <?php $page = apply_filters('page_by_template', 'page-templates/inner-page-news'); ?>
                        <div class="title-block">
                            <h2 class="title"><?php echo $page->post_title; ?></h2>
                        </div>
                        <div class="hover">
                            <a href="<?php echo get_permalink($page->ID); ?>">
                                <span><?php echo __('More', 'corner'); ?> >></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php get_footer(); ?>