<div class="sidebar">
    <nav>
        <button type="button" id="showLeft" class="showLeft navbar-inverse navbar-default nav-expander fixed tcon tcon-menu--xbutterfly"
                data-toggle="collapse"
                aria-label="toggle menu"
            >
            <span class="tcon-menu__lines" aria-hidden="true"></span>
            <span class="tcon-visuallyhidden">toggle menu</span>
        </button>
        <span class="manu_label">Meniu</span>
    </nav>

    <nav class="language-menu-block">
        <?php foreach(apply_filters('language_switcher_display', $post) as $language): ?>
            <a href="<?php echo $language['url'] ?>" class="btn <?php echo $language['active'] ? 'active' : '' ?>">
                <?php echo strtoupper($language['code']) ?></a>
        <?php endforeach; ?>
    </nav>

    <nav class="social-menu-block">

            <a target="_blank" class="btn" href="https://www.facebook.com/pages/Corner-Hotel-Vilnius/283806918356370?fref=ts">
                <img src="<?php echo get_template_directory_uri(); ?>/img/icons/Facebook.png" alt=""/>
            </a>

            <a target="_blank" class="btn" href="https://www.instagram.com/cornerhotel/">

                <img src="<?php echo get_template_directory_uri(); ?>/img/icons/instagram.png" alt=""/>
            </a>
    </nav>
</div>


<?php get_template_part('side_menu'); ?>