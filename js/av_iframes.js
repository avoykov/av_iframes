/**
 * Contains javascript to inject iframes.
 *
 * @file av_iframes.js
 */

(function ($) {
  Drupal.behaviors.avIframes = {
    attach: function (context, settings) {
      var avIframes = Drupal.settings.avIframes;
      if (typeof avIframes != 'undefined') {
        $.each(avIframes, function (k, i) {
          switch (k) {
            case 'all':
            case 'lodging':
            case 'stay':
              $('head').append(i);
              break;
          }
        });
      }
    }
  };

})(jQuery);
