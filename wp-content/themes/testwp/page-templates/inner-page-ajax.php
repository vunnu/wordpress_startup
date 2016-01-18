<?php
/**
 * Template Name: Ajax
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


if (!isset($_GET['nwagency_post']))
{
    get_header();
}
?>


<div class="container inner-page about-us-page">

    <div class="row">
        <?php echo get_template_part_leave_variables('top-submenu'); ?>
    </div>


    <div class="tab-content">
        <div class="tab-pane active" id="contacts">

        </div>
        <div class="tab-pane" id="friends_list">

        </div>
        <div class="tab-pane  urlbox span8" id="awaiting_request">

        </div>
    </div>


</div>


<?php

if (!isset($_GET['nwagency_post']))
{
    get_footer();
}
?>
