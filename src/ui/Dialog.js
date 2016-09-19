;
JSBK.Namespace.register('sq.ui');
(function($, C) {

    var Observer = {
        listener: {
            defaults: []
        },
        on: function(type, fn, context) {
            var _type,
                _fn;
            if (typeof type !== 'string' && typeof type !== 'undefined') {
                return;
            }
            if (typeof fn !== 'function' && typeof context[fn] !== 'function') {
                return;
            }
            _type = type || 'defaults';
            _fn = typeof fn === 'function' ? fn : context[fn];
            if (typeof this.listener[_type] === 'undefined') {
                this.listener[_type] = [];
            }
            this.listener[_type].push({
                fn: _fn,
                context: context || this
            });
        },
        off: function(type, fn, context) {
            var _type = type || 'defaults',
                sub = this.listener[_type],
                i,
                _context = context || this,
                max = sub ? sub.length : 0;

            for (i = 0; i < max; i++) {
                if (sub[i].fn === fn && sub[i].context === _context) {
                    sub.splice(i, 1);
                }
            }
        },
        trigger: function(type, args) {
            var _type = type || 'defaults',
                sub = this.listener[_type],
                i,
                _args,
                max = sub ? sub.length : 0;
            if (!$.isArray(args)) { // 为了兼容老的代码，这里必须转一下
                if (args) {
                    _args = [args];
                } else {
                    _args = [];
                }
            }
            for (i = 0; i < max; i++) {
                sub[i].fn.apply(sub[i].context, _args);
            }
        }
    };

    function addPublisher(o) {
        $.extend(true, o, Observer);
    }

    C.Dialog = function(opt) {
        var defaults = {
            className: 'g-d-dialog',
            actionEvent: 'click',
            bgClose: false,
            targetNode: ''
        };
        this.ops = $.extend(defaults, opt);
        this.dom = {};
        addPublisher(this);
        this.init();
    };

    C.Dialog.prototype = {
        constructor: C.Dialog,
        init: function() {
            var frame = $(document.createDocumentFragment()),
                _this = this,
                content,
                div = $('<div></div>');
            div.addClass(this.ops.className);
            frame.append(div);
            if(this.ops.select){
                content = $(this.ops.select);
            }
            div.append(content||'');
            $('body').append(frame);
            this.dom.dialog = div;

            // 禁止弹层上面的touchmove
            this.dom.dialog.on('touchmove', function(e) {
                e.preventDefault();
            });

            // 关闭按钮
            $(this.ops.closeSelect).click(function(event) { // 初始化关闭按钮
                event.stopPropagation();
                _this.trigger('dialogClose');
                _this.close();
            });

            // 点击背景关闭
            if (this.ops.bgClose) {
                div.click(function(event) { // 点击背景关闭
                    if (event.target === this) {
                        event.stopPropagation();
                        _this.trigger('bgClose');
                        _this.close();
                    }
                });
            }

            // 输入框
            div.find('input').blur(function(event) {
                event.stopPropagation();
                _this.fixDrawSlow();
            });

            // 打开弹框
            if (this.ops.targetNode) {
                $(this.ops.targetNode).on(this.ops.actionEvent, function(event) {
                    event.stopPropagation();
                    var arr = [].slice.call(arguments);
                    _this.open(arr.slice(1));
                });
            }
        },
        open: function(arg) {
            this.trigger('open', arg);
            this.dom.dialog.css('display', '-webkit-box');
            this.trigger('afteropen', arg);
        },
        close: function(arg) {
            this.dom.dialog.hide();
            this.trigger('close', arg);
        },
        getDialog: function() {
            return this.dom.dialog;
        },
        fixDrawSlow: function() {
            var top = $(window).scrollTop();
            setTimeout(function() {
                $(window).scrollTop(top + 1);
                setTimeout(function() {
                    $(window).scrollTop(top);
                }, 10);
            }, 1);
        },
    };
})(Zepto, sq.ui);
