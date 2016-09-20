;
JSBK.Namespace.register('sq.ui');
(function($, C) {
    C.Confirm = function(op) {
        var self = this;
        var defaults = {
            bgClose         : false,
            titleHtml       : "确定？",
            cancleBtnHtml   : "取消",
            confirmBtnHtml  : "确定",
            select          : self.getSelect(),
            cancleCallback  : null,
            confirmCallback : null
        };
        this.ops = $.extend(defaults, op);
        this.dialog = null;
        this.init();
    }

    C.Confirm.prototype.init = function() {
        var self = this;
        self.setHtml();
        require('../ui/Dialog.js');
        self.dialog = new sq.ui.Dialog( self.ops );
        self.bindEvent();
    }

    C.Confirm.prototype.open = function() {
        this.dialog.open();
    }

    C.Confirm.prototype.bindEvent = function() {
        var self = this;

        // 绑定： 点击“取消”
        self.ops.select.on("click", ".cancle-btn", function(e) {
            e.stopPropagation();
            if( self.ops.cancleCallback ) {
                self.ops.cancleCallback(self);
            } else {
                self.dialog.close();
            }
        });

        // 绑定： 点击“确定”
        self.ops.select.on("click", ".confirm-btn", function(e) {
            e.stopPropagation();
            if( self.ops.confirmCallback ) {
                self.ops.confirmCallback(self);
            } else {
                self.dialog.close();
            }
        });
    }

    C.Confirm.prototype.setHtml = function() {
        var self = this;
        self.ops.select.find(".title").html( self.ops.titleHtml );
        self.ops.select.find(".cancle-btn").html( self.ops.cancleBtnHtml );
        self.ops.select.find(".confirm-btn").html( self.ops.confirmBtnHtml );
    }

    C.Confirm.prototype.getSelect = function() {
        return $('<div class="dialog-mod dialog-confirm">' +
                    '<p class="title"></p>' +
                    '<div class="btn-wrap">' +
                        '<span class="btn cancle-btn"></span>' +
                        '<span class="btn confirm-btn"></span>' +
                    '</div>' +
                '</div>');
    }

})(Zepto, sq.ui);
