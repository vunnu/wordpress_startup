<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left side-menu" id="cbp-spmenu-s1">

    <nav class="language-menu-block visible-tn visible-xs visible-sm">
        <?php foreach(apply_filters('language_switcher_display', $post) as $language): ?>
            <a href="<?php echo $language['url'] ?>" class="btn <?php echo $language['active'] ? 'active' : '' ?>">
                <?php echo strtoupper($language['code']) ?></a>
        <?php endforeach; ?>
    </nav>
    <nav class="social-menu-block visible-tn visible-xs visible-sm">

        <a target="_blank" class="btn" href="https://www.facebook.com/pages/Corner-Hotel-Vilnius/283806918356370?fref=ts">
            <img src="<?php echo get_template_directory_uri(); ?>/img/icons/Facebook.png" alt=""/>
        </a>

        <a target="_blank" class="btn" href="https://www.instagram.com/cornerhotel/">

            <img src="<?php echo get_template_directory_uri(); ?>/img/icons/instagram.png" alt=""/>
        </a>
    </nav>
    <nav>
        <a href="#" id="showLeft" class="showLeft fixed nav-expander button x-close">
            <img src="<?php echo get_template_directory_uri() . '/img/icons/xclose.png' ?>" alt="">
        </a>
    </nav>

    <div class="menu-scroll">
        <div class="hide-scroll"></div>

        <?php wp_nav_menu(array(
            'theme_location' => 'navbar-menu-dynamic',
            'menu_class' => 'nav nav-pills navbar-menu-dynamic',
            'depth' => 2,
            'walker' => new wp_dynamic_menu_walker()
        )); ?>

        <section class="contacts">
            <ul class="nav nav-pills nav-stacked">
                <li><?php echo ot_custom_get_option('company_name'); ?></li>
                <li><?php echo ot_custom_get_option('company_address'); ?></li>
                <li><?php echo ot_custom_get_option('company_phone'); ?></li>
                <li><?php echo ot_custom_get_option('company_fax'); ?></li>
                <li><?php echo ot_custom_get_option('company_email'); ?></li>
            </ul>
        </section>
    </div>
</nav>