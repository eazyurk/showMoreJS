/**
 * showMore.js
 * Created by Jan-Willem de Boer
 */
;(function ($) {
    var name = 'showMore';
    var defaults = {
        mode: 'words',
        cutOff: 10,
        hideOnStart: true
    };

    function showMore(el, options) {
        var self = this;

        self.options = $.extend({}, defaults, options);
        self.el = $(el);
        self.mode = self.options.mode;

        self.init();
    }

    showMore.prototype = {
        init: function () {
            var self = this;

            $(self.el).each(function () {
                $(this).data('original-text', self.el.html());

                $("body").data("foo", 52);


                if (self.options.hideOnStart) {
                    self.hide(self.el);
                } else {
                    self.show();
                }
            });
        },
        hide: function (element) {
            var self = this;
            var element = $(element);

            switch (self.mode) {
                case 'words':
                    var text = $.trim(element.text());
                    var splitText = text.split(' ');
                    var amountOfWords = splitText.length;
                    var remainingWords = amountOfWords - self.options.cutOff;

                    if (remainingWords > self.options.cutOff) {
                        var showText = splitText.splice(0, self.options.cutOff).join(' ');
                        var hiddenText = splitText.splice(self.options.cutOff, amountOfWords).join(' ');

                        console.log(showText);
                        console.log('---------------');
                        console.log(hiddenText);
                    }

                    break;
                case 'sentences':
                    console.log('ines');
                    break;
            }
        },
        show: function (element) {
            var self = this;
            var element = $(element);
        }
    };

    $.fn[name] = function (options) {
        return this.each(function () {
            if (!$.data(this, name)) {
                $.data(this, name, new showMore(this, options));
            }
        });
    };
})(jQuery);