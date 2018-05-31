;
(function ($, window, document, undefined) {
    var defaults = {};
    function FrostMask(element, options) {
        this.self = element;
        this.options = $.extend({}, defaults, options);
        this.initMask();
    }
    FrostMask.prototype = {
        initMask: function () {
            this._createMaskLayer();
        },
        _createMaskLayer: function () {
            var frostLayer = document.createElement('div');
            frostLayer.className = 'frost-layer';
            this.self.addClass('frost');
            this.self.append(frostLayer);
        }
    };
    $.fn.fmask = function (options) {
        new FrostMask(this, options);
    };
    $.fn.unmask = function () {
        this.removeClass('frost');
        for (var i = 0; i < this.children().length; i++) {
            if ($(this.children()[i]).hasClass('frost-layer')) {
                this.children()[i].remove();
            }
        }
    };
})(window.jQuery, window, document);
