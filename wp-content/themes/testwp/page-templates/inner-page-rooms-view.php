<?php
/**
 * Template Name: Rooms view
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

$rooms = apply_filters('post_type_list', 'ch_room');

?>

    <div class="page-content rooms-view">
        <div class="col-sm-10 col-md-6 col-lg-9 col-ulg-10 content col-sm-push-2 col-md-push-2">
            <div class="select-tabs">
                <label for="room-types" class="tabs-title"><?php echo __('Rooms view', 'corner') ?></label>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs room-types" role="tablist">

                    <?php foreach($rooms as $id => $room): ?>
                        <?php $roomType = wp_get_post_terms($room->ID, 'ch_room_type'); ?>
                        <?php $icon = apply_filters('taxonomy_custom_field', $roomType[0]->taxonomy, $roomType[0]->term_taxonomy_id, 'term_icon_image'); ?>
                        <li role="presentation" class="<?php echo $id == 0 ? 'active' : ''; ?>">
                            <a href="#<?php echo $room->post_name; ?>" aria-controls="<?php echo $room->post_name; ?>" role="tab" data-toggle="tab">
                                <?php $inline = count(str_split ($roomType[0]->name)) > 1 ? true : false; ?>

                                <?php if($inline): ?>
                                    <img class="tab-ico img-responsive img-inline" src="<?php echo $icon ? $icon['url'] : get_template_directory_uri() . '/img/icons/room/person_dark.png' ?>" alt="">
                                    <span><?php printf("%s", $roomType[0]->name); ?></span>
                                <?php else: ?>
                                    <span><?php printf("%s", $roomType[0]->name); ?></span>
                                    <img class="tab-ico" src="<?php echo $icon ? $icon['url'] : get_template_directory_uri() . '/img/icons/room/person_dark.png' ?>" alt="">
                                <?php endif; ?>
                            </a>
                        </li>
                    <?php endforeach; ?>

                </ul>

                <!-- Tab panes -->
                <div class="tab-content row">
                    <?php foreach($rooms as $id => $room): ?>
                        <div role="tabpanel" class="tab-pane <?php echo $id == 0 ? 'active' : ''; ?>" id="<?php echo $room->post_name; ?>">
                            <div class="col-md-12 col-lg-7 gallery">
                                <?php echo apply_filters('pim_gallery', $room->ID); ?>
                            </div>
                            <div class="col-md-12 col-lg-5">
                                <div class="tab-text">
                                    <?php echo $room->post_content; ?>
                                </div>
                                <?php apply_filters('form_by_language', ''); ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="row room-attributes">
                <?php $room_attributes = get_terms('ch_room_attributes', array('hide_empty' => false)); ?>
                <?php foreach ($room_attributes as $attribute): ?>
                    <?php $image = apply_filters('taxonomy_custom_field', $attribute->taxonomy, $attribute->term_taxonomy_id, 'term_icon_image');?>
                    <div class="col-xs-4 col-lg-2 text-center">
                                            <span class="img-container">
                                            <img src="<?php echo $image['url']; ?>"
                                                 class="img-responsive" alt="">
                                            </span>
                        <span><?php echo $attribute->name; ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

<?php
    get_footer();
?>