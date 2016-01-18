<?php if(!is_front_page()): ?>
    <div class="hg-100 reservation-form col-md-12 col-sm-10 col-sm-push-2 col-md-push-0">
        <?php echo get_template_part('reservation-form') ?>
    </div>
<?php endif; ?>
</div>


</div>
<!-- /page-container -->
</div>

<div class="scroll-top-container">
    <a href="#top">
        <img src="<?php echo get_template_directory_uri() . '/img/icons/to_top_arrow.png' ?>" alt=""/>
    </a>
</div>

<span class="mouse-scroll">
  <span class="mouse">
    <span class="mouse-movement">
    </span>
  </span>
</span>
<!-- /container -->

<?php wp_footer(); ?>

</body>
</html>
