'use strict';

jQuery(document).ready(function() {
  jQuery('#open_nav').on('click', function() {
    jQuery('#wrapper, #nav').toggleClass('show');
  });
});
