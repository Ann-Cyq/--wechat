// 详情页
var common = require("../../common/common.js");
var detailUrl = "goods/inqgoods";
Page({
    data:{
       details:[] 
    },
    onLoad:function(options){
        var that = this;
        var id = options.id;
        wx.request({
            url: common.COMMON + detailUrl+"?id="+id,
            success:function(res){
                var goodspics = res.data.data.goodspics;
                // 定义一个空数组用来接收商品图片地址
                var details = goodspics.split("#");
                that.setData({
                    details: details
                });
            }
        })
    }
});