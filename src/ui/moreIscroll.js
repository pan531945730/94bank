;
(function($){
    var moreIscroll = function(op){
        this.op = {
            cont : $('.mb-cont'),
            info : $('.mb-info'),
            myLoad : $('.load'),
            mbBot : $('.bot'),
            getNextStatus : true,
            ajaxFun : 'GetBill',
            ajaxData : {
                page : 2 ,
                pageSize: 15
            }            
        };
        this.init();
    }
    moreIscroll.prototype.init = function(){
        var self = this;
        function checkGetNextPage() {
            var winHeight = $(window).height(),
                listHeight = self.op.cont.height(),
                listTop = self.op.cont.offset().top,
                scrollTop = $(window).scrollTop();
            if (winHeight + scrollTop >= listTop + listHeight && self.op.getNextStatus === true) {
                return true;
            }
            return false;
        }

        $(window).on('scroll',function(){
            getNextPage();
        })

        function getNextPage(){
            if (!checkGetNextPage()) {
                return;
            }
            self.op.getNextStatus = false;
            var mbLoadData = {
                data: self.op.ajaxData,
                mFun: self.op.ajaxFun,
                beforeFun : function(){
                    self.op.myLoad.show();
                },
                sucFun : function(v){
                    var arr = [] ,
                        length = v.RecordList.length;
                    
                    self.op.myLoad.hide();
                    mbNone.hide();
                    htmlTep(v.RecordList,arr);

                    self.op.info.append(arr.join(''));   
                    
                    if(length >= self.op.ajaxData.pageSize){
                        self.op.getNextStatus = true;
                    }else{
                        self.op.mbBot.show();
                    }
                    self.op.ajaxData.page = self.op.ajaxData.page + 1;
                },
                unusualFun : function(v){
                    self.op.mbBot.show();
                }
            }
            JSBK.Utils.postAjax(mbLoadData);                        
        }
    }    
    module.exports = moreIscroll;
})(Zepto)