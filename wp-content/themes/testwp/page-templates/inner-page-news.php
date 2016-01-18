<?php
/**
 * Template Name: Akcijos ir naujienos
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

    <div class="page-content news-view">
        <div class="col-sm-10 col-md-6 col-lg-9 col-ulg-10 content col-sm-push-2 col-md-push-2">
            <div class="select-tabs">
                <label for="room-types" class="tabs-title"><?php echo __('News and promo', 'corner') ?></label>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs room-types" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                            <span></span>
                            <img src="<?php echo get_template_directory_uri() . '/img/icons/news/news.png' ?>" alt="">
                        </a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content row">
                    <div role="tabpanel" class="tab-pane active" id="home">
                        <div class="col-md-12">

                            <!---NEWS accordion-->
                            <div class="panel-group news-list" id="accordion" role="tablist">
                                <?php $news = apply_filters('post_type_list', 'ch_news_promo');?>
                                <?php foreach($news as $article): ?>
                                    <div class="panel panel-default">
                                        <div class="row article">
                                            <div class="col-xs-3 image">

                                                <img class="img-responsive" src="<?php echo apply_filters('post_featured_image_url', $article->ID) ? apply_filters('post_featured_image_url', $article->ID) :  get_template_directory_uri() . '/img/demoThumb.jpg' ?>" alt="">
                                            </div>
                                            <div class="col-xs-8 description">
                                                <div id="collapse<?php echo $article->ID; ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading<?php echo $article->ID; ?>">
                                                    <h4 class="title"><?php echo $article->post_title; ?></h4>
                                                    <span class="date"><?php echo date('Y m d', strtotime($article->post_date)); ?></span>
                                                    <div class="panel-body content">
                                                        <div class="short-content">
                                                            <?php echo apply_filters('the_content', $article->post_excerpt) ?>
                                                        </div>
                                                        <div class="full-content">
                                                            <?php echo apply_filters('the_content', $article->post_content) ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-1 pull-right control">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $article->ID; ?>" aria-expanded="true" aria-controls="collapse<?php echo $article->ID; ?>">
                                                    <img src="<?php echo get_template_directory_uri().'/img/icons/form_arrow.png' ?>" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <!---END NEWS accordion-->
                        </div>
                    </div>
                </div>

            </div>
        </div>


<?php
get_footer();
?>