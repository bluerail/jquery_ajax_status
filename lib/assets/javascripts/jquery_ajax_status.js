// Generated by CoffeeScript 1.9.1
(function() {
  var timer;

  timer = null;

  window.ajax_status = {
    delay: 500,
    animate: true,
    "class": 'ajax-status-default',
    text: 'Loading…',
    html: "<div id=\"ajax-status\" class=\"%%CLASS%%\">\n  <span class=\"ajax-status-animate\"></span>\n  <span class=\"ajax-status-text\">%%TEXT%%</span>\n</div>",
    start: function() {
      $(document.body).css('cursor', 'wait');
      clearTimeout(timer);
      return setTimeout(window.ajax_status.show, ajax_status.delay);
    },
    stop: function() {
      $(document.body).css('cursor', '');
      clearTimeout(timer);
      return window.ajax_status.hide();
    },
    hide: function() {
      return $('#ajax-status').slideUp(150, function() {
        return $('#ajax-status').remove();
      });
    },
    show: function() {
      $(document.body).append(ajax_status.html.replace('%%TEXT%%', window.ajax_status.text).replace('%%CLASS%%', window.ajax_status["class"]));
      return $('#ajax-status').slideDown(150, function() {
        var fun;
        if (!ajax_status.animate) {
          return;
        }
        fun = function() {
          if ($('#ajax-status .ajax-status-animate').length === 0 || !ajax_status.animate) {
            return;
          }
          return $('#ajax-status .ajax-status-animate').css('left', "-" + ($('#ajax-status .ajax-status-animate').outerWidth()) + "px").animate({
            left: ($('#ajax-status').outerWidth()) + "px"
          }, {
            duration: 2000,
            complete: fun
          });
        };
        return fun();
      });
    }
  };

  $(document).on('ajaxStart', window.ajax_status.start);

  $(document).on('ajaxComplete', window.ajax_status.stop);

  $(document).on('page:fetch', window.ajax_status.start);

  $(document).on('page:change', window.ajax_status.stop);

}).call(this);