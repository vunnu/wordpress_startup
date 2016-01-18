<?php
$tab_menu_items = apply_filters('project_tab_menu_items', $post->ID);
$i = 1;
?>
<div class="tab-menu-container">

    <div class="col-md-4 menu-title">
        <div class="row">
            <h2>
                <?php echo __('What we did', 'nwagency'); ?>
            </h2>
        </div>
    </div>

    <div class="col-md-8 menu-items">
        <div class="row">
            <?php $classes = count($tab_menu_items) < 3 ? 'single' : '' ?>
            <?php foreach ($tab_menu_items as $tab_item): ?>

                <?php if (count($tab_menu_items) < 4 && $i > 2 || count($tab_menu_items) == 1): ?>
                    <div class="col-md-12 item <?php echo $classes ?>">
                <?php else: ?>
                    <div class="col-md-6 item <?php echo $classes ?>">
                <?php endif; ?>
                        <a data-scroll class="item-link" data-href="#slide<?php echo $i; ?>"
                       href="#slide<?php echo $i; ?>"><?php echo $tab_item->name ?></a>
                    </div>

                <?php $i++; ?>
                <?php endforeach; ?>
        </div>
    </div>
</div>