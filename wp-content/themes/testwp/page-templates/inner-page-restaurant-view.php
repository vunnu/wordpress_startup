<?php
/**
 * Template Name: Restaurant view
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

    <div class="page-content restaurant-view">
        <div class="col-sm-10 col-md-6 col-lg-9 col-ulg-10 content col-sm-push-2 col-md-push-2">
            <div class="select-tabs">
                <label for="nav-tabs" class="tabs-title"><?php echo __('Restaurant', 'corner') ?></label>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="wide">
                        <a href="#events" aria-controls="profile" role="tab" data-toggle="tab">
                            <span><?php echo __('Events', 'corner') ?></span>
                            <img class="tab-ico" src="<?php echo get_template_directory_uri() . '/img/icons/restaurant/events.png' ?>" alt="">
                        </a>
                    </li>
                    <li role="presentation" class="active wide">
                        <a href="#menu" aria-controls="home" role="tab" data-toggle="tab">
                            <span><?php echo __('Menu', 'corner') ?></span>
                            <img class="tab-ico" src="<?php echo get_template_directory_uri() . '/img/icons/restaurant/menu_dark.png' ?>" alt="">
                        </a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content row">
                    <div role="tabpanel" class="tab-pane active" id="menu">
                        <?php $restaurants = apply_filters('post_type_list', 'ch_restaurant'); ?>
                        <?php foreach($restaurants as $restaurant): ?>
                            <div class="col-md-12 list-description">
                                <h4 class="title"><?php echo get_field('post_type_subititle', $restaurant->ID); ?></h4>
                                <?php echo $restaurant->post_content; ?>
                            </div>

                            <div class="col-md-7 col-lg-7 gallery">
                                <?php echo apply_filters('pim_gallery', $restaurant->ID); ?>
                            </div>
                            <div class="col-md-5 col-lg-5">
                                <div class="tab-text menu-navigation">
                                    <?php $restMenu = wp_get_post_terms($restaurant->ID, 'ch_restaurant_menu'); ?>
                                    <h4 class="title text-center"><?php echo __('View menu', 'corner') ?></h4>
                                    <ul class="nav">
                                        <?php foreach ($restMenu as $menu): ?>
                                            <?php if($menu->parent != 0): ?>
                                                <?php $icon = apply_filters('taxonomy_custom_field', $menu->taxonomy, $menu->term_taxonomy_id, 'term_icon_image'); ?>
                                                <?php $menuFile = apply_filters('taxonomy_custom_field', $menu->taxonomy, $menu->term_taxonomy_id, 'meniu_pdf_file'); ?>
                                                <li class="col-xs-4">
                                                    <a href="<?php echo $menuFile ? $menuFile['url'] : '#' ?>" <?php if($menuFile): ?>target="_blank" <?php endif; ?>>
                                                        <img class="img-responsive center-block" src="<?php echo $icon? $icon['url'] : get_template_directory_uri().'/img/icons/restaurant/business_lunch.png' ?>" alt="">
                                                        <span><?php echo $menu->name; ?></span>
                                                    </a>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                                <?php apply_filters('form_by_language', ''); ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="events">
                        <div class="col-md-12">
                            <!---NEWS accordion-->
                            <div class="panel-group news-list" id="accordion" role="tablist">
                                <?php $events = apply_filters('post_type_list', 'ch_event'); ?>
                                <?php foreach($events as $event): ?>
                                    <div class="panel panel-default">
                                        <div class="row article">
                                            <div class="col-xs-3 image">
                                                <img class="img-responsive" src="<?php echo apply_filters('post_featured_image_url', $event->ID) ? apply_filters('post_featured_image_url', $event->ID) :  get_template_directory_uri() . '/img/demoThumb.jpg' ?>" alt="">
                                            </div>
                                            <div class="col-xs-8 description">
                                                <div id="collapse<?php echo $event->ID; ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading<?php echo $event->ID; ?>">
                                                    <h4 class="title"><?php echo $event->post_title; ?></h4>
                                                    <span class="date"><?php echo date('Y m d', strtotime($event->post_date)); ?></span>
                                                    <div class="panel-body content">
                                                        <?php echo apply_filters('content', $event->post_content) ?>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-1 pull-right control">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $event->ID; ?>" aria-expanded="true" aria-controls="collapse<?php echo $event->ID; ?>">
                                                    <img src="<?php echo get_template_directory_uri().'/img/icons/form_arrow.png' ?>" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<?php
    get_footer();
?>