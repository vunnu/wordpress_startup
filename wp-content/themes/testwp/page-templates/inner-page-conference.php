<?php
/**
 * Template Name: Konferenciju sale
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

$confRooms = apply_filters('post_type_list', 'ch_conference_room');

?>

    <div class="page-content conference-view">
        <div class="col-sm-10 col-md-6 col-lg-9 col-ulg-10 content col-sm-push-2 col-md-push-2">
            <div class="select-tabs">
                <label for="nav-tabs" class="tabs-title"><?php echo __('Conference room', 'corner') ?></label>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">

                    <?php foreach($confRooms as $id => $room): ?>
                        <?php $roomType = wp_get_post_terms($room->ID, 'ch_conference_room_type'); ?>
                        <?php $icon = apply_filters('taxonomy_custom_field', $roomType[0]->taxonomy, $roomType[0]->term_taxonomy_id, 'term_icon_image'); ?>
                        <li role="presentation" class="<?php echo $id == 0 ? 'active' : ''; ?> <?php echo count($confRooms) < 3 ? 'wide' : '' ?>">
                            <a href="#<?php echo $room->ID; ?>" aria-controls="<?php echo $room->ID; ?>" role="tab" data-toggle="tab">
                                <span><?php printf("%s", $roomType[0]->name); ?></span>
                                <img class="tab-ico" src="<?php echo $icon ? $icon['url'] : get_template_directory_uri() . '/img/icons/room/person_dark.png' ?>" alt="">
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content row">
                    <?php foreach($confRooms as $id => $room): ?>
                        <div role="tabpanel" class="tab-pane <?php echo $id == 0 ? 'active' : ''; ?>" id="<?php echo $room->ID; ?>">

                            <div class="col-md-12 list-description">
                                <h4 class="title"><?php echo $room->post_title; ?></h4>
                                <?php echo $room->post_content; ?>
                            </div>

                            <div class="col-md-12 col-lg-6 gallery">
                                <?php echo apply_filters('pim_gallery', $room->ID); ?>
                            </div>
                            <div class="col-lg-2 plan-list">
                                <h4 class="title text-center"><?php echo __('Hall plan', 'corner') ?></h4>
                                <?php $plans = wp_get_post_terms($room->ID, 'ch_conference_room_plan'); ?>
                                <ul class="nav">
                                    <?php foreach($plans as $plan): ?>
                                        <?php $image = apply_filters('taxonomy_custom_field', $plan->taxonomy, $plan->term_taxonomy_id, 'term_title_image');?>
                                        <li class="col-tn-6 col-xs-3 col-lg-12">
                                            <img src="<?php echo $image['url'] ?>" alt="">
                                            <span><?php echo $plan->name; ?></span>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <div class="tab-text menu-navigation">
                                    <h4 class="title text-center"><?php echo __('We offer free', 'corner') ?></h4>
                                    <ul class="nav">
                                        <li class="col-xs-6">
                                            <img class="img-responsive center-block" src="<?php echo get_template_directory_uri().'/img/icons/conference/wifi.png' ?>" alt="">
                                            <span>Dienos pietus</span>
                                        </li>
                                        <li class="col-xs-6">
                                            <img class="img-responsive center-block" src="<?php echo get_template_directory_uri().'/img/icons/conference/chart.png' ?>" alt="">
                                            <span>Vakarienes meniu</span>
                                        </li>
                                    </ul>
                                </div>
                                <?php apply_filters('form_by_language', ''); ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>


<?php
get_footer();
?>