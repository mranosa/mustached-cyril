'use strict';

mustachedCyrilApp.factory('ProgressBarService', function() {
	(function( $ ){
        $.fn.animateProgress = function(progress, callback) {
            return this.each(function() {
                $(this).animate({
                    width: progress+'%'
                }, {
                    duration: 2000,

                    easing: 'swing',

                    step: function( progress ){
                        var labelEl = $('.ui-label', this),
                            valueEl = $('.value', labelEl);

                        if (Math.ceil(progress) < 40 && $('.ui-label', this).is(":visible")) {
                            labelEl.hide();
                        }else{
                            if (labelEl.is(":hidden")) {
                                labelEl.fadeIn();
                            };
                        }

                        if (Math.ceil(progress) == 100) {
                            labelEl.text('Done');
                            setTimeout(function() {
                                labelEl.fadeOut();
                            }, 1000);
                        }else{
                            valueEl.text(Math.ceil(progress) + '%');
                        }
                    },
                    complete: function(scope, i, elem) {
                        if (callback) {
                            callback.call(this, i, elem );
                        };
                    }
                });
            });
        };
    })( jQuery );

  var ProgressBarService = function(){
      //do nothing
  };

  ProgressBarService.prototype = {
    start: function(){
        $('#progress_bar .ui-progress .ui-label').hide();
        $('#progress_bar .ui-progress').css('width', '7%');
    },
    animateProgress: function(progress, callback){
        $('#progress_bar .ui-progress').animateProgress(progress, callback);
    }
  };

  return new ProgressBarService();
});
