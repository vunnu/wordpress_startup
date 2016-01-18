<?php

get_header(); ?>


<?php if (in_array($_GET['type'], array(
            WA_ProjectType::get_project_type_by_name('video'),
            WA_ProjectType::get_project_type_by_name('spauda')
        ))): ?>

    <div class="container">
        <div class="top-menu-container">
            <?php get_template_part('breadcrumbs'); ?>
        </div>
    </div>

    <?php if ($_GET['type'] == WA_ProjectType::get_project_type_by_name('video')): ?>
        <?php get_template_part('video-task'); ?>
    <?php else: ?>
        <?php get_template_part('spauda-task'); ?>
    <?php endif; ?>

<?php else: ?>

    <div class="container">
        <div class="top-menu-container">
            <?php get_template_part('project-tab-menu'); ?>
            <?php get_template_part('breadcrumbs'); ?>

        </div>
    </div>

    <?php get_template_part('project-tasks'); ?>

<?php endif; ?>

<?php get_footer(); ?>