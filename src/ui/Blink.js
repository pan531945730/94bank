;
JSBK.Namespace.register('sq.ui');
(function($, C) {
    C.Blink = function(op) {
        var self = this;
        var defaults = {
            className   : "g-d-dialog blink-mod",
            bgClose     : false,
            select      : self.getSelect(),
            blinkHtml   : "blink blink",
            intervaltime : 3000    // 多长时间之后消失
        };
        this.ops = $.extend(defaults, op);
        this.dialog = null;
        this.init();
    }

    C.Blink.prototype.init = function() {
        var self = this;
        self.setHtml();
        require('../ui/Dialog.js');
        self.dialog = new sq.ui.Dialog( self.ops );
    }

    C.Blink.prototype.open = function(callback) {
        var self = this;
        self.dialog.open();
        setTimeout(function() {
            if( self.ops.timeoutCallback ) {
                self.ops.timeoutCallback(self);
            } else {
                self.dialog.close();
                callback && callback()
            }
        }, self.ops.intervaltime);
    }

    C.Blink.prototype.setHtml = function() {
        var self = this;
        self.ops.select.find(".blink-content").html( self.ops.blinkHtml );
    }

    C.Blink.prototype.setDoc = function(doc) {
        var self = this;
        self.dialog.dom.dialog.find(".blink-content").empty().append(doc);
    }

    C.Blink.prototype.getSelect = function() {
        return $('<div class="dialog-mod dialog-blink">' +
                    '<p class="blink-content"></p>' +
                '</div>');
    }

})(Zepto, sq.ui);






