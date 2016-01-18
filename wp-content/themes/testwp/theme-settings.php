<?php

$args = array(
    'post_type' => 'page',
    'posts_per_page' => '-1'
);
$pages = get_posts($args); ?>

<div class="wrap">

    <h2>Corner hotel oprions</h2>
    <form method="post" action="options.php">
        <?php wp_nonce_field('update-options') ?>
        <?php $meta_pages = get_option('_wa_front_page_link_ids'); ?>

        <h3>Front page blocks</h3>
        <select name="_wa_front_page_link_ids[]" class="selectpicker"
                multiple size="<?php echo (count($pages) > 10) ? count($pages) / 2  : 10 ?>">


            <?php foreach($pages as $page): ?>
                <?php $project_type = get_term_by('id', $page->ID, 'category'); ?>

                <?php $select = in_array($page->ID, $meta_pages); ?>
                <option <?php echo $select ? 'selected' : '' ?> value="<?php echo $page->ID ?>"><?php echo $page->post_title; ?></option>
            <?php endforeach; ?>
        </select>

        <p><input type="submit" name="Submit" value="Store Options" /></p>
        <input type="hidden" name="action" value="update" />
        <input type="hidden" name="page_options" value="_wa_front_page_link_ids" />

    </form>
</div>