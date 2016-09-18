;
JSBK.Namespace.register('sq.ui');
(function($, C) {
    C.Alert = function(op) {
        var self = this;
        var defaults = {
            centerTitle : false, // title是否居中
            bgClose     : false,
            titleHtml   : "成功！",
            btnHtml     : "确定",
            select      : self.getSelect(),
            clickBtnCallback : null
        };
        this.ops = $.extend(defaults, op);
        this.dialog = null;
        this.init();
    }

    C.Alert.prototype.init = function() {
        var self = this;
        self.setHtml();
        require('../ui/Dialog.js');
        self.dialog = new sq.ui.Dialog( self.ops );
        self.bindEvent();
    }

    C.Alert.prototype.open = function() {
        this.dialog.open();
    }

    C.Alert.prototype.bindEvent = function() {
        var self = this;
        self.ops.select.on("click", ".btn", function(e) {
            e.stopPropagation();
            if( self.ops.clickBtnCallback ) {
                self.ops.clickBtnCallback(self);
            } else {
                self.dialog.close();
            }
        });
    }

    C.Alert.prototype.setHtml = function() {
        var self = this;
        if(self.ops.centerTitle) {
            self.ops.select.addClass( "center-title" );
        }
        self.ops.select.find(".title").html( self.ops.titleHtml );
        self.ops.select.find(".btn").html( self.ops.btnHtml );
    }

    C.Alert.prototype.getSelect = function() {
        return $('<div class="dialog-mod dialog-alert">' +
                    '<p class="title"></p>' +
                    '<div class="btn-wrap">' +
                        '<span class="btn"></span>' +
                    '</div>' +
                '</div>');
    }

})(Zepto, sq.ui);
